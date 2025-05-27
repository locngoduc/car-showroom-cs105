import {
  BakeShadows,
  Html,
  OrbitControls,
  PerspectiveCamera,
  PositionalAudio,
  TrackballControls
} from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { carModelComponents } from "../../lib/carModelComponents";
import { maxDistance } from "../../lib/constants/constants";
import { CarManufacturer } from "../../lib/types/types";
import { useCarColorStore } from "../../lib/zustandstores/carColorStore";
import { useFloorStateStore } from "../../lib/zustandstores/floorStore";
import { useLoadingStateStore } from "../../lib/zustandstores/loadingStore";
import { useSelectedCarStore } from "../../lib/zustandstores/selectedCarStore";
import { useUIStore } from "../../lib/zustandstores/uiStore";
import Lighting from "../Lighting/Lighting";
import CarSwitchTransition from "../UI/CarSwitchTransition/CarSwitchTransition";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import SceneLanding from "../UI/Scene/SceneLanding/SceneLanding";
import Showcase from "../UI/Scene/Showcase/Showcase";
import Floor from "./Floor/Floor";

const Scene = () => {
  const { isInShowcaseMenu } = useUIStore();
  const { color, setColor } = useCarColorStore();
  const { isLoading, setIsLoading, isModelReady, setIsModelReady } = useLoadingStateStore();
  const { isFloorVisible, setIsFloorVisible } = useFloorStateStore();
  const { selectedCar, setSelectedCar } = useSelectedCarStore();

  const audioRef = useRef<any>(null);
  const orbitControlsRef = useRef<any>(null);

  const startEngine = () => {
    if (audioRef.current) {
      audioRef.current.setVolume(30);
      audioRef.current.play();
    }
  };

  const resetCameraPosition = () => {
    const orbitControls = orbitControlsRef.current;
    if (orbitControls) {
      orbitControls.reset();
    }
  };

  // delays for transition
  useEffect(() => {
    setIsLoading(true);
    setIsModelReady(false);
    setIsFloorVisible(false);
    resetCameraPosition();
    setSelectedCar(selectedCar);

    if (selectedCar.colors.length > 0) {
      setColor(selectedCar.colors[0]);
    }

    setTimeout(() => {
      setIsFloorVisible(true);
      setIsModelReady(true);
      setIsLoading(false);
    }, 3000);
  }, [selectedCar]);

  const CarModelComponent =
    carModelComponents[selectedCar.manufacturer as CarManufacturer];

  return (
    <>
      {isLoading ? (
        <CarSwitchTransition selectedCar={selectedCar} />
      ) : (
        <>
          <PerspectiveCamera
            makeDefault
            position={[0, 2, maxDistance]}
            fov={25}
          />

          <Lighting />

          {/* for smooth zooming */}
          <TrackballControls
            noRotate
            noPan
            zoomSpeed={0.5}
            target={[0, 0, 0]}
          />

          <OrbitControls
            makeDefault
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.6}
            minPolarAngle={1.15}
            maxPolarAngle={Math.PI - 1.55}
            enableZoom={false}
            enableRotate={true}
            rotateSpeed={0.6}
            ref={orbitControlsRef}
            minDistance={20}
            maxDistance={maxDistance + 2}
          />

          {/* isModelReady fixes the unusually high volume level on the first time the engine audio is played*/}
          {isModelReady && (
            <>
              {CarModelComponent && (
                <Suspense fallback={<LoadingSpinner />}>
                  <CarModelComponent color={color} />
                  {selectedCar.sound && (
                    <PositionalAudio
                      ref={audioRef}
                      url={selectedCar.sound}
                      position={
                        selectedCar.manufacturer === "Dodge"
                          ? [0, -1, -2]
                          : [0, -1, -9]
                      }
                      loop={false}
                      distance={0.7}
                    />
                  )}
                  <BakeShadows />
                </Suspense>
              )}
            </>
          )}

          {/* prevents floor plane from flashing between the landing page and canvas transition */}
          {isFloorVisible === true ? <Floor /> : ""}

          <Html fullscreen>
            {isInShowcaseMenu === true ? (
              <Showcase startEngine={startEngine} />
            ) : (
              <SceneLanding />
            )}
          </Html>
        </>
      )}
    </>
  );
};

export default Scene;

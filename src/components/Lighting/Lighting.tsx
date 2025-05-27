import { SpotLight } from "@react-three/drei";
import * as THREE from "three";

const Lighting = () => {
  const white = "#DCDCDC";
  const warmWhite = "#FFF8DC";
  const coolBlue = "#E6F3FF";
  const lightIntensity = 2500;
  const lightIntensityOffset = 200;
  const lightDistance = 60;
  const shadowResolution = 1024;
  const shadowBias = -0.0009;
  const shadowBiasOffset = -0.00035;
  const spotlightHeight = 8;
  const spotlightPenumbra = 1;
  const spotlightAngle = 1;

  const spotlightParams = {
    topSpotlightColor: white,
    topSpotlightIntensity: lightIntensity - lightIntensityOffset,
    topSpotlightAngle: 2.5,
    topSpotlightPenumbra: spotlightPenumbra,
    topSpotlightDistance: 45,
    topSpotlightX: 0,
    topSpotlightY: 15,
    topSpotlightZ: 0,

    frontSpotlightColor: white,
    frontSpotlightIntensity: lightIntensity,
    frontSpotlightAngle: spotlightAngle,
    frontSpotlightPenumbra: spotlightPenumbra,
    frontSpotlightDistance: lightDistance,
    frontSpotlightX: 0,
    frontSpotlightY: spotlightHeight,
    frontSpotlightZ: 34,

    rearSpotlightColor: white,
    rearSpotlightIntensity: lightIntensity,
    rearSpotlightAngle: spotlightAngle,
    rearSpotlightPenumbra: spotlightPenumbra,
    rearSpotlightDistance: lightDistance,
    rearSpotlightX: 0,
    rearSpotlightY: spotlightHeight,
    rearSpotlightZ: -34,

    rightSpotlightColor: white,
    rightSpotlightIntensity: lightIntensity,
    rightSpotlightAngle: spotlightAngle,
    rightSpotlightPenumbra: spotlightPenumbra,
    rightSpotlightDistance: lightDistance,
    rightSpotlightX: -34,
    rightSpotlightY: spotlightHeight,
    rightSpotlightZ: 0,

    leftSpotlightColor: white,
    leftSpotlightIntensity: lightIntensity,
    leftSpotlightAngle: spotlightAngle,
    leftSpotlightPenumbra: spotlightPenumbra,
    leftSpotlightDistance: lightDistance,
    leftSpotlightX: 34,
    leftSpotlightY: spotlightHeight,
    leftSpotlightZ: 0,
  };

  return (
    <>
      <group name="lights">
        {/* Ambient light for overall scene illumination */}
        <ambientLight color={warmWhite} intensity={0.4} />
        
        {/* Hemisphere light for natural lighting feel */}
        <hemisphereLight
          color={coolBlue}
          groundColor="#444444"
          intensity={0.6}
        />

        {/* Directional light for strong shadows and definition */}
        <directionalLight
          color={white}
          intensity={1.2}
          position={[10, 20, 5]}
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-camera-far={50}
          shadow-camera-left={-30}
          shadow-camera-right={30}
          shadow-camera-top={30}
          shadow-camera-bottom={-30}
          shadow-bias={-0.0001}
        />

        {/* Main spotlights (existing) */}
        <SpotLight
          color={spotlightParams.topSpotlightColor}
          intensity={spotlightParams.topSpotlightIntensity}
          distance={spotlightParams.topSpotlightDistance}
          angle={spotlightParams.topSpotlightAngle}
          penumbra={spotlightParams.topSpotlightPenumbra}
          position={[
            spotlightParams.topSpotlightX,
            spotlightParams.topSpotlightY,
            spotlightParams.topSpotlightZ,
          ]}
          shadow-bias={shadowBias - shadowBiasOffset}
          shadow-mapSize={[shadowResolution, shadowResolution]}
          castShadow
        />

        <SpotLight
          color={spotlightParams.frontSpotlightColor}
          intensity={spotlightParams.frontSpotlightIntensity}
          distance={spotlightParams.frontSpotlightDistance}
          angle={spotlightParams.frontSpotlightAngle}
          penumbra={spotlightParams.frontSpotlightPenumbra}
          position={[
            spotlightParams.frontSpotlightX,
            spotlightParams.frontSpotlightY,
            spotlightParams.frontSpotlightZ,
          ]}
          shadow-bias={shadowBias}
          shadow-mapSize={[shadowResolution, shadowResolution]}
          castShadow
        />

        <SpotLight
          color={spotlightParams.rearSpotlightColor}
          intensity={spotlightParams.rearSpotlightIntensity}
          distance={spotlightParams.rearSpotlightDistance}
          angle={spotlightParams.rearSpotlightAngle}
          penumbra={spotlightParams.rearSpotlightPenumbra}
          position={[
            spotlightParams.rearSpotlightX,
            spotlightParams.rearSpotlightY,
            spotlightParams.rearSpotlightZ,
          ]}
          shadow-bias={shadowBias}
          shadow-mapSize={[shadowResolution, shadowResolution]}
          castShadow
        />

        <SpotLight
          color={spotlightParams.leftSpotlightColor}
          intensity={spotlightParams.leftSpotlightIntensity}
          distance={spotlightParams.leftSpotlightDistance}
          angle={spotlightParams.leftSpotlightAngle}
          penumbra={spotlightParams.leftSpotlightPenumbra}
          position={[
            spotlightParams.leftSpotlightX,
            spotlightParams.leftSpotlightY,
            spotlightParams.leftSpotlightZ,
          ]}
          shadow-bias={shadowBias}
          shadow-mapSize={[shadowResolution, shadowResolution]}
          castShadow
        />

        <SpotLight
          color={spotlightParams.rightSpotlightColor}
          intensity={spotlightParams.rightSpotlightIntensity}
          distance={spotlightParams.rightSpotlightDistance}
          angle={spotlightParams.rightSpotlightAngle}
          penumbra={spotlightParams.rightSpotlightPenumbra}
          position={[
            spotlightParams.rightSpotlightX,
            spotlightParams.rightSpotlightY,
            spotlightParams.rightSpotlightZ,
          ]}
          shadow-bias={shadowBias}
          shadow-mapSize={[shadowResolution, shadowResolution]}
          castShadow
        />

        {/* Additional accent lighting for showroom objects */}
        {/* Corner accent lights */}
        <pointLight
          color={warmWhite}
          intensity={800}
          distance={25}
          position={[20, 6, 20]}
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <pointLight
          color={warmWhite}
          intensity={800}
          distance={25}
          position={[-20, 6, 20]}
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <pointLight
          color={warmWhite}
          intensity={800}
          distance={25}
          position={[20, 6, -20]}
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <pointLight
          color={warmWhite}
          intensity={800}
          distance={25}
          position={[-20, 6, -20]}
          castShadow
          shadow-mapSize={[512, 512]}
        />

        {/* Rim lighting for better object definition */}
        <SpotLight
          color={coolBlue}
          intensity={1000}
          distance={40}
          angle={0.8}
          penumbra={0.5}
          position={[-15, 10, -25]}
          target-position={[0, 0, 0]}
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <SpotLight
          color={coolBlue}
          intensity={1000}
          distance={40}
          angle={0.8}
          penumbra={0.5}
          position={[15, 10, -25]}
          target-position={[0, 0, 0]}
          castShadow
          shadow-mapSize={[512, 512]}
        />

        {/* Ceiling lights for general illumination */}
        <pointLight
          color={white}
          intensity={1200}
          distance={30}
          position={[0, 14, 0]}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight
          color={white}
          intensity={800}
          distance={25}
          position={[15, 12, 0]}
        />
        <pointLight
          color={white}
          intensity={800}
          distance={25}
          position={[-15, 12, 0]}
        />
        <pointLight
          color={white}
          intensity={800}
          distance={25}
          position={[0, 12, 15]}
        />
        <pointLight
          color={white}
          intensity={800}
          distance={25}
          position={[0, 12, -15]}
        />

        {/* Ground-level accent lighting */}
        <pointLight
          color="#00ff88"
          intensity={300}
          distance={15}
          position={[15, 1, -20]}
        />
        <pointLight
          color="#00ff88"
          intensity={300}
          distance={15}
          position={[-15, 1, -20]}
        />
        <pointLight
          color="#00ff88"
          intensity={300}
          distance={15}
          position={[20, 1, 15]}
        />
        <pointLight
          color="#00ff88"
          intensity={300}
          distance={15}
          position={[-20, 1, 15]}
        />
      </group>
    </>
  );
};

export default Lighting;

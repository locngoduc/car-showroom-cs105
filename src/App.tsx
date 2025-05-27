import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience/Experience";
import LandingMenu from "./components/UI/LandingMenu/LandingMenu";
import { useUIStore } from "./lib/zustandstores/uiStore";

const App = () => {
  const { isInLandingMenu } = useUIStore();

  return (
    <>
      {isInLandingMenu ? (
        <LandingMenu />
      ) : (
        <Canvas
          shadows
          gl={{
            alpha: true,
            toneMappingExposure: 0.85,
          }}
          style={{ background: "black" }}
          frameloop="demand"
          eventSource={document.getElementById("root") as HTMLElement}
        >
          <Experience />
        </Canvas>
      )}
    </>
  );
};

export default App;

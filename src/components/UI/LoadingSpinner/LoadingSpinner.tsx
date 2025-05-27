import { Html } from "@react-three/drei";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <Html
      center
      className="flex justify-center items-center w-screen h-screen"
    >
      <div id="loading-container">
        <div id="loading-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Html>
  );
};

export default LoadingSpinner;

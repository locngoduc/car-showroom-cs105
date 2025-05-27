import { Suspense } from "react";
import Scene from "../Scene/Scene";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

const Experience = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Scene />
    </Suspense>
  );
};

export default Experience;

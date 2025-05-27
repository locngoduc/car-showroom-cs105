import { createContext } from "react";
import { useUIStore } from "../../../../lib/zustandstores/uiStore";
import "./Showcase.css";
import ShowcaseCarDetails from "./ShowcaseCarDetails/ShowcaseCarDetails";
import ShowcaseCarLabel from "./ShowcaseCarLabel/ShowcaseCarLabel";
import ShowcaseHeader from "./ShowcaseHeader/ShowcaseHeader";

type ShowcaseProps = {
  startEngine: () => void;
};

export const EngineContext = createContext<ShowcaseProps>({
  startEngine: () => {
    console.error("startEngine() was called without a provider.");
  },
});

const Showcase = ({ startEngine }: ShowcaseProps) => {
  const { isUIVisible, isInShowcaseMenu } = useUIStore();

  return (
    <div className=" main-ui-container">
      <EngineContext.Provider value={{ startEngine }}>
        <ShowcaseHeader />
      </EngineContext.Provider>
      <div
        className={`${
          isUIVisible === false || isInShowcaseMenu === false
            ? "invisible ui-invisible-animation"
            : "visible showcase-container ui-visible-animation"
        }`}
      >
        <ShowcaseCarLabel />
        <ShowcaseCarDetails />
      </div>
    </div>
  );
};

export default Showcase;

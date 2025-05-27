import { BiSolidDetail } from "react-icons/bi";
import { AiOutlineLineChart } from "react-icons/ai";
import { iconColor, iconSize } from "../../../../lib/constants/constants";
import { useUIStore } from "../../../../lib/zustandstores/uiStore";
import "./SceneLanding.css";
import SceneLandingHeader from "./SceneLandingHeader/SceneLandingHeader";
import SceneLandingCarSelection from "./SceneLandingMenu/SceneLandingCarSelection/SceneLandingCarSelection";
import SceneLandingPaintSelection from "./SceneLandingMenu/SceneLandingPaintSelection/SceneLandingPaintSelection";

const SceneLanding = () => {
  const {
    isInCarSelection,
    isInPaintSelection,
    isUIVisible,
    setIsInShowcaseMenu,
    toggleUI,
    isPerfVisible,
    togglePerf,
  } = useUIStore();

  const UIHandler = () => {
    setIsInShowcaseMenu(true);
    if (!isUIVisible) {
      toggleUI();
    }
  };

  return (
    <div className="main-ui-container">
      <SceneLandingHeader />
      <div className="scene-landing-menu">
        {!isInPaintSelection && <SceneLandingCarSelection />}
        {!isInCarSelection && <SceneLandingPaintSelection />}
        {!isInCarSelection && !isInPaintSelection && (
          <div className="flex gap-2">
            <button 
              className="ui-btn" 
              onClick={() => togglePerf()}
              aria-label="Toggle performance monitor"
              style={{ backgroundColor: isPerfVisible ? 'rgba(0, 255, 136, 0.2)' : 'transparent' }}
            >
              <AiOutlineLineChart color={isPerfVisible ? "#00ff88" : iconColor} size={iconSize} />
            </button>
            <button className="ui-btn" onClick={() => UIHandler()}>
              <BiSolidDetail color={iconColor} size={iconSize} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SceneLanding;

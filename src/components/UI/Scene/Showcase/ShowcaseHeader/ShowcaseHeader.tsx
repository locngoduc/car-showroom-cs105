import { useContext } from "react";
import { useUIStore } from "../../../../../lib/zustandstores/uiStore";
import { EngineContext } from "../Showcase";
import "./ShowcaseHeader.css";
import { IoCaretBackOutline } from "react-icons/io5";
import { iconColor, iconSize } from "../../../../../lib/constants/constants";
import { BiSolidTachometer } from "react-icons/bi";
import { AiOutlineLineChart } from "react-icons/ai";

const ShowcaseHeader = () => {
  const {
    isUIVisible,
    toggleUI,
    toggleShowcaseMenu,
    isInCarSelection,
    isInPaintSelection,
    setIsInCarSelection,
    setIsInPaintSelection,
    isPerfVisible,
    togglePerf,
  } = useUIStore();
  const { startEngine } = useContext(EngineContext);

  const uiHandler = () => {
    toggleShowcaseMenu();
    if (isInCarSelection) {
      setIsInCarSelection(false);
    }
    if (isInPaintSelection) {
      setIsInPaintSelection(false);
    }
  };

  return (
    <header className="showcase-header">
      <div className="flex gap-2">
        <button
          onClick={() => uiHandler()}
          className="ui-btn"
          aria-label="Toggle the user interface."
        >
          <IoCaretBackOutline size={iconSize} color={iconColor} />
        </button>
      </div>
      <div className="flex gap-2">
        <button
          onClick={startEngine}
          className="ui-btn"
          aria-label="Start engine."
        >
          <BiSolidTachometer size={iconSize} color={iconColor} />
        </button>
        <button
          onClick={togglePerf}
          className="ui-btn"
          aria-label="Toggle performance monitor."
          style={{ backgroundColor: isPerfVisible ? 'rgba(0, 255, 136, 0.2)' : 'transparent' }}
        >
          <AiOutlineLineChart size={iconSize} color={isPerfVisible ? "#00ff88" : iconColor} />
        </button>
        <button
          onClick={toggleUI}
          className="ui-btn"
          aria-label="Toggle the user interface."
        >
          {isUIVisible === false ? "Show UI" : "Hide UI"}
        </button>
      </div>
    </header>
  );
};

export default ShowcaseHeader;

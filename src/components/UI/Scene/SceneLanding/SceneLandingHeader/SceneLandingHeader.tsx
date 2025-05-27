import { useCarColorStore } from "../../../../../lib/zustandstores/carColorStore";
import { useSelectedCarStore } from "../../../../../lib/zustandstores/selectedCarStore";
import { useUIStore } from "../../../../../lib/zustandstores/uiStore";
import "./SceneLandingHeader.css";

const SceneLandingHeader = () => {
  const { selectedCar } = useSelectedCarStore();
  const { color } = useCarColorStore();

  return (
    <header className="scene-landing-header">
      <div className="text-white flex items-center gap-2">
        <img
          src={selectedCar.country}
          alt={selectedCar.country}
          width={20}
          height={20}
        />
        <p className="text-xs sm:text-base">
          {selectedCar.manufacturer}{" "}
          <span className="text-white/50">
            {selectedCar.model}{" "}<span className="hidden sm:inline-block">in {color.name}</span>
          </span>
        </p>
      </div>
    </header>
  );
};

export default SceneLandingHeader;

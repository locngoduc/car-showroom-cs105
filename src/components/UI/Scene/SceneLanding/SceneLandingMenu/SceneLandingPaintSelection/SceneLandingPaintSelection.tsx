import { IoCaretBackOutline } from "react-icons/io5";
import { PiPaintBucketFill } from "react-icons/pi";
import { iconColor, iconSize } from "../../../../../../lib/constants/constants";
import { useCarColorStore } from "../../../../../../lib/zustandstores/carColorStore";
import { useSelectedCarStore } from "../../../../../../lib/zustandstores/selectedCarStore";
import { useUIStore } from "../../../../../../lib/zustandstores/uiStore";
import "./SceneLandingPaintSelection.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/UI/carousel";

const SceneLandingPaintSelection = () => {
  const { setColor } = useCarColorStore();
  const { selectedCar } = useSelectedCarStore();
  const { isInPaintSelection, togglePaintSelection } = useUIStore();

  return (
    <>
      {isInPaintSelection ? (
        <>
          <Carousel
            className="paint-sample-container"
            opts={{
              align: "start",
              dragFree: true,
            }}
          >
            <button onClick={togglePaintSelection} className="ui-btn">
              <IoCaretBackOutline color={iconColor} size={iconSize} />
            </button>
            <CarouselContent className="paint-samples gap-2 m-2">
              {selectedCar.colors.map((color, index) => (
                <CarouselItem
                  key={index}
                  style={{ backgroundColor: color.hexCode }}
                  className="basis-1/4 md:basis-1/6 p-5 cursor-pointer rounded-sm hover:scale-110 active:scale-95 transition-all"
                  onClick={() => setColor(color)}
                  aria-label={`Change the current color to ${color.name}.`}
                />
              ))}
            </CarouselContent>
          </Carousel>
        </>
      ) : (
        <button onClick={togglePaintSelection} className="ui-btn">
          <PiPaintBucketFill color={iconColor} size={iconSize} />
        </button>
      )}
    </>
  );
};

export default SceneLandingPaintSelection;

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/UI/carousel";
import { IoCaretBackOutline } from "react-icons/io5";
import { PiGarageFill } from "react-icons/pi";
import { cars } from "../../../../../../lib/cars";
import { iconColor, iconSize } from "../../../../../../lib/constants/constants";
import { useSelectedCarStore } from "../../../../../../lib/zustandstores/selectedCarStore";
import { useUIStore } from "../../../../../../lib/zustandstores/uiStore";
import "./SceneLandingCarSelection.css";

const SceneLandingCarSelection = () => {
  const { selectedCar, setSelectedCar } = useSelectedCarStore();
  const { isInCarSelection, setIsInCarSelection, toggleCarSelection } =
    useUIStore();

  return (
    <>
      {isInCarSelection ? (
        <>
          <Carousel
            className="car-selection-container"
            opts={{
              align: "start",
              dragFree: true,
            }}
          >
            <button onClick={toggleCarSelection} className="ui-btn">
              <IoCaretBackOutline color={iconColor} size={iconSize} />
            </button>
            <CarouselContent className="car-selection-list gap-2 m-2">
              {cars.map((car, index) =>
                car.manufacturer !== selectedCar.manufacturer ? (
                  <CarouselItem
                    className="basis-1/2 sm:basis-1/4 md:basis-1/6 flex items-center justify-center p-1 cursor-pointer hover:scale-110 active:scale-95 hover:bg-white/20 transition-all outline outline-1 outline-white/30 hover:outline-white rounded-sm"
                    key={index}
                    onClick={() => {
                      setSelectedCar(car);
                      setIsInCarSelection(!isInCarSelection);
                    }}
                    aria-label={`Select the ${car.year} ${car.manufacturer} ${car.model}.`}
                  >
                    <img
                      src={car.logo}
                      alt={`${car.manufacturer} ${car.model}`}
                      height={40}
                      width={40}
                      
                    />
                  </CarouselItem>
                ) : (
                  ""
                )
              )}
            </CarouselContent>
          </Carousel>
        </>
      ) : (
        <button onClick={toggleCarSelection} className="ui-btn">
          <PiGarageFill color={iconColor} size={iconSize} />
        </button>
      )}
    </>
  );
};

export default SceneLandingCarSelection;

// this component contains the name, model & year of the car

import { useSelectedCarStore } from "../../../../../lib/zustandstores/selectedCarStore";
import "./ShowcaseCarLabel.css";

const CarLabel = () => {
  const { selectedCar } = useSelectedCarStore();

  return (
    <section id="middle">
      <div className="logo-container">
        <img
          src={selectedCar.logo}
          height={100}
          width={100}
          className="hidden lg:block"
        />
        <p className="mobile-car-manu-model">{selectedCar.manufacturer}{" "}<span className="text-white/50">{selectedCar.model}</span></p>
      </div>
      <hgroup className="current-car-container font-fjalla">
        <div className="current-car">
          <img
            src={selectedCar.country}
            alt={selectedCar.country}
            width={25}
            height={25}
          />
          <h2 className="text-2xl">{selectedCar.manufacturer} </h2>
        </div>

        <h3 className="text-7xl">{selectedCar.model}</h3>
        <h4 className="text-2xl">{selectedCar.year}</h4>
      </hgroup>
      <div />
    </section>
  );
};

export default CarLabel;

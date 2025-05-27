// this component contains the extra details/description of the car which is shown on the bottom of the page

import { useSelectedCarStore } from "../../../../../lib/zustandstores/selectedCarStore";
import "./ShowcaseCarDetails.css";

const ShowcaseCarDetails = () => {
  const { selectedCar } = useSelectedCarStore();

  return (
    <section className="main-container">
      <div className="car-information">
        <div className="car-information-container">
          <p className="detail">
            <span className="detail-text">Displacement</span>
            <span className="detail-number">{selectedCar.displacement}</span>
          </p>
        </div>
        <div className="car-information-container">
          <p className="detail">
            <span className="detail-text">Max. Power</span>
            <span className="detail-number">{selectedCar.maxPower}</span>
          </p>
        </div>
        <div className="car-information-container">
          <span className="detail">
            <span className="detail-text">Max. Torque</span>
            <span className="detail-number">{selectedCar.torque}</span>
          </span>
        </div>
        <div className="car-information-container">
          <p className="detail">
            <span className="detail-text">Drivetrain</span>
            <span className="detail-number">{selectedCar.drivetrain}</span>
          </p>
        </div>
        <div className="car-information-container">
          <p className="detail">
            <span className="detail-text">Length</span>
            <span className="detail-number">{selectedCar.length}</span>
          </p>
        </div>
        <div className="car-information-container">
          <p className="detail">
            <span className="detail-text">Width</span>
            <span className="detail-number">{selectedCar.width}</span>
          </p>
        </div>
        <div className="car-information-container">
          <p className="detail">
            <span className="detail-text">Height</span>
            <span className="detail-number">{selectedCar.height}</span>
          </p>
        </div>
        <div className="car-information-container">
          <p className="detail">
            <span className="detail-text">Weight</span>
            <span className="detail-number">{selectedCar.weight}</span>
          </p>
        </div>
      </div>
      <div className="slider">
        <p className="sliding-text">{selectedCar.description}</p>
      </div>
    </section>
  );
};

export default ShowcaseCarDetails;

import { TravelIcon } from "../../../components/Icons/TravelIcon";
import { useLocation } from "react-router-dom";
import { travelData } from "../../js/TravelsData";



export const TravelDetails = (props) => {
  const location = useLocation();
  const id = location.state && location.state.id;
  // const travel = travelData.find((item) => item.id === parseInt(id));
  const travel = travelData.find((item) => item.id === parseInt("2"));



  return (
    <div className="travel-details">
      <div className="travel-details__info">
        <span className="travel-details__title">Overview</span>
        <span className="travel-details__text">Details</span>
      </div>
      <div className="travel-value">
        <div className="travel-value__item">
          <div className="travel-value__element">
            {" "}
            <TravelIcon type="clock" />
          </div>
          <span>{travel.time} hours</span>
        </div>
        <div className="travel-value__item">
          <div className="travel-value__element">
            <TravelIcon type="cloud" />
          </div>
          <span>{travel.temperature} °C</span>
        </div>
        <div className="travel-value__item">
          <div className="travel-value__element">
            {" "}
            <TravelIcon type="star2" />
          </div>
          <span>{travel.rating}</span>
        </div>
      </div>
      {/* className="travel-details__desc" */}
      <p className="travel-details__desc">
        {travel.text}
      </p>
    </div>
  );
};

import { LocationIcon } from "../../../components/Icons/LocationIcon";
import { TravelIcon } from "../../../components/Icons/TravelIcon";

export const HomeTravelInfo = ({ itemTravel }) => {
  return (
    <div className="home-travel-item__container">
      <div className="home-travel-item__info">
        <div className="home-travel-item__name">
          {itemTravel.name}
          {/* <span>{itemTravel.nameSpan}</span> */}
        </div>
        <div className="home-travel-item__value">
          <div className="place">
            <span>
            <LocationIcon/>
            </span>
            {itemTravel.place}
          </div>
          <div className="rating">
            <span>
            <TravelIcon type="star" />
            </span>
            {itemTravel.rating}
          </div>
        </div>
      </div>
    </div>
  );
};

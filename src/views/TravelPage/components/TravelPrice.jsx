import { LocationIcon } from "../../../components/Icons/LocationIcon";

export const TravelPrice = ({ itemTravel }) =>  {
  return (
    <div className="travel-info">
      <div className="travel-info__adress-container">
        <h4 className="travel-info__title">{itemTravel.nameTravel}</h4>
        <span className="travel-info__adress">
          <LocationIcon />
          {itemTravel.place}
        </span>
      </div>
      <div className="travel-info__price">
        <span className="travel-info__text">Price</span>
        <span className="travel-info__value">
          <span className="travel-info__currency">{itemTravel.currency}</span>{itemTravel.price}
        </span>
      </div>
    </div>
  );
};

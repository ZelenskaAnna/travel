import { LocationIcon } from "../../../components/Icons/LocationIcon";

export const FujiPrice = () => {
  return (
    <div className="travel-info">
      <div className="travel-info__adress-container">
        <h4 className="travel-info__title">Mount Fuji</h4>
        <span className="travel-info__adress">
          <LocationIcon />
          Tokyo
        </span>
      </div>
      <div className="travel-info__price">
        <span className="travel-info__text">Price</span>
        <span className="travel-info__value">
          <span className="travel-info__currency">$</span>200
        </span>
      </div>
    </div>
  );
};

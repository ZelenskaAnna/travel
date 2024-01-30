import { LocationIcon } from "../../../components/Icons/LocationIcon";

export const AndesPrice = () => {
  return (
    <div className="travel-info">
      <div className="travel-info__adress-container">
        <h4 className="travel-info__title">Andes Mountain</h4>
        <span className="travel-info__adress">
          <LocationIcon />
          South, America
        </span>
      </div>
      <div className="travel-info__price">
        <span className="travel-info__text">Price</span>
        <span className="travel-info__value">
          <span className="travel-info__currency">$</span>230
        </span>
      </div>
    </div>
  );
};

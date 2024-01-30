import { TravelIcon } from "../../../components/Icons/TravelIcon";

export const FujiDetails = () => {
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
          <span>9 hours</span>
        </div>
        <div className="travel-value__item">
          <div className="travel-value__element">
            <TravelIcon type="cloud" />
          </div>
          <span>18 °C</span>
        </div>
        <div className="travel-value__item">
          <div className="travel-value__element">
            {" "}
            <TravelIcon type="star" />
          </div>
          <span>4.8</span>
        </div>
      </div>
      <p className="travel-details__desc">
        This vast mountain range is renowned for its remarkable diversity in
        terms of topography and climate. It features towering peaks, active
        volcanoes, deep canyons, expansive plateaus, and lush valleys. The Andes
        are also home to{" "}
      </p>
    </div>
  );
};

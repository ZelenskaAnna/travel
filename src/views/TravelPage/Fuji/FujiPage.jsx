import { ArchiveIcon } from "../../../components/Icons/ArchiveIcon";
import { ArrowBackIcon } from "../../../components/Icons/ArrowBackIcon";
import { SendIcon } from "../../../components/Icons/SendIcon";
import { FujiPrice } from "./FujiPrice";
import { FujiDetails } from "./FujiDetails";

export const FujiPage = () => {
  return (
    <>
      <div className="travel__container">
        <div className="travel__img-container">
          <ArrowBackIcon />
          <ArchiveIcon />
          <img className="travel__img" src="/travel.png" alt="Mount Fuji" />
          <FujiPrice />
        </div>
        <FujiDetails />
        <a href="/" className="travel__btn">
          Book Now
          <span>
            <SendIcon />
          </span>
        </a>
      </div>
    </>
  );
};

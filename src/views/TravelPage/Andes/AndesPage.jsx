import { ArchiveIcon } from "../../../components/Icons/ArchiveIcon";
import { ArrowBackIcon } from "../../../components/Icons/ArrowBackIcon";
import { SendIcon } from "../../../components/Icons/SendIcon";
import { AndesPrice } from "./AndesPrice";
import { AndesDetails } from "./AndesDetails";

export const AndesPage = () => {
  return (
    <>
      <div className="travel__container">
        <div className="travel__img-container">
          <ArrowBackIcon />
          <ArchiveIcon />
          <img
            className="travel__img"
            src="/travel2.png"
            alt="Andes Mountain"
          />
          <AndesPrice />
        </div>
        <AndesDetails />
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

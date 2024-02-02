import { ArchiveIcon } from "/src/components/Icons/ArchiveIcon";
import { ArrowBackIcon } from "/src/components/Icons/ArrowBackIcon";
import { SendIcon } from "/src/components/Icons/SendIcon";
import { TravelPrice } from "./components/TravelPrice";
import { TravelDetails } from "./components/TravelDetails";
import { travelData } from "../js/TravelsData";
import { useParams } from "react-router-dom";

export const TravelPage = (props) => {
  // const location = useLocation();
  const { id } = useParams();
  // const id = location.state && location.state.id;
  // const travel = travelData.find((item) => item.id === parseInt(id));
  // const travel = travelData.find((item) => item.id === parseInt("2"));
  const travel = travelData.find((item) => item.id === parseInt(id));

  if (!travel) {
    return <div>Travel not found</div>;
  }

  return (
    <>
      <div className="container travel__container">
        <div className="travel__img-container">
          <ArrowBackIcon />
          <ArchiveIcon />
          <img
            className="travel__img"
            src={travel.pathImgTravel}
            alt="Andes Mountain"
          />
          <TravelPrice itemTravel={travel}/>
        </div>
        <TravelDetails />
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

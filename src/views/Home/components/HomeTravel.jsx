import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HeartIcon } from "../../../components/Icons/HeartIcon";
import { travelData } from '/src/views/js/TravelsData.js';
import { HomeTravelInfo } from "./HomeTravelInfo";



export const HomeTravel = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="home-travel">
      <motion.ul
        className="home-travel__list"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {travelData.map((itemTravel) => (
          <motion.li
            key={itemTravel.id}
            variants={item}
            className="home-travel-item"
          >
            <HeartIcon />
            <Link
              to={{ pathname: '/travel/' + itemTravel.id, state: { id: itemTravel.id } }}
            >
              <img src={itemTravel.pathImg} alt="travel" />
              <HomeTravelInfo itemTravel={itemTravel} />
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

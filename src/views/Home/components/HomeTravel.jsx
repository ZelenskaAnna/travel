import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HeartIcon } from "../../../components/Icons/HeartIcon";

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
        <motion.li variants={item} className="home-travel-item">
          <HeartIcon />
          <Link to="/fuji">
            <img src="/travel.png" alt="travel" />
          </Link>
        </motion.li>
        <motion.li variants={item} className="home-travel-item">
          <HeartIcon />
          <Link to="/andes">
            <img src="/travel2.png" alt="travel" />
          </Link>
        </motion.li>
        <motion.li variants={item} className="home-travel-item">
          <Link to="/travel">
            <img src="/travel.png" alt="travel" />
          </Link>
        </motion.li>
        <motion.li variants={item} className="home-travel-item">
          <Link to="/travel">
            <img src="/travel.png" alt="travel" />
          </Link>
        </motion.li>
        <motion.li variants={item} className="home-travel-item">
          <Link to="/travel">
            <img src="/travel.png" alt="travel" />
          </Link>
        </motion.li>
        <motion.li variants={item} className="home-travel-item">
          <Link to="/travel">
            <img src="/travel.png" alt="travel" />
          </Link>
        </motion.li>
      </motion.ul>
    </div>
  );
};

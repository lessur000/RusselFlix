import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "../ui/icons";
import styles from "../../styles/twStyles";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={`${styles.paddings} text-white`}>
      <div className="flex items-center flex-col space-y-3">
        <div className="flex items-center gap-3">
          <FaFacebook size={30} />
          <FaInstagram size={30} />
          <FaYoutube size={30} />
          <FaTwitter size={30} />
        </div>
        <Link
          to={"/"}
          className="text-white text-2xl sm:text-4xl uppercase font-['Skyscraper']"
        >
          Russel<span className="text-red-500">Flix</span>
        </Link>
        <span>Flix © 2025, All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;

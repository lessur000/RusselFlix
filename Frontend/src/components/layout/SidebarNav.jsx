import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import useToggleStore from "../store/useToggleStore";
import { sidebarNav } from "../../utils/motion";
const SidebarNav = () => {
  const { isNavOpen } = useToggleStore();
  return (
    <>
      <Motion.nav
        initial="hidden"
        animate={isNavOpen ? "open" : "hidden"}
        variants={sidebarNav("right")}
        className="fixed inset-0 left-auto top-22 z-50 bg-white w-50 h-50 p-6 rounded-l-xl "
      >
        <div className="flex flex-col items-center text-black gap-5 font-semibold text-2xl ">
          <Link>Home</Link>
          <Link>Movies</Link>
          <Link>Anime</Link>
        </div>
      </Motion.nav>
    </>
  );
};

export default SidebarNav;

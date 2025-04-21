import { RxHamburgerMenu, HiOutlineX, CiSearch } from "../ui/icons";
import styles from "../../styles/twStyles";
import Nav from "./Nav";
import useToggleStore from "../store/useToggleStore";
import SidebarNav from "./SidebarNav";
import { useEffect, useState } from "react";
import data from "../../utils/data";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Header = () => {
  const { toggleNav, isNavOpen, toggleSearch, isSearchOpen } = useToggleStore();
  const [scrolled, setScrolled] = useState(false);
  const cardData = [
    ...data.animeData.map((item) => ({ ...item, type: "anime" })),
    ...data.Movie.map((item) => ({ ...item, type: "movie" })),
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.paddings} ${
        styles.flexBetween
      } fixed top-0 w-full z-20 ${
        scrolled ? "bg-black" : "bg-transparent"
      } transition-colors duration-300`}
    >
      <div className="flex items-center gap-10">
        <Link
          to={"/"}
          className="text-white text-2xl sm:text-4xl uppercase font-['Skyscraper']"
        >
          Russel<span className="text-red-500">Flix</span>
        </Link>
        <Nav className="hidden md:flex" />
      </div>

      <div className="flex items-center gap-5">
        {/* Desktop Search (hidden on mobile) */}
        <div className="hidden sm:block">
          <SearchBar cardData={cardData} />
        </div>

        {/* Mobile Search Toggle */}
        <button onClick={toggleSearch} className="sm:hidden text-white">
          {isSearchOpen ? <HiOutlineX size={30} /> : <CiSearch size={30} />}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleNav}
          className="text-white focus:outline-none transition-transform duration-200 md:hidden"
          aria-label={isNavOpen ? "Close menu" : "Open menu"}
        >
          {isNavOpen ? <HiOutlineX size={30} /> : <RxHamburgerMenu size={30} />}
        </button>
      </div>

      {/*  Search (appears when toggle) */}
      {isSearchOpen && (
        <div className="absolute top-full right-0 md:hidden z-30">
          <SearchBar cardData={cardData} />
        </div>
      )}

      {/* Sidebar Navigation with Overlay */}
      {isNavOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-30 "
            onClick={toggleNav}
          />
          <SidebarNav className="z-40" />
        </>
      )}
    </header>
  );
};

export default Header;

import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MdOutlineArrowOutward } from "react-icons/md";
import closeIcon from "../assets/close-icon.svg";
import menuIcon from "../assets/menu-icon.svg";
import useMediaQuery from "../hooks/useMediaQuery";
const Link = ({ page, isTopOfPage, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? "text-p1"
          : "md:text-[#192a32] text-white"
      } hover:text-p1 transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAvobeSmallScreens = useMediaQuery("(min-width:768px)");
  const navbarBackground = isTopOfPage
    ? ""
    : " fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-gray-200";

  return (
    // z-40 w-full fixed top-0 ${navbarBackground} border-b
    //  bg-white border-gray-300   py-6
    <nav className={`${isTopOfPage ? "" : "bg-white"}  ${navbarBackground}`}>
      <div className="flex  items-center py-4 justify-between  customWidth">
        <div className=" ">
          <h4 className="font-playfair  text-3xl font-bold">
            <span className="text-p1">N</span>iloy
            <span className="text-p1">.</span>
          </h4>
        </div>

        <div className="md:block hidden">
          {/* dextop nav */}
          {/* ml-16 */}
          {isAvobeSmallScreens ? (
            <div className="bg-white   px-10 p-4 rounded-full flex justify-between gap-12 lg:ml-16 font-opensans text-sm font-semibold">
              <Link
                page="Home"
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="About"
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              {/* <Link
              page="Testimonials"
              isTopOfPage={isTopOfPage}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            /> */}
              <Link
                page="Contact"
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          ) : (
            <button
              className="rounded-full    cursor-pointer bg-p1 p-2 transition-all duration-500 "
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <img alt="menu-icon" src={menuIcon} />
            </button>
          )}
        </div>
        {isMenuToggled && (
          <div
            className="fixed inset-0 bg-[#000] opacity-60 z-40"
            onClick={() => setIsMenuToggled(false)}
          />
        )}
        {/* mobile menu popup */}
        <div
          className={`xl:hidden  bg-gray-950 transition-all duration-300 fixed top-0 right-0 h-full shadow-xl z-50  overflow-hidden w-80 ${
            isMenuToggled
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          {/* close icon */}
          <div className="flex justify-end p-12">
            <button
              className=" cursor-pointer bg-p1 hover:bg-p1/80 "
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <img
                src="close-icon"
                className="w-[35px] "
                src={closeIcon}
                alt=""
              />
            </button>
          </div>

          {/* menu items */}
          <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            {/* <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              /> */}
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>

        <AnchorLink
          className="md:hidden lg:block 3xs:mr-5 2xs:mr-10  "
          href="#contact"
          onClick={() => setSelectedPage("contact")}
        >
          <div
            className=" group py-3 px-4 cursor-pointer justify-center gap-3 
    border border-gray-300 hover:border-p1/50
    bg-white/80 hover:bg-p1 
    text-gray-700 hover:text-white
    rounded-full font-semibold 
    transition-all duration-500 ease-out
    w-[155px] flex items-center
    transform hover:scale-105 hover:-translate-y-0.5
    shadow-md hover:shadow-lg
    backdrop-blur-sm"
          >
            <span className="transition-all duration-300 group-hover:tracking-wider">
              Contact
            </span>
            <MdOutlineArrowOutward
              className="transition-all duration-300 
      group-hover:rotate-45 group-hover:scale-110"
            />
          </div>
        </AnchorLink>

        <button
          className="rounded-full md:hidden block  cursor-pointer bg-p1 p-2 transition-all duration-500 "
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          <img alt="menu-icon" src={menuIcon} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

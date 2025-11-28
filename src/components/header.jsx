import { useState } from "react";
import { navLists } from "./navlists";
import { useNavigate } from "react-router";

export default function Header() {
  const [navToggle, setNavToggle] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setNavToggle((prev) => !prev); // toggle state
  };

  return (
    <nav className="header mx-auto bg-primary py-6 z-20">
      <div className="layout flex justify-between items-center mx-auto">
        {/* Logo */}
        <div className="logo text-black text-2xl font-medium z-20">
          <button onClick={() => navigate("/")}>Portrait Room</button>
        </div>

        {/* Desktop Menu */}
        <div className="links hidden md:block">
          <ul className="nav-links flex justify-between">
            {navLists.map((list, index) => {
              const lowerList = list.toLowerCase();

              const navigateAndScroll = (sectionId) => {
                setNavToggle(false);
                navigate("/");

                setTimeout(() => {
                  const el = document.getElementById(sectionId);
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 200); // allow home to render
              };

              const handleClick = () => {
                const validSections = ["services", "pricing", "blog"];

                if (validSections.includes(lowerList)) {
                  navigateAndScroll(lowerList);
                } else {
                  navigate(`/${lowerList}`);
                  setNavToggle(false);
                }
              };

              return (
                <li key={index}>
                  <button
                    onClick={handleClick}
                    className="active text-lg font-medium hover:opacity-70 capitalize md:ml-10 transition duration-300"
                  >
                    {list}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Hamburger Menu */}
        <div
          onClick={handleClick}
          className="hamburger md:hidden cursor-pointer relative w-6 h-5 z-30"
        >
          {/* Top bar */}
          <div
            className={`hamburger-top absolute left-0 h-0.5 w-full bg-black transition-transform duration-300 ${
              navToggle ? "rotate-45 top-2.5" : "top-0"
            }`}
          ></div>

          {/* Middle bar */}
          <div
            className={`hamburgr-middle absolute left-0 h-0.5 w-full bg-black transition-all duration-300 ${
              navToggle ? "opacity-0 top-2.5" : "opacity-100 top-2"
            }`}
          ></div>

          {/* Bottom bar */}
          <div
            className={`hamburger-bottom absolute left-0 h-0.5 w-full bg-black transition-transform duration-300 ${
              navToggle ? "-rotate-45 top-2.5" : "top-4"
            }`}
          ></div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`absolute top-20 h-full w-full bg-gray-800/80 md:hidden shadow-lg overflow-hidden transition-all duration-300 z-30 ${
          navToggle ? "py-18" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col justify-center items-center w-full">
          {navLists.map((list, index) => {
            const lowerList = list.toLowerCase();

            const navigateAndScroll = (sectionId) => {
              setNavToggle(false);
              navigate("/");

              setTimeout(() => {
                const el = document.getElementById(sectionId);
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
              }, 200); // allow home to render
            };

            const handleClick = () => {
              const validSections = ["services", "pricing", "blog"];

              if (validSections.includes(lowerList)) {
                navigateAndScroll(lowerList);
              } else {
                navigate(`/${lowerList}`);
                setNavToggle(false);
              }
            };
            return (
              <li key={index} className="border-t border-primary/50 w-[95%]">
                <button
                  onClick={handleClick}
                  className="text-primary text-center text-[1rem] font-medium py-5 w-full  hover:opacity-50 uppercase transition duration-300"
                >
                  {list}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

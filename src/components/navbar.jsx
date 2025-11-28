import { useState } from "react";
import { navLists } from "./navlists";
import { useNavigate } from "react-router";

export default function Navbar() {
  const [navToggle, setNavToggle] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setNavToggle((prev) => !prev); // toggle state
  };

  return (
    <nav className="navbar layout mx-auto max-w-[95%] md:max-w-[90%]">
      <div className="flex justify-between items-center mx-auto">
        {/* Logo */}
        <div className="logo text-2xl font-medium z-30">
          <button onClick={() => navigate("/")}>Portrait Room</button>
        </div>

        {/* Desktop Menu */}
        <div className="links hidden md:block">
          <ul className="nav-links flex justify-between">
            {navLists.map((list, index) => {
              const lowerList = list.toLowerCase();

              const handleClick = () => {
                const isValidSection = ["services", "pricing", "blog"].includes(
                  lowerList
                );

                if (isValidSection) {
                  const section = document.getElementById(lowerList);
                  section?.scrollIntoView({
                    behavior: "smooth",
                    block: "start", // ⬅ scroll to top
                  });
                } else {
                  // Navigate to another route
                  navigate(`/${lowerList}`);
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
            className={`hamburger-top absolute left-0 h-0.5 w-full bg-primary transition-transform duration-300 ${
              navToggle ? "rotate-45 top-2.5" : "top-0"
            }`}
          ></div>

          {/* Middle bar */}
          <div
            className={`hamburgr-middle absolute left-0 h-0.5 w-full bg-primary transition-all duration-300 ${
              navToggle ? "opacity-0 top-2.5" : "opacity-100 top-2"
            }`}
          ></div>

          {/* Bottom bar */}
          <div
            className={`hamburger-bottom absolute left-0 h-0.5 w-full bg-primary transition-transform duration-300 ${
              navToggle ? "-rotate-45 top-2.5" : "top-4"
            }`}
          ></div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute  -top-10 left-0 h-screen w-full bg-gray-800/80 md:hidden shadow-lg overflow-hidden transition-all duration-300 ${
            navToggle ? " pt-32" : "max-h-0 py-0"
          }`}
        >
          <ul className="flex flex-col items-left px-4 z-50">
            {navLists.map((list, index) => {
              const lowerList = list.toLowerCase();

              const handleClick = () => {
                const isValidSection = ["services", "pricing", "blog"].includes(
                  lowerList
                );

                if (isValidSection) {
                  const section = document.getElementById(lowerList);
                  section?.scrollIntoView({
                    behavior: "smooth",
                    block: "start", // ⬅ scroll to top
                  });
                } else {
                  // Navigate to another route
                  navigate(`/${lowerList}`);
                }
              };

              return (
                <li key={index} className="border-t border-primary/50 w-[95%]">
                  <button
                    onClick={() => {
                      handleClick();
                      setNavToggle(false); // close the menu
                    }}
                    className="text-primary text-center text-[1rem] font-medium py-5 w-full  hover:opacity-50 uppercase transition duration-300"
                  >
                    {list}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

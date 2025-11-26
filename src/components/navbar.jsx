// import { useState } from "react";
// import { navLists } from "./navlists";

// export default function Navbar() {
//   const [navToggle, setNavToggle] = useState(false);
//   const handleClick = () => {
//     setNavToggle(true);
//   };
//   return (
//     <nav className="navbar layout absolute top-4 z-20 w-full flex justify-between items-center">
//       <div className="logo text-2xl font-medium">
//         <a href="index.html">The Portrait Room</a>
//       </div>
//       <div className="links hidden md:block">
//         <ul className="nav-links flex justify-between">
//           {navLists.map((list, index) => (
//             <li key={index}>
//               <a
//                 href="index.html"
//                 className="active text-lg font-medium text-primary hover:opacity-70  capitalize md:ml-6 transition duration-300"
//               >
//                 {list}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {navToggle && (
//         <div
//           onClick={handleClick}
//           className={`hamburger md:hidden z-20 ${
//             !navToggle ? " " : "rotate-90"
//           }`}
//         >
//           <div
//             className={`hamburger-top ${
//               !navToggle ? " " : "rotate-45 translate-y-1.5 translate-x-1.5"
//             }`}
//           ></div>
//           <div
//             className={`hamburger-middle ${!navToggle ? " " : "hidden"}`}
//           ></div>
//           <div
//             className={`hamburger-bottom ${
//               !navToggle ? " " : "-rotate-45 translate-y-1.5 -translate-x-1.5"
//             }`}
//           ></div>
//         </div>
//       )}
//     </nav>
//   );
// }

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
    <nav className="navbar layout mx-auto">
      <div className="flex justify-between items-center mx-auto">
        <div className="logo text-2xl font-medium z-20">
          <button onClick={() => navigate("/")}>Portrait Room</button>
        </div>

        <div className="links hidden md:block">
          <ul className="nav-links flex justify-between">
            {navLists.map((list, index) => {
              const lowerList = list.toLowerCase();

              const handleClick = () => {
                if (lowerList === "service" || lowerList === "blog") {
                  // Scroll to section
                  const section = document.getElementById(lowerList);
                  section?.scrollIntoView({ behavior: "smooth" });
                } else if (lowerList === "home") {
                  // Navigate to home
                  navigate("/");
                } else {
                  // Navigate to another route
                  navigate(`/${lowerList}`);
                }
              };

              return (
                <li key={index}>
                  <button
                    onClick={handleClick}
                    className="active text-lg font-medium hover:opacity-70 capitalize md:ml-6 transition duration-300"
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
          className={`absolute  -top-10 left-0 w-full bg-black/95 md:hidden shadow-lg overflow-hidden transition-all duration-300 ${
            navToggle ? " pt-28 pb-18" : "max-h-0 py-0"
          }`}
        >
          <ul className="flex flex-col items-left px-4 z-50">
            {/* {navLists.map((list, index) => (
              <li key={index} className="py-3">
                <a
                  href="index.html"
                  className="text-lg font-medium  hover:opacity-70 capitalize transition duration-300"
                  onClick={() => setNavToggle(false)} // close menu when link clicked
                >
                  {list}
                </a>
              </li>
            ))} */}
            {navLists.map((list, index) => {
              const lowerList = list.toLowerCase();

              const handleClick = () => {
                if (lowerList === "service" || lowerList === "blog") {
                  // Scroll to section
                  const section = document.getElementById(lowerList);
                  section?.scrollIntoView({ behavior: "smooth" });
                } else if (lowerList === "home") {
                  // Navigate to home
                  navigate("/");
                } else {
                  // Navigate to another route
                  navigate(`/${lowerList}`);
                }
              };

              return (
                <li key={index} className="py-3">
                  <button
                    onClick={() => {
                      handleClick(); // your original click handler
                      setNavToggle(false); // close the menu
                    }}
                    className="text-lg font-medium  hover:opacity-70 capitalize transition duration-300"
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

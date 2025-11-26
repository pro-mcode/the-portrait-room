import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export const footerLists = [
  // {
  //   title: "Links",
  //   items: ["About", "Gallery", "Blogs"],
  // },
  {
    title: "Services",
    items: [
      "Outdoor Shots",
      "Commercial Shoots",
      "Wedding Shots",
      "Long Hour Shoots",
    ],
  },
  {
    title: "Contacts",
    items: [
      "info@theportraitroom.com",
      "(404) 555-0198",
      "1275 Peachtree St NE, Atlanta, GA 30309",
    ],
  },
  {
    title: "Social Links",
    items: [
      <FaInstagram className="h-9 w-9 border border-primary p-1.5 rounded-full text-primary" />,
      <FaX className="h-9 w-9 border border-primary p-1.5 rounded-full text-primary" />,
      <FaLinkedin className="h-9 w-9 border border-primary p-1.5 rounded-full text-primary" />,
      <FaYoutube className="h-9 w-9 border border-primary p-1.5 rounded-full text-primary" />,
    ],
    isSocial: true, // flag for icons
  },
];

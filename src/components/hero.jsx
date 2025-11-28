import Navbar from "./navbar";
import { useNavigate } from "react-router";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="hero relative flex flex-col justify-end items-center h-[60vh] md:justify-center md:min-h-[80vh] lg:min-h-screen 2xl:max-h-320">
      <div className="absolute top-8 w-full mx-auto text-primary z-10">
        <Navbar />
      </div>
      <img
        src="/assets/images/AD-Mphgmain.jpg"
        alt="hero-image"
        className="hero-img absolute inset-0 w-full h-full"
      />

      <div className="layout hero-content absolute space-y-6 mb-12 max-w-[95%] md:max-w-[90%] lg:max-w-full md:mb-0">
        <p className="text-2xl font-medium">Shutter</p>
        <img src="/assets/images/AD-Mphgline.webp" alt="" />
        <h1 className="text-3xl font-bold mb-6 md:text-5xl lg:text-6xl md:mb-12">
          Living stories
          <br />
          in every shot.
        </h1>
        <button
          onClick={() => navigate("/gallery")}
          className="btn-hero group"
          href="/gallery.html"
        >
          <span>View Gallery</span>
          <i className="fa-solid fa-arrow-right mt-0.5 group-hover:translate-x-1.5 transition-all duration-300"></i>
        </button>
      </div>
    </div>
  );
}

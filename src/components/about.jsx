import { useNavigate } from "react-router";
import { serviceAward } from "./service-award";

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="about about-section-preview bg-gray-100 py-12 md:py-24">
      <div className="layout mx-auto">
        <div className="w-full mx-auto about-content flex flex-col justify-center gap-8 md:max-w-260 md:flex-row ">
          <div className="about-img h-102 w-102 md:h-auto md:w-[40%] md:min-h-160 hidden md:block">
            <img
              src="/assets/images/about2.jpg"
              alt=""
              className="shadow-md h-full w-full mx-auto"
            />
          </div>
          <div className="space-y-8 md:w-[60%] md:mt-8">
            <div className="about-profile ">
              <h5 className="text-2xl font-bold opacity-60 sm:text-3xl">
                About Us
              </h5>
              <p className="text-2xl font-semibold tracking-wider leading-10 my-6 opacity-80 sm:text-3xl">
                We are passionate photographers dedicated to capturing your
                timeless memories...
              </p>
              <button
                onClick={() => navigate("/about")}
                className="btn-regular group"
              >
                <span>Read More</span>
                <i className="fa-solid fa-arrow-right mt-0.5 group-hover:translate-x-1.5 transition duration-300"></i>
              </button>
            </div>
            <div className="about-service flex flex-col gap-4 sm:flex-row">
              {serviceAward.map((item) => (
                <div key={item.serviceTitle}>
                  <span className="text-3xl opacity-70 sm:text-4xl">
                    {item.icon}
                  </span>
                  <h5 className="text-2xl font-medium opacity-70 mt-4 sm:text-3xl">
                    {item.serviceTitle}
                  </h5>
                  <p className="text-sm sm:text-base md:text-lg font-medium">
                    {item.outlineInfo}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

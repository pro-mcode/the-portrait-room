import { clientsLogo } from "./clients";
import { serviceAward } from "./service-award";
export default function AboutUS() {
  return (
    <div className="about about-section-preview">
      <div className="relative w-full h-64 flex flex-col justify-end items-start md:h-84 lg:102">
        <img
          src="/assets/images/about.webp"
          alt=""
          className="absolute shadow-md h-full w-full"
        />
        <div className="absolute left-4 flex flex-col justify-center items-center lg:left-[7.5%]">
          <h1 className=" text-4xl text-primary text-left font-bold w-50 mb-8 sm:text-5xl sm:w-xs md:text-6xl">
            About our agency
          </h1>
        </div>
      </div>
      <div className="layout mx-auto my-12 space-y-18 md:my-18">
        <div className="w-full mx-auto about-content flex flex-col justify-center gap-8 md:min-w-full md:flex-row">
          <div className="about-img h-full w-full md:h-auto md:w-[45%] md:min-h-160">
            <img
              src="/assets/images/about-us.webp"
              alt=""
              className="shadow-md max-h-120 w-full mx-auto md:min-h-full"
            />
          </div>
          <div className="space-y-8 md:w-[55%] md:mt-8">
            <div className="about-profile ">
              <h5 className="text-2xl font-bold opacity-60">About Us</h5>
              <p className="text-lg font-normal tracking-wide leading-8 my-6 opacity-80">
                We are passionate photographers dedicated to capturing your
                timeless memories with artistry, intention, and care. Every
                moment—big or small—deserves to be beautifully preserved, and we
                approach each session with the goal of telling your unique
                story. From candid emotions to carefully crafted portraits, we
                strive to create imagery that feels authentic, meaningful, and
                unforgettable. Our commitment is to provide you with a
                photography experience that is comfortable, creative, and
                ultimately reflective of the moments you want to cherish
                forever.
              </p>
            </div>
            <div className="about-service flex flex-col gap-4 sm:flex-row">
              {serviceAward.map((item) => (
                <div key={item.serviceTitle}>
                  <span className="text-3xl opacity-70">{item.icon}</span>
                  <h5 className="text-2xl font-medium opacity-70 mt-4 mb-2">
                    {item.serviceTitle}
                  </h5>
                  <p className="text-base md:text-lg font-medium">
                    {item.outlineInfo}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full grid gap-8 justify-between items-center grid-cols-2 md:grid-cols-4 mx-auto">
          {clientsLogo.map((logo, index) => (
            <div key={index} className="">
              <img
                src={logo}
                alt=""
                className="w-[70%] h-[70%] max-w-48 mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

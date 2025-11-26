import { useState } from "react";
import { serviceContents } from "./service-content";

export default function Service() {
  const [activeIndex, setActiveIndex] = useState(0); // first item open by default

  return (
    <section id="service" className="service py-12">
      <div className="layout mx-auto">
        <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-center font-medium tracking-wide">
          Services we offer
        </h2>

        <p className="section-intro w-full text-sm text-center tracking-wider leading-6 font-medium pt-2 sm:text-base md:py-4 md:text-lg">
          Every photo tells a story. Explore a range of personalized photography
          services designed to capture the moments that matter most — from
          intimate portraits to grand celebrations.
        </p>

        {/* === TWO COLUMN LAYOUT === */}
        <div className="max-w-120 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-start md:min-w-full">
          {/* LEFT SIDE – LIST */}
          <div className="space-y-6">
            {serviceContents.map((service, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={service.title}
                  onClick={() => setActiveIndex(index)}
                  className="cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <span
                      className={`text-4xl hidden text-black transition-colors duration-300 md:block ${
                        isActive ? "" : "opacity-50"
                      }`}
                    >
                      {service.icon}
                    </span>

                    {/* Title + Description */}
                    <div>
                      <div className="flex gap-4">
                        <span
                          className={`text-3xl text-black sm:text-4xl md:hidden transition-colors duration-300 ${
                            isActive ? "" : "opacity-70"
                          }`}
                        >
                          {service.icon}
                        </span>

                        <h3
                          className={`text-[1.3rem] text-black font-semibold transition-colors duration-300 sm:text-2xl ${
                            isActive ? "" : "opacity-70"
                          }`}
                        >
                          {service.title}
                        </h3>
                      </div>

                      {/* Only show description if active */}
                      {isActive && (
                        <>
                          <p className="text-sm sm:text-base md:text-lg mt-3 leading-6 text-gray-700">
                            {service.description}
                          </p>
                          <img
                            src={serviceContents[activeIndex].img}
                            alt={serviceContents[activeIndex].title}
                            className="w-full h-auto max-h-70 shadow-md md:hidden mt-4"
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE – IMAGE */}
          <div>
            <img
              src={serviceContents[activeIndex].img}
              alt={serviceContents[activeIndex].title}
              className="hidden w-full h-auto max-h-100 shadow-md md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { packagesCard } from "./packages-card";

export default function Packages() {
  return (
    <div className="packages bg-gray-100 py-12 md:py-24">
      <div className="layout mx-auto">
        <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-center font-medium tracking-wide">
          Our packages
        </h2>

        <p className="section-intro w-full text-sm text-center tracking-wider leading-6 font-medium pt-2 sm:text-base md:py-4 md:text-lg">
          Choose the perfect plan that suits your needs and budget.
        </p>
        <div className="package-container font-inter flex flex-col space-y-4 md:space-y-0 md:flex-row justify-center items-cente gap-x-4 w-full max-w-5xl mx-auto mt-8 ">
          {packagesCard.map((card, index) => (
            <div
              key={index}
              className={`package-card text-center w-full max-w-76 mx-auto md:w-1/3 py-22 px-12  ${
                index === 1
                  ? "bg-black/85 text-primary border-none"
                  : "bg-primary border border-black"
              }`}
            >
              <p className="package-type text-lg tracking-wider sm:text:2xl font-medium mb-8 ">
                {card.type}
              </p>
              <hr />
              <h3 className="price text-5xl font-medium tracking-wider my-10 boder border-rd-700 ">{`$${card.price}`}</h3>
              <hr />
              <ul className="my-6">
                {card.offers.map((item, index) => (
                  <li
                    key={index}
                    className="my-4 text-sm tracking-wide font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <button
                className={`btn-package group mx-auto mt-10 ${
                  index === 1 ? "btn bg-primary border-none" : ""
                }`}
              >
                <span>Book Now</span>
                <i className="fa-solid fa-arrow-right group-hover:translate-x-1.5 transition duration-300"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

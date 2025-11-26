import { teamImage } from "./team-img";
export default function Team() {
  return (
    <div className="about about-section-preview bg-gray-100 py-12 md:py-24">
      <div className="layout mx-auto">
        <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-center font-bold tracking-wide pb-4">
          Meet our creative & awesome team
        </h2>

        <p className="section-intro w-full text-sm text-center tracking-wider leading-6 font-medium pt-2 sm:text-base md:py-4 md:text-lg">
          Driven by creativity, our team crafts unique visual stories, capturing
          love, joy, and timeless emotions through artistic photography and
          dedication.
        </p>
        <div className="w-full mx-auto about-content flex flex-col justify-center gap-8 md:max-w-260 md:flex-row mt-10">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto">
            {teamImage.map((team) => (
              <img src={team} alt="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

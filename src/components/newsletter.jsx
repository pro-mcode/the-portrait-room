import { shapes } from "./shapes";
export default function Newsletter() {
  return (
    <section id="newsletter" className="review py-24">
      <div className="layout mx-auto">
        <div className="relative bg-black/95 flex flex-col justify-center items-center py-20 px-4 md:px-20">
          <h3 className="text-2xl font-bold text-primary text-center min-w-full md:text-3xl">
            Seeking a skilled photographer for future projects? Join our mailing
            list for updates, openings, and collaboration opportunities.
          </h3>
          <div className="flex flex-col min-w-[80%]  md:border md:border-primary md:py-2 md:px-4 mt-10 md:min-w-[50%] md:flex-row">
            <input
              placeholder="Enter your email"
              type="text"
              name=""
              id=""
              className="text-base text-primary flex-1 placeholder:text-primary/70 outline-none py-3 px-4 border border-primary md:border-none md:p-0"
            />
            <button className="btn-regular bg-primary mx-auto mt-3 md:mx-0 md:mt-0">
              Submit
            </button>
          </div>
          {shapes.map((shape, i) => (
            <div key={i} className={`absolute box ${shape.className}`}></div>
          ))}
        </div>
      </div>
    </section>
  );
}

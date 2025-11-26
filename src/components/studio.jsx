import { studioStep } from "./studio-step";

export default function Studio() {
  return (
    <section className=" py-12">
      <div className="layout mx-auto">
        <p className="section-intro w-full text-sm text-center tracking-wider leading-6 font-medium sm:text-[20px] py-4 opacity-50">
          Our Studio.
        </p>
        <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-center font-bold tracking-wide">
          Step by step make incredible
        </h2>

        <div className="step-container w-full mx-auto mt-16 md:max-w-5xl">
          {studioStep.map((step) => (
            <div class="flex flex-col space-y-4 py-12 border-t border-gray-400 sm:flex-row">
              <span className="w-full text-2xl md:w-1/3">{step.id}</span>
              <h3 className="w-full text-2xl md:w-1/3">{step.title}</h3>
              <p className="w-full md:w-1/3 text-lg opacity-60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

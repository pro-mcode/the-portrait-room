export default function Review() {
  return (
    <section id="review" className="review py-12">
      <div className="layout mx-auto">
        <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-center font-medium tracking-wide">
          What clients say about us
        </h2>
        <p className="section-intro w-full text-sm text-center tracking-wider leading-6 font-medium pt-2 sm:text-base md:py-4 md:text-lg">
          Read inspiring client reviews that showcase our passion,
          professionalism, and dedication to capturing life's most important
          moments beautifully and timelessly.
        </p>
        <div className="review-container w-full max-w-92 mx-auto space-y-8 flex flex-col justify-center items-center gap-x-12 my-10 md:flex-row md:min-w-full md:space-y-0">
          <div className="review-image">
            <img src="assets/images/AD-Mphg15.jpg" alt="Client photo" />
          </div>
          <div className="review-content">
            <h2 className="review-logo text-3xl font-extrabold mb-6">Forbes</h2>
            <p className="review-text text-[1.3rem] font-light lg:text-[1.5rem] xl:text-[1.7rem]">
              "From the very first meeting to the delivery of the photos,
              everything was seamless. The images are timeless and something I
              will treasure forever."
            </p>
            <p className="review-author text-[1.3rem] font-bold my-8">
              <strong>Jessica Rhodes</strong>
            </p>
            <button className="btn-regular group" href="/about.html">
              <span>Read All</span>
              <i className="fa-solid fa-arrow-right group-hover:translate-x-1.5 mt-.5"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

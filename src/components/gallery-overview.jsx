import { gallery } from "./gallery";
export default function GalleryOverview() {
  return (
    <div className="about about-section-preview">
      <div className="relative w-full h-64 flex flex-col justify-end items-start md:h-84 lg:102">
        <img
          src="/assets/images/gallery.webp"
          alt=""
          className="absolute shadow-md h-full w-full"
        />
        <div className="absolute left-4 flex flex-col justify-center items-center lg:left-[7.5%]">
          <h1 className=" text-4xl text-primary text-left font-bold w-50 mb-8 sm:text-5xl sm:w-xs md:text-6xl">
            Every Face, A Story.
          </h1>
        </div>
      </div>
      <div className="layout mx-auto mt-12 md:mt-18">
        <div className="gallery-items">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="gallery-item relative hover:bg-black/50 transition duration-300"
            >
              <img
                src={item.img}
                alt={`gallery ${item.id}`}
                className="absolute inset-0 -z-10"
              />
            </div>
          ))}
        </div>
        <button className="btn-regular mx-auto md:mt-4">Load more</button>
      </div>
    </div>
  );
}

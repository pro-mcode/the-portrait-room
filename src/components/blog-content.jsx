export default function BlogContent({ blog }) {
  return (
    <section className=" bg-gray-100">
      <div className="relative w-full h-64 flex flex-col justify-end items-start md:h-84 lg:102">
        <img
          src="/assets/images/gallery.webp"
          alt=""
          className="absolute shadow-md h-full w-full"
        />
      </div>
      <div className=" layout w-full max-w-3xl mx-auto mt-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide opacity-70">
          {blog.title}
        </h1>
        <p className="text-base font-extralight text-black/60 py-2 border-t border-b border-gray-400 mt-8 mb-4">
          By <span className="font-bold text-black/80">{blog.author}</span> |
          Last Updated:{" "}
          <span className="font-bold text-black/80">{blog.date}</span>
        </p>
        <img
          src={blog.img}
          alt={blog.title}
          srcset=""
          className="max-h-102 w-full"
        />
        <p className="text-lg text-black/70 py-6 tracking-wide">
          {blog.content}
        </p>

        <h3 className="text-2xl text-black font-medium py-2 mt-6">
          Final Thoughts
        </h3>
        <p className="text-lg text-black/70 tracking-wide">
          Studio photography is an art built on precision, technique, and
          creativity. By mastering lighting fundamentals, experimenting with
          camera angles, guiding your subjects with intention, and refining your
          editing process, you’ll steadily produce stronger and more impactful
          images. Photography is a journey—and every shoot is an opportunity to
          refine your vision.
        </p>
      </div>
    </section>
  );
}

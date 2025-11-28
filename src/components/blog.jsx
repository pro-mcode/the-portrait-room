import { useState } from "react";
import { blogCard } from "./blog-card";
import { useNavigate } from "react-router";

export default function Blog() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 3;
  const totalPages = Math.ceil(blogCard.length / cardsPerPage);

  // Calculate blog slice for current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentBlogs = blogCard.slice(startIndex, startIndex + cardsPerPage);

  // Pagination handlers
  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div id="blog" className="packages bg-gray-100 py-12 md:py-24">
      <div className="layout mx-auto">
        <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-center font-medium tracking-wide">
          Latest blog posts
        </h2>

        <p className="section-intro w-full text-sm text-center tracking-wider leading-6 font-medium pt-2 sm:text-base md:py-4 md:text-lg">
          Welcome to our blog, a space filled with ideas, experiences, and
          photography knowledge designed to spark creativity and inspire
          passion.
        </p>

        {/* BLOG LIST — SHOW ONLY 3 */}
        <div className="blog-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mx-auto max-w-100 sm:max-w-200 lg:max-w-260">
          {currentBlogs.map((blog, index) => (
            <div
              onClick={() => navigate(`/blog/${blog.slug}`)}
              key={index}
              className="blog-card w-full mx-auto cursor-pointer"
            >
              <img
                src={blog.img}
                alt="Blog Post Image"
                className="h-64 w-full object-cover"
              />
              <div className="blog-content bg-primary py-8 px-6">
                <h3 className="text-lg font-bold md:text-[1.3rem] leading-6 mb-4">
                  {blog.title}
                </h3>
                <span className="date text-sm font-medium text-gray-500">
                  {blog.date}
                </span>
                <p className="text-base text-black/70 mt-4">
                  {blog.content.split(" ").slice(0, 15).join(" ")}...
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION BUTTONS */}
        <div className="blog-navigation mt-8 flex justify-center gap-x-4 mx-auto">
          <button
            className="nav-btn prev bg-black/70 py-2 px-5 text-primary cursor-pointer hover:opacity-80 transition duration-300 disabled:opacity-40"
            onClick={goToPrevPage}
            disabled={currentPage === 1}
          >
            ←
          </button>

          <button
            className="nav-btn next bg-black py-2 px-5 text-primary cursor-pointer hover:opacity-80 transition duration-300 disabled:opacity-40"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

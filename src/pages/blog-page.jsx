import Blog from "../components/blog";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import BlogContent from "../components/blog-content";
import { useParams } from "react-router";
import { blogCard } from "../components/blog-card";
import Navbar from "../components/navbar";

export default function BlogPage() {
  const { slug } = useParams();

  const blog = blogCard.find((item) => item.slug === slug);

  return (
    <div>
      <title>Portrait Room</title>
      <div className="py-6 text-primary absolute w-full mx-auto z-10">
        <Navbar />
      </div>
      <BlogContent blog={blog} />
      <Blog blog={blog} />
      <Newsletter />
      <Footer />
    </div>
  );
}

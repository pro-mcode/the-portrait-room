import "./App.css";
import { Routes, Route } from "react-router";
import AboutPage from "./pages/about-page";
import BlogPage from "./pages/blog-page";
import GalleryPage from "./pages/gallery-page";
import HomePage from "./pages/home-page";
import "./scss/style.scss";
import ScrollToTop from "./components/scroll-to-top";
function App() {
  return (
    <div className="max-w-[1700px] mx-auto">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about us" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />

        {/* Dynamic blog page */}
        <Route path="/blog/:slug" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;

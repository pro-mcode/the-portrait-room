import About from "../components/about";
import Hero from "../components/hero";
import Packages from "../components/packages";
import Review from "../components/review";
import Service from "../components/service";
import Showcase from "../components/showcase";
import Blog from "../components/blog";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
export default function HomePage() {
  return (
    <div>
      <title>Portrait Room</title>
      <Hero />
      <Service />
      <About />
      <Showcase />
      <Packages />
      <Review />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
}

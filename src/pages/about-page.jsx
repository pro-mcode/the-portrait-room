import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import AboutUS from "../components/about-us";
import Team from "../components/team";
import Studio from "../components/studio";
import Navbar from "../components/navbar";
export default function AboutPage() {
  return (
    <div>
      <title>Portrait Room</title>
      <div className="py-6 text-primary absolute w-full mx-auto z-10">
        <Navbar />
      </div>
      <AboutUS />
      <Team />
      <Studio />
      <Newsletter />
      <Footer />
    </div>
  );
}

import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import GalleryOverview from "../components/gallery-overview";
import Navbar from "../components/navbar";
export default function GalleryPage() {
  return (
    <div flex flex-col justify-center items-center>
      <title>Portrait Room</title>
      <div className="py-6 text-primary absolute w-full mx-auto z-10">
        <Navbar />
      </div>
      <GalleryOverview />
      <Newsletter />
      <Footer />
    </div>
  );
}

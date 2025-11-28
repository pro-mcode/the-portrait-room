import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import GalleryOverview from "../components/gallery-overview";
import Navbar from "../components/navbar";
import Header from "../components/header";
export default function GalleryPage() {
  return (
    <div flex flex-col justify-center items-center>
      <title>Portrait Room</title>
      <Header />
      <GalleryOverview />
      <Newsletter />
      <Footer />
    </div>
  );
}

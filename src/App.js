import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryCarousel from "./components/CategoryCarousel";
import TopSaversSlider from "./components/TopSaversSlider";
import Instamart from "./components/Instamart";
import Products from "./components/Products";
import Footer from "./components/Footer";
import DownloadSection  from "./components/DownloadSection";
import Categories from "./components/Categories";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryCarousel/>
      <TopSaversSlider />
      <Products />
      <DownloadSection/>
      <Footer />
    </>
  );
}

export default App;
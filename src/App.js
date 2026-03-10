import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryCarousel from "./components/CategoryCarousel";
import TopSaversSlider from "./components/TopSaversSlider";
import Products from "./components/Products";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryCarousel/>
      <TopSaversSlider />
      <Products />
      <Footer />
    </>
  );
}

export default App;

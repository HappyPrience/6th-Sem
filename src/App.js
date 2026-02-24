import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryCarousel from "./components/CategoryCarousel";
import Instamart from "./components/Instamart";
import Products from "./components/Products";
import AppDownload from "./components/AppDownload";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryCarousel />
      <Instamart />
      <Products />
      <AppDownload />
      <Footer />
    </>
  );
}

export default App;
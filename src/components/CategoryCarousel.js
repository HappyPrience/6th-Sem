import "../css/CategoryCarousel.css";
import { useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import veg from "../assets/categories/roti.webp";
import fruits from "../assets/categories/palya.webp";
import dairy from "../assets/categories/Chatnies.webp";
import snacks from "../assets/categories/snacks.jpg";
import bakery from "../assets/categories/sweets.webp";
import pickles from "../assets/categories/pickles.webp";

function CategoryCarousel() {

  const sliderRef = useRef();

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -200,
      behavior: "smooth"
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 200,
      behavior: "smooth"
    });
  };

  const categories = [
    { name: "Roti", img: veg },
    { name: "Palya", img: fruits },
    { name: "Chatnies", img: dairy },
    { name: "Snacks", img: snacks },
    { name: "Sweets", img: bakery },
    { name: "Pickles", img: pickles },
    { name: "Roti", img: veg },
    { name: "Palya", img: fruits },
  ];

  // ✅ Auto sliding left ↔ right
  useEffect(() => {
  const slider = sliderRef.current;
  const cardWidth = 190; // card width + margin
  const totalCards = 6;  // number of real cards
  let index = 0;

  const autoSlide = setInterval(() => {

    if (index >= totalCards - 1) {
      // jump instantly to first card
      slider.scrollTo({
        left: 0,
        behavior: "auto"
      });
      index = 0;

    } else {
      // smooth slide to next card
      slider.scrollBy({
        left: cardWidth,
        behavior: "smooth"
      });
      index++;
    }

  }, 3000); // 3 seconds

  return () => clearInterval(autoSlide);

}, []);

  return (
    <section className="category-section">

      <div className="category-header left">
        <h2>Explore Categories</h2>
      </div>

      <div className="category-slider" ref={sliderRef}>

        <button className="slider-button left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <img src={cat.img} alt={cat.name} style={{ borderRadius: "50%" }} />
            <p>{cat.name}</p>
          </div>
        ))}

        <button className="slider-button right" onClick={scrollRight}>
          <FaChevronRight />
        </button>

      </div>
    </section>
  );
}

export default CategoryCarousel;
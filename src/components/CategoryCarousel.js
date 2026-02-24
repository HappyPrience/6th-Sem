import "./CategoryCarousel.css";
import veg from "../assets/categories/vegetables.png";
import fruits from "../assets/categories/fruits.png";
import dairy from "../assets/categories/dairy.png";
import snacks from "../assets/categories/snacks.png";
import bakery from "../assets/categories/bakery.png";

function CategoryCarousel() {
  const categories = [
    { name: "Vegetables", img: veg },
    { name: "Fruits", img: fruits },
    { name: "Dairy", img: dairy },
    { name: "Snacks", img: snacks },
    { name: "Bakery", img: bakery },
  ];

  return (
    <div className="carousel-section">
      <h2>Shop by Category</h2>

      <div className="carousel">
        {categories.map((cat, index) => (
          <div className="carousel-card" key={index}>
            <img src={cat.img} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryCarousel;
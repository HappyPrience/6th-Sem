import "../css/Products.css";
import Breakfast  from "../assets/products/Breakfast.webp";
import Lunch from "../assets/products/Lunch.webp";
import EveningSncks from "../assets/products/EveningSncks.webp";

function Products() {
  const products = [
    { name: "Breakfast", price: 60, img: Breakfast, rating: 4.5 },
    { name: "Lunch & Dinner", price: 40, img: Lunch, rating: 4.3 },
    { name: "Snacks", price: 120, img: EveningSncks, rating: 4.7 },
  ];

  return (
    <div className="products">
      <h2>Popular Products</h2>

      <div className="product-grid">
        {products.map((p, index) => (
          <div className="product-card" key={index}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

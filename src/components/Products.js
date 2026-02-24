import "./Products.css";
import dosa from "../assets/products/dosa.jpg";
import idli from "../assets/products/idli.jpg";
import pickle from "../assets/products/pickle.jpg";
import cake from "../assets/products/cake.jpg";

import { FaStar } from "react-icons/fa";

function Products() {
  const products = [
    { name: "Homemade Dosa", price: 60, img: dosa, rating: 4.5 },
    { name: "Soft Idli", price: 40, img: idli, rating: 4.3 },
    { name: "Mango Pickle", price: 120, img: pickle, rating: 4.7 },
    { name: "Chocolate Cake", price: 250, img: cake, rating: 4.6 },
  ];

  return (
    <div className="products">
      <h2>Popular Products</h2>

      <div className="product-grid">
        {products.map((p, index) => (
          <div className="product-card" key={index}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p className="price">₹{p.price}</p>
            <p className="rating">
              <FaStar color="green" /> {p.rating}
            </p>
            <button>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
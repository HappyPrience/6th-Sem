import "../css/Products.css";
import Rotti from "../assets/products/Akki Rotti.webp";
import chutney from "../assets/products/Shenga Chutney.webp";
import Holagi from "../assets/products/ShengaHolagi.webp";
import Berry from "../assets/products/Berry.webp";
import Lemon from "../assets/products/Pickles.webp";
import holagi from "../assets/products/ShengaHolagi.webp";
import chakali from "../assets/products/Chakali.webp";

function Products() {

  const products = [
    { name: "Jolad Rotti", price: 60, img: Rotti, rating: 4.5 },
    { name: "Shenga Chuntey", price: 120, img: chutney, rating: 4.3 },
    { name: "Shenga Holagi", price: 80, img: Holagi, rating: 4.7 },
    { name: "StrawBerry", price: 100, img: Berry, rating: 4.4 },
    { name: "Lemon Pickles", price: 90, img: Lemon, rating: 4.6 },
    { name: "Chakli", price: 70, img: holagi, rating: 4.2 },
    { name: "Traditional Meals", price: 140, img: chakali, rating: 4.8 },
    { name: "Evening Specials", price: 110, img: Rotti, rating: 4.5 },
  ];

  return (
    <div className="products">
      <h2>Popular Products</h2>

      <div className="product-grid">
        {products.map((p, index) => (
          <div className="product-card" key={index}>

            <img src={p.img} alt={p.name} />

            <h3>{p.name}</h3>

            <div className="rating">⭐ {p.rating}</div>

            <div className="price-box">
              <span className="new-price">₹{p.price}</span>
            </div>

            <button className="cart-btn">Add to Cart</button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
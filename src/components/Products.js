import "../css/Products.css";
import dosa from "../assets/products/dosa.jpg";
import idli from "../assets/products/idli.jpg";
import pickle from "../assets/products/pickle.jpg";

function Products() {
  const products = [
    { name: "Breakfast", price: 60, img: dosa, rating: 4.5 },
    { name: "Lunch & Dinner", price: 40, img: idli, rating: 4.3 },
    { name: "Snacks", price: 120, img: pickle, rating: 4.7 },
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

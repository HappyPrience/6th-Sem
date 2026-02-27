import "../css/Instamart.css";

function Instamart() {
  const items = [
    "Fresh Vegetables",
    "Fruits",
    "Dairy & Eggs",
    "Rice & Atta",
    "Masalas",
    "Oils & Ghee",
    "Snacks",
    "Beverages"
  ];

  return (
    <div className="instamart">
      <h2>Instamart – Instant Essentials</h2>
      <p>Delivered in minutes</p>

      <div className="insta-grid">
        {items.map((item, index) => (
          <div key={index} className="insta-card">
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Instamart;
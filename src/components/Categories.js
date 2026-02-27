import "../css/Categories.css";

function Categories() {
  const items = [
    "Homemade Food",
    "Bakery",
    "Handicrafts",
    "Organic Items",
    "Pickles",
    "Snacks"
  ];

  return (
    <div className="categories">
      <h2>Order our best options</h2>

      <div className="cards">
        {items.map((item, index) => (
          <div key={index} className="card">
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
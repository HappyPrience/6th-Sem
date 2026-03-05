import "../css/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1>Order Handmade Products Near You</h1>
      <p>Fresh • Local • Homemade</p>
      <input
        type="text"
        placeholder="Search for products..."
        className="search-bar"
      />
    </section>
  );
}

export default Hero;

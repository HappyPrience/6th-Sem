import "../css/Hero.css";
import back from "../assets/back.avif";

function Hero() {
  return (
    <section className="hero">
      

      <div className="hero-slider">
        <div className="slides">
          <img src={back} alt="food1" />
        </div>
      </div>
      
      <div className="thoughts">
        <h1>North Karnataka food is a Celebration of Tradition, 
          Simplicity, and Authentic rural Flavors.</h1>
        <p>Fresh • Local • Homemade</p>
      </div>

      <div className="hero-search">
          <input type="text" placeholder="Search Handmade Products..." />
      </div>
    
    </section>
  );
}

export default Hero;

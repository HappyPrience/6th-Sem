import "../css/Hero.css";
import { useState, useEffect } from "react";
import back from "../assets/back.avif";
import back1 from "../assets/back1.webp";
import back2 from "../assets/back2.webp";

function Hero() {
  const images = [back, back1, back2];
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    const slider = setInterval(()=>{
      setIndex((prev)=>(prev+1)%images.length);
    },3000);

    return ()=>clearInterval(slider);
  },[]);

  return (
    <section className="hero">
      
    
      <div className="hero-slider">
        <div className="slides">
          <img src={back} alt="food1" />
          <img src={back1} alt="food2" />
          <img src={back2} alt="food3" />
        </div>
      </div>
      
      <div className="thoughts">
        <h1>North Karnataka food is a celebration of tradition, 
          simplicity, and authentic rural flavors.</h1>
        <p>Fresh • Local • Homemade</p>
      </div>
      <div className="hero-search">
          <input type="text" placeholder="Search Handmade Products..." />
      </div>
    </section>
  );
}

export default Hero;
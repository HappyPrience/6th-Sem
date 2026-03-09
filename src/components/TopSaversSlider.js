import "../css/TopSaversSlider.css";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import roti from "../assets/categories/roti.webp";
import chutney from "../assets/categories/Chatnies.webp";
import papaya from "../assets/categories/palya.webp";
import grapes from "../assets/categories/snacks.jpg";
import sweets from "../assets/categories/sweets.webp";
import pickles from "../assets/categories/pickles.webp";

function TopSaversSlider() {

    const sliderRef = useRef();

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -300,
            behavior: "smooth"
        });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 300,
            behavior: "smooth"
        });
    };

    const foods = [
        {
            name: "Johar / Jolada Rotti",
            price: "₹750.00",
            oldPrice: "₹1,500.00",
            img: roti,
            stock: "In Stock"
        },
        {
            name: "Shenga Chutney",
            price: "₹250.00",
            oldPrice: "₹500.00",
            img: chutney,
            stock: "In Stock"
        },
        {
            name: "Native Organic Papaya",
            price: "₹9.99",
            oldPrice: "₹15.00",
            img: papaya,
            stock: "In Stock"
        },
        {
            name: "Fresh Red Seedless",
            price: "₹6.99",
            oldPrice: "₹8.00",
            img: grapes,
            stock: "In Stock"
        },
        {
            name: "Native Sweets",
            price: "₹300.00",
            oldPrice: "₹600.00",
            img: sweets,
            stock: "In Stock"
        },
        {
            name: "Spicy Pickles",
            price: "₹150.00",
            oldPrice: "₹300.00",
            img: pickles,
            stock: "In Stock"
        }
    ];

    return (

        <section className="top-savers">

            <div className="top-header">

                <h2>Top Savers Today <span className="offer">20% OFF</span></h2>

                <button className="view-all">View All</button>

            </div>

            <div className="slider-container">

                <button className="slider-btn left" onClick={scrollLeft}>
                    <FaChevronLeft />
                </button>

                <div className="food-slider" ref={sliderRef}>

                    {foods.map((food, index) => (
                        <div className="food-card" key={index}>

                            <div className="discount">20%</div>

                            <img src={food.img} alt={food.name} />

                            <h3>{food.name}</h3>

                            <p className="stock">● {food.stock}</p>

                            <div className="price">

                                <span className="new">{food.price}</span>
                                <span className="old">{food.oldPrice}</span>

                            </div>

                            <button className="cart-btn">Add to Cart</button>

                        </div>
                    ))}

                </div>

                <button className="slider-btn right" onClick={scrollRight}>
                    <FaChevronRight />
                </button>

            </div>

        </section>

    );

}

export default TopSaversSlider;
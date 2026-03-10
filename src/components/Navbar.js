import "../css/Navbar.css";
<<<<<<< HEAD
import logo from "../assets/Logo.png";
import { useState } from "react";
import { FaHome, FaShoppingBag, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
=======
import logo from "../assets/logo/manemadelogo.jpeg";
>>>>>>> 34a5dc8842699249090ef862fdfcd7fb5378bd6e

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = 3;

  return (
    <div className="navbar">
<<<<<<< HEAD

      {/* Logo */}
      <img src={logo} alt="logo" className="logo-img" />

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <a href="/">
            <FaHome /> Home
          </a>
        </li>

        <li>
          <a href="/shop">
            <FaShoppingBag /> Shop
          </a>
        </li>

        <li className="cart-link">
          <a href="/cart">
            <FaShoppingCart /> Cart
            <span className="cart-badge">{cartCount}</span>
          </a>
        </li>

        <li>
          <a href="/account">
            <FaUser /> MyAccount
          </a>
        </li>

      </ul>

      {/* Right Side Buttons */}
      <div className="navbar-2">

        <button className="theme-btn"></button>

=======
      <img src={logo} alt="logo" className="logo-img" />
      <h2 className="logo">Mane Made</h2>
      <div className="navbar-2">
>>>>>>> 34a5dc8842699249090ef862fdfcd7fb5378bd6e
        <div className="btns">
          <button className="btn">Sign In</button>
          <button className="btn">Sign Up</button>
        </div>
<<<<<<< HEAD

=======
>>>>>>> 34a5dc8842699249090ef862fdfcd7fb5378bd6e
      </div>

    </div>
  );
}

export default Navbar;

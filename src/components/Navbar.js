import "../css/Navbar.css";
import logo from "../assets/logo/manemadelogo.jpeg";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo-img" />
      <h2 className="logo">Mane Made</h2>
      <div className="navbar-2">
        <div className="btns">
          <button className="btn">Sign In</button>
          <button className="btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

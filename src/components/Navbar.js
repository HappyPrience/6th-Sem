import "../css/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">Mane Made</h2>

      <input
        type="text"
        placeholder="Enter your location"
        className="input"
      />

      <input
        type="text"
        placeholder="Search for items"
        className="input"
      />
      
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
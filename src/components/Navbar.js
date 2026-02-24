import "./Navbar.css";

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

      <button className="btn">Sign In</button>
    </div>
  );
}

export default Navbar;
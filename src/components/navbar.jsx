import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar" aria-label="Main navigation">
    <NavLink className="navbar-brand" to="/home">RWACT</NavLink>
    <div className="navbar-links">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </div>
  </nav>
);

export default Navbar;

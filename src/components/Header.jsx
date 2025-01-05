import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../context/CartContext";
// import "./Header.css"; // Optional: Add styles here

const Header = ({ onSearch }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <header className="header">
      <h1 className="logo">E-Commerce</h1>
      <input
        type="text"
        placeholder="Search products..."
        className="search-bar"
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className="cart-icon">
        <span role="img" aria-label="cart">
          🛒
        </span>
        <span className="cart-count">{cartItems.length}</span>
      </div>
    </header>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;

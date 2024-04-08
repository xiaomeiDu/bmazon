import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { SearchContext } from '../contexts/SearchContext';
import { Link } from "react-router-dom";
import "../Project.css";
import logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Header() {
  const { cart } = useContext(CartContext);
  const { setSearchQuery } = useContext(SearchContext);

  const handleSearch = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      setSearchQuery(event.target.value);
    }
  };


  return (
    <header className="header">
      {" "}
      {/* Use semantic HTML where appropriate */}
      <img className="header__logo" src={logo} alt="Bmazon" />
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search for anything"
          onKeyDown={handleSearch}
        />
        <SearchIcon className="header__searchIcon" onClick={handleSearch} />
      </div>
      <nav className="header__nav">
        {" "}
        {/* Semantic HTML for navigation */}
        <div className="header__option">
          <span>Sign in</span>
        </div>
        <div className="header__optionCart">
          <Link to="/cart">
            <ShoppingCartIcon />
          </Link>
          <span className="header__cartCount">{cart.length}</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;

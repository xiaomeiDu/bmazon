import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { SearchContext } from "../contexts/SearchContext";
import { Link } from "react-router-dom";
import "../Project.css";
import logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Header() {
  const { cart } = useContext(CartContext);
  const { setSearchQuery } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      setSearchQuery(inputValue);
    }
  };

  const handleIconClick = () => {
    setSearchQuery(inputValue);
  };

  const handleLogoClick = () => {
    setSearchQuery("");
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      {" "}
      <Link to="/" onClick={handleLogoClick}>
        <img className="header__logo" src={logo} alt="Bmazon" />
      </Link>
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search for anything"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleSearch}
        />
        <SearchIcon className="header__searchIcon" onClick={handleIconClick} />
      </div>
      <nav className="header__nav">
        {" "}
        <div className="header__option">
          <span>Sign In</span>
        </div>
        <div className="header__optionCart">
          <Link to="/cart">
            <ShoppingCartIcon style={{ color: "#5e5e5e" }} />
          </Link>
          <span className="header__cartCount">{cartItemCount}</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;

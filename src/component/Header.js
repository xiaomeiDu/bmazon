import React from "react";
import "../Project.css";
import logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Header() {
  return (
    <header className="header"> {/* Use semantic HTML where appropriate */}
      <img className="header__logo" src={logo} alt="Bmazon" />

      <div className="header__search">
        <input className="header__searchInput" type="text" placeholder="Search for anything" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <nav className="header__nav"> {/* Semantic HTML for navigation */}
        <div className="header__option">
          <span>Sign in</span>
        </div>
        <div className="header__optionCart">
          <ShoppingCartIcon />
          <span className="header__cartCount">0</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;

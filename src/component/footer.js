import React from "react";
import "../Project.css";

const Footer = () => {
  return (
    <footer className="home__footer">
      <div className="footer__content">
        <p>&copy; {new Date().getFullYear()} Bmazon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

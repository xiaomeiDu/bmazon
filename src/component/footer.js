import React from 'react';  
import '../footer.css';
  
const Footer = () => {  
  return (  
    <footer className="footer">  
      <div className="footer-container">  
        <div className="footer-links">  
          <h3>About Us</h3>  
          <ul>  
            <li>Company Introduction</li>  
            <li>Development Journey</li>  
            <li>Partners</li>  
          </ul>  
        </div>
        <div className="footer-links">  
          <h3>Customer Service</h3>  
          <ul>  
            <li>Contact Us</li>  
            <li>Online Support</li>  
            <li>After-Sales Service</li>  
          </ul>  
        </div>  
        <div className="footer-links">  
          <h3>Follow Us</h3>  
          <ul>  
            <li>Weibo</li>  
            <li>WeChat</li>  
            <li>TikTok</li>  
          </ul>  
        </div>  
      </div>  
      <div className="footer-bottom">  
        <p>Copyright © 2023 Shop Name</p>  
      </div>  
    </footer>  
  );  
};  
  
export default Footer;

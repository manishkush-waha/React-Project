import React from "react";
import images from "../../assets/social";
import icon from "../../assets/icon";
import search from "../../assets/search-icon.png"
import logo from "../../assets/web-logo.png"
import "./Header.css";

const header = () => {
  let many = 4;
  return (
    <header>
      <div className="info-bar">
        <div className="first-coloum">
          <h4>Email: demoemail@gmail.com</h4>
          <h4>Your No: +91 32094-02338</h4>
        </div>
        <ul className="second-coloum">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
        </ul>
      </div>
      <nav>
        <div className="header-container">
          <img src={logo} className="first-section" />
          <ul className="second-section">
            <li>Home</li>
            <li>My Profile</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
          <div className="third-area">
            <img src={search} alt="search icon" className="third-section search-section"/>
            {icon.map((icon, index) => (
          <img key={index} src={icon} alt={`Image ${index + 1}`} className="third-section"/>
        ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default header;

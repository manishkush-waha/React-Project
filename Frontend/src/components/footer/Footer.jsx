import React from 'react'
import './Footer.css'
import logo from "../../assets/web-logo.png"

const footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="first-footer-container">
          <img src={logo} alt="logo" />
          <h2>DuniyaKeLaddoo</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nesciunt quod commodi fugiat officia eius quasi dolor amet ratione repudiandae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur laboriosam delectus quibusdam sequi placeat harum enim a dignissimos, accusantium saepe!</p>
        </div>
        <div className="second-footer-container">
          <h2>About My Website</h2>
          <ul>
            <li>first line</li>
            <li>second line</li>
            <li>third line</li>
            <li>fourth line</li>
            <li>fifth line</li>
          </ul>
        </div>
        <div className="third-footer-container">
        <h2>For Contact</h2>
          <ul>
            <li>Desclaimer</li>
            <li>About Us</li>
            <li>Term and Condition</li>
          </ul>
        </div>
      </div>
      <p>Copy &copy; {new Date().getFullYear()} Right Content. All Rights Reserved</p>
    </footer>
  )
}

export default footer
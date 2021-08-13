import React from "react";
import { Link } from "react-router-dom";
import "./homepage.styles.css";

const HomePage = () => (
  <div className="homepage">
    <h1>Exercise Tracker</h1>
    <ul>
        <li>
            <Link to="/shopping-list-page">Shop Online</Link>
        </li>
        <li>
            <Link to="/store-list-page">Other Beaver Mart Locations</Link>
        </li>
    </ul>
    
    

  </div>
);

export default HomePage;
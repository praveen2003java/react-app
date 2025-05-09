import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/dhosahome.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> PRAVEEN DHOSA </h1>
        <p> DHOSA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

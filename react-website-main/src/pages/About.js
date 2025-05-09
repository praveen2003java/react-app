import React from "react";
import MultiplePizzas from "../assets/ABOUT.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to Praveen Dhosa, where every slice is a work of art. Founded with a passion for crafting the perfect Dhosa, we combine the finest ingredients, traditional recipes, and a love for great food to bring you an unforgettable dining experience.

At Praveen Dhosa, we take pride in using only the freshest, locally sourced ingredients to ensure that each Dhosa is made with the utmost care and attention to detail. Whether you're craving a classic Margherita, one of our specialty pies, or prefer to create your own, we have something to satisfy every taste and occasion.

Our team of Dhosa enthusiasts is dedicated to providing not just great Dhosa but a memorable experience. From our cozy ambiance to our friendly service, we aim to make every visit feel like a celebration of food, flavor, and community.

Come visit Praveen Dhosa today and discover why we're the go-to Dhosa destination for Dhosa lovers. We’re not just serving Dhosa – we’re creating memories, one slice at a time.


        </p>
      </div>
    </div>
  );
}

export default About;

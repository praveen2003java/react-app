import React, { useState } from "react";
import PizzaLeft from "../assets/DHOSALEFT.jpg";
import "../styles/Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Optional: Reset form
    e.target.reset();

    // Optional: Hide the message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>

        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" required />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" required />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        {submitted && <p className="success-message">Message sent successfully!</p>}
      </div>
    </div>
  );
}

export default Contact;

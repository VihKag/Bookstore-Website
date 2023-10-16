import React from "react";
import "./contactus.css";

const ContactUs = () => {
  return (
    <div className="container-contact container">
        <div className="blur-background"></div>

      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <h2>Contact Us</h2>
          <input type="text" className="field" placeholder="Your Name" />
          <input type="text" className="field" placeholder="Your Email" />
          <input type="text" className="field" placeholder="Phone" />
          <textarea placeholder="Message" className="field"></textarea>
          <button className="btn">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

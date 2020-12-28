import React, { useState } from "react";
import "./Contact.scss";
import exit from "../../assets/svgs/exit-icon.svg";

function Contact() {
  const [isContactOpen, setIsContactOpen] = useState("false");
  const [top, setTop] = useState("5000px");

  const onContactClick = () => {
    if (isContactOpen) {
      setTop("5000px");
    } else {
      setTop("calc(50% - 300px)");
    }

    setIsContactOpen(!isContactOpen);
  };

  return (
    <div className="Contact" style={{ top: `${top}` }}>
      <img src={exit} alt="exit icon" onClick={onContactClick} />
      <h1>Contact Me</h1>
      <form>
        <div className="form-field">
          <label for="name">Full Name</label>
          <input type="text" name="name" />
        </div>
        <div className="form-field">
          <label for="subject">Subject</label>
          <input type="text" name="subject" />
        </div>
        <div className="form-field">
          <label for="email">Your Email</label>
          <input type="email" name="email" />
        </div>

        <div className="form-field">
          <label for="message">Message</label>
          <textarea name="message" rows="12" />
        </div>

        <button type="submit" className="submit-button">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;

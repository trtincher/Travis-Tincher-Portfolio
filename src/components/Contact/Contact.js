import React, { useState, useEffect } from "react";
import "./Contact.scss";
import exit from "../../assets/svgs/exit-icon.svg";
import emailjs from "emailjs-com";
import Confirmation from "./Confirmation";

function Contact({ top, onContactClick }) {
  const [emailConfirmation, setEmailConfirmation] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setEmailConfirmation(false);
    setEmailError(false);
  }, [top]);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5qhb5bm",
        "template_g3rbt0j",
        e.target,
        "user_1tTUVlfVHJ0QgAOqETSmf"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailConfirmation(true);
        },
        (error) => {
          console.log(error.text);
          setEmailError(true);
        }
      );
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div className="Contact" style={{ top: `${top}` }}>
      {emailConfirmation ? <Confirmation /> : null}

      <img src={exit} alt="exit icon" onClick={onContactClick} />
      <h1>Contact Me</h1>
      <form onSubmit={sendEmail}>
        <div className="form-field">
          <label for="name">Full Name</label>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label for="subject">Subject</label>
          <input
            type="text"
            name="subject"
            value={formValues.subject}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label for="email">Your Email</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label for="message">Message</label>
          <textarea
            name="message"
            rows="12"
            value={formValues.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-button">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;

import React from "react";
import "./Confirmation.scss";
import send from "../../assets/svgs/send.svg";

function Confirmation() {
  return (
    <div className="Confirmation">
      <article>
        <h1>Your Email has been Sent!</h1>
        <p>
          Thank you for your interest. I will respond to your email within 2
          business days.
        </p>
      </article>
      <img src={send} alt="send icon background" className="send-icon" />
    </div>
  );
}

export default Confirmation;

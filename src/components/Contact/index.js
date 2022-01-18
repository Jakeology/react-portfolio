import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "userEmail") {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        if (e.target.name === "fullName") {
          setErrorMessage("Please enter your full name");
        }
        if (e.target.name === "userMessage") {
          setErrorMessage("You can't send an empty message");
        }
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  const contactTitle = "contact me";

  return (
    <section>
      <div className="primary-section-title">
        <h2>{contactTitle}</h2>
        <span>{contactTitle}</span>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <form autoComplete="none" id="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="fullName">Full Name*</label>
              <input type="text" defaultValue={name} onBlur={handleChange} autoComplete="none" name="fullName" />
            </div>
            <div className="form-field">
              <label htmlFor="userEmail">Email*</label>
              <input type="email" defaultValue={email} onBlur={handleChange} autoComplete="none" name="userEmail" />
            </div>
            <div className="form-field">
              <label htmlFor="userMessage">Message*</label>
              <textarea autoComplete="none" defaultValue={message} onBlur={handleChange} rows="5" name="userMessage" />
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button className="btn mt-30" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="col-lg-4">
          <div className="contact-info">
            <i className="fa-solid fa-phone"></i>
            <h3>555-123-4567</h3>
          </div>
          <div className="contact-info">
            <i className="fa-solid fa-envelope"></i>
            <h4>xxjakexx14@gmail.com</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

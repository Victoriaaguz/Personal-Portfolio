import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactMe() {

     
    
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_359hp4g", "template_gh48mnu", form.current, {
        publicKey: "GEAzMZchG6szcMq0M",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Email sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Email not sent!");
        }
      );
     
  };
  return (
    <section id="Contact" className="contact--section">
      <div className="sub--title">
        <p className="sub--title">Get in Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg"> Lets connect!</p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact--form--container" netlify>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="user_name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="user_email"
              id="email"
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            name="message"
            id="message"
            rows="8"
            placeholder="Type Your Message ..."
            required
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" aria-required/>
          <span className="text-sm" >I accept not to send spam emails</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">
            Submit
          </button>

        </div>
      </form>
      <ToastContainer/>
    </section>
  );
}

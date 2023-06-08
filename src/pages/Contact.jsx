import { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v54qs6d",
        "template_yz6nywl",
        form.current,
        "2tQrjgfdb3G6W8uBL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact_page">
      <div className="contact_card">
        <div className="contact_title">
          <h2>Contact me</h2>
          <p>If you want to contact me, you can send me an email.</p>
        </div>
        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="center">
              <label>Name</label>
            </div>
            <div className="center">
              <input type="text" name="name" className="input" />
            </div>
            <div className="center">
              <label>Email</label>
            </div>
            <div className="center">
              <input type="email" name="email" className="input" />
            </div>
            <div className="center">
              <label>Message</label>
            </div>
            <div className="center">
              <textarea name="message" className="textarea" />
            </div>
            <div className="center">
              <input type="submit" value="SEND" className="send_button" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

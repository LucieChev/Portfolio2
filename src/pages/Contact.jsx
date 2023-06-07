import React from "react";
import "./Contact.css";
import { TiTick } from "react-icons/ti";

export default function Contact() {
  return (
    <div className="contact_page">
      <div className="title">
        <h3>Contact me</h3>
        <div className="mail">
          <TiTick />
          to mail : lchevanche@hotmail.fr
        </div>
        <div className="phone">
          <TiTick />
          to phone : 0611418118
        </div>
        <div className="in_progress">(Section in progress)</div>
      </div>
    </div>
  );
}

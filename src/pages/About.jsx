import React from "react";
import { TiTick } from "react-icons/ti";
import "./About.css";
import profil from "../assets/Lucie.png";

export default function About() {
  return (
    <div className="about_page">
      <div className="about_title">
        <h2>About me</h2>
      </div>
      <div className="about_description">
        <p>
          I'm in the process of retraining, I worked for more than 10 years in
          the paramedical field, and I decided to retrain to learn code and
          become a web developer because I am passionate about new technologies.
          <p>I'm currently training at Wild Code School.</p>
        </p>
      </div>
      <section className="about">
        <div className="skills">
          <h3>Skills:</h3>
          <p>
            <TiTick />
            Good communication
          </p>
          <p>
            <TiTick />
            Good ability to work in a team
          </p>
          <p>
            <TiTick />
            Organization
          </p>
          <p>
            <TiTick />
            Patience
          </p>
          <p>
            <TiTick />
            Desire to learn
          </p>
        </div>
        <div className="technos">
          <h3>Technos:</h3>
          <p>
            <TiTick />
            Javascript, HTML, CSS
          </p>
          <p>
            <TiTick />
            React
          </p>
          <p>
            <TiTick />
            MySQL
          </p>
          <p>
            <TiTick />
            Express
          </p>
          <p>
            <TiTick />
            Node
          </p>
          <p>
            <TiTick />
            Git/GitHub
          </p>
        </div>
        <div className="profil_pictures">
          <img src={profil} alt="profilPicture" className="profil_picture" />
        </div>
      </section>
    </div>
  );
}

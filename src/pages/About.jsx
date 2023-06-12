import { TiTick } from "react-icons/ti";
import { FaCss3Alt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { SiMysql, SiExpress, SiNodedotjs, SiJavascript } from "react-icons/si";
import "./About.css";
import profil from "../assets/Lucie.png";

export default function About() {
  return (
    <div className="about_page">
      <div className="about_card">
        <div className="about_title">
          <h2>About me</h2>
          <p>
            I am in the process of retraining, I worked for more than 10 years
            in the paramedical field, and I decided to retrain to learn code and
            become a web developer because I am passionate about new
            technologies.
            <p>I am currently training at Wild Code School.</p>
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
              Javascript, HTML, CSS &nbsp;
              <SiJavascript />
              <FaHtml5 />
              <FaCss3Alt />
            </p>
            <p>
              <TiTick />
              React &nbsp;
              <FaReact />
            </p>
            <p>
              <TiTick />
              MySQL &nbsp;
              <SiMysql />
            </p>
            <p>
              <TiTick />
              Express &nbsp;
              <SiExpress />
            </p>
            <p>
              <TiTick />
              Node &nbsp;
              <SiNodedotjs />
            </p>
            <p>
              <TiTick />
              Git/GitHub &nbsp;
              <FaGithub />
            </p>
          </div>
          <div className="profil_pictures">
            <img src={profil} alt="profilPicture" className="profil_picture" />
          </div>
        </section>
      </div>
    </div>
  );
}

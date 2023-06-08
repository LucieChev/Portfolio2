import "./Home.css";
import dev from "../assets/dev.jpg";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div
      className="home_page"
      style={{
        backgroundImage: `url(${dev})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
    >
      <div className="home_title">
        <h1>Hi, I am Lucie,</h1>
      </div>
      <div className="sub_title">
        <h2>Web developer</h2>
      </div>
      <div className="sub_title">
        <h3>Front-End / JS / REACT </h3>
        <h3>Full-Stack</h3>
      </div>
      <div>
        <button type="button" className="button_home_page">
          <NavLink to="/contact" className="contact_button_home_page">
            CONTACT ME
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default Home;

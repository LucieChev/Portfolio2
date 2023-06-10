import PropTypes from "prop-types";
import { Button, Link } from "@mui/material";
import "./Modal.css";
import wildquiz from "../assets/WildQuiz.png";
import wildquiz2 from "../assets/WildQuiz2.png";
import wildquiz3 from "../assets/WildQuiz3.png";
import wildquiz4 from "../assets/WildQuiz4.png";

export default function WildQuiz({ setShowModal }) {
  return (
    <div className="modal_page">
      <div className="modal_card">
        <div className="project_card">
          <img src={wildquiz} alt="WildQuiz" className="project_image" />
          <img src={wildquiz2} alt="WildQuiz" className="project_image" />
          <img src={wildquiz3} alt="WildQuiz" className="project_image" />
          <img src={wildquiz4} alt="WildQuiz" className="project_image" />
        </div>
        <div className="explain_project">
          <p>
            This is our #1 project, done as part of our Wild Code School
            training. This is a quiz that allows you to discover the city of
            Lyon. This project was carried out in collaboration with 2 comrades
            for a period of 2 weeks, during our 1st month of training.
            Constraints imposed: HTML, CSS and JAVASCRIPT Vanilla and Git/GitHub
            for versioning. We also used LEAFLET.
          </p>
        </div>

        <Link
          href="https://wildcodeschool.github.io/2023-02-JS-FT-Lyon-P1-WildQuiz/index.html"
          underline="hover"
          color="var(--yellow)"
        >
          Link to site
        </Link>

        <Button
          size="small"
          variant="contained"
          cursor="pointer"
          sx={{
            color: "black",
            bgcolor: "var(--yellow)",
            fontFamily: "bold",
            marginTop: "20px",
          }}
          onClick={() => setShowModal(false)}
        >
          Close
        </Button>
      </div>
    </div>
  );
}
WildQuiz.propTypes = {
  setShowModal: PropTypes.string.isRequired,
};

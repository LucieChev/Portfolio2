import PropTypes from "prop-types";
import { Button, Link } from "@mui/material";
import "./Modal.css";
import keskonregarde from "../assets/Keskonregarde.png";
import keskonregarde2 from "../assets/Keskonregarde2.png";
import keskonregarde3 from "../assets/Keskonregarde3.png";
import keskonregarde4 from "../assets/Keskonregarde4.png";

export default function Keskonregarde({ setShowModal }) {
  return (
    <div className="modal_page">
      <div className="modal_card">
        <div className="project_card">
          <img
            src={keskonregarde}
            alt="Keskonregarde"
            className="project_image"
          />
          <img
            src={keskonregarde2}
            alt="Keskonregarde"
            className="project_image"
          />
          <img
            src={keskonregarde3}
            alt="Keskonregarde"
            className="project_image"
          />
          <img
            src={keskonregarde4}
            alt="Keskonregarde"
            className="project_image"
          />
        </div>
        <div className="explain_project">
          <p>
            This is our project n°2, carried out as part of our training at the
            Wild Code School. This is a site allowing you to search for a movie
            according to your desires and thanks to the TMDB API whose data we
            have used. This project was carried out in collaboration with 2
            comrades for a period of 1 month, during our 3rd month of training.
            Imposed constraints: use of a public rest API, React, SCRUM method,
            ESLINT and Git/GitHub for versioning.
          </p>
        </div>
        <Link
          href="https://keskonregarde.netlify.app"
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

Keskonregarde.propTypes = {
  setShowModal: PropTypes.string.isRequired,
};

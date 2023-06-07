import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import "./Modal.css";
import animalz from "../assets/Animalz.png";
import animalz2 from "../assets/Animalz2.png";
import animalz3 from "../assets/Animalz3.png";
import animalz4 from "../assets/Animalz4.png";

export default function Animalz({ setShowModal }) {
  return (
    <div className="modal_page">
      <div className="explain_project">
        <p>
          This is our #1 hackathon, done as part of our Wild Code School
          training. This is a site that allows you to connect single travelers,
          who would like to share a trip with someone who shares the same
          desires. This project was carried out in collaboration with 3 comrades
          for a period of 24 hours, during our 3rd month of training.
          Constraints imposed: the theme: holidays, maximum duration: 24h. We
          used: React, 2 APIs, a Database, LEAFLET.{" "}
        </p>
      </div>
      <div className="project_card">
        <img src={animalz} alt="Animalz2" className="project_image" />
        <img src={animalz2} alt="Animalz2" className="project_image" />
        <img src={animalz3} alt="Animalz3" className="project_image" />
        <img src={animalz4} alt="Animalz4" className="project_image" />
      </div>
      <Button
        size="small"
        variant="contained"
        cursor="pointer"
        sx={{ color: "black", bgcolor: "var(--yellow)", fontFamily: "bold" }}
        onClick={() => setShowModal(false)}
      >
        Close
      </Button>
    </div>
  );
}

Animalz.propTypes = {
  setShowModal: PropTypes.string.isRequired,
};

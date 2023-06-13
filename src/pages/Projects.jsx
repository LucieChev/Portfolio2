import { useState } from "react";
import "./Projects.css";
import Carousel from "react-multi-carousel";
import { Button } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import wildquiz from "../assets/WildQuiz.png";
import keskonregarde from "../assets/Keskonregarde.png";
import animalz from "../assets/Animalz.png";
import Wildquiz from "../components/Wildquiz";
import Keskonregarde from "../components/Keskonregarde";
import Animalz from "../components/Animalz";

export default function Projects() {
  const [showModalWildquiz, setShowModalWildquiz] = useState(false);
  const onClickHandleWildquiz = () => {
    setShowModalWildquiz(true);
  };
  const [showModalKeskonregarde, setShowModalKeskonregarde] = useState(false);
  const onClickHandleKeskonregarde = () => {
    setShowModalKeskonregarde(true);
  };
  const [showModalAnimalz, setShowModalAnimalz] = useState(false);
  const onClickHandleAnimalz = () => {
    setShowModalAnimalz(true);
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 1024, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="projects_page">
      <div className="projects_title">
        <h2>My projects</h2>
      </div>
      <div className="projects_description">
        <p>
          You can find a selection of my projects, carried out as part of my
          training.
        </p>
      </div>

      <Carousel
        responsive={responsive}
        draggable={false}
        autoPlaySpeed={100}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        showDots
        arrows
        swipeable
      >
        <div className="projects_all">
          <h2>Project 1</h2>
          <h3>WildQuiz</h3>
          <img src={wildquiz} alt="WildQuiz" className="projects_card" />
          <Button
            size="small"
            variant="contained"
            cursor="pointer"
            sx={{
              color: "black",
              bgcolor: "var(--yellow)",
              fontFamily: "Quicksand",
            }}
            onClick={onClickHandleWildquiz}
          >
            View more
          </Button>
          {showModalWildquiz ? (
            <Wildquiz setShowModal={setShowModalWildquiz} />
          ) : null}
        </div>

        <div className="projects_all">
          <h2>Project 2</h2>
          <h3>Keskonregarde?</h3>

          <img
            src={keskonregarde}
            alt="Keskonregarde"
            className="projects_card"
          />
          <Button
            size="small"
            variant="contained"
            cursor="pointer"
            sx={{
              color: "black",
              bgcolor: "var(--yellow)",
              fontFamily: "Quicksand",
            }}
            onClick={onClickHandleKeskonregarde}
          >
            View more
          </Button>
          {showModalKeskonregarde ? (
            <Keskonregarde setShowModal={setShowModalKeskonregarde} />
          ) : null}
        </div>
        <div className="projects_all">
          <h2>Hackathon 1</h2>
          <h3>Animalz</h3>

          <img src={animalz} alt="Animalz" className="projects_card" />
          <Button
            size="small"
            variant="contained"
            cursor="pointer"
            sx={{
              color: "black",
              bgcolor: "var(--yellow)",
              fontFamily: "Quicksand",
            }}
            onClick={onClickHandleAnimalz}
          >
            View more
          </Button>
          {showModalAnimalz ? (
            <Animalz setShowModal={setShowModalAnimalz} />
          ) : null}
        </div>
      </Carousel>
    </div>
  );
}

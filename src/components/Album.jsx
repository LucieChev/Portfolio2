import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import wildquiz from "../assets/WildQuiz.png";
import keskonregarde from "../assets/Keskonregarde.png";
import animalz from "../assets/Animalz.png";
import WildQuiz from "./Wildquiz";
import Keskonregarde from "./Keskonregarde";
import Animalz from "./Animalz";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [showModalWildquiz, setShowModalWildquiz] = React.useState(false);
  const onClickHandleWildquiz = () => {
    setShowModalWildquiz(true);
  };
  const [showModalKeskonregarde, setShowModalKeskonregarde] =
    React.useState(false);
  const onClickHandleKeskonregarde = () => {
    setShowModalKeskonregarde(true);
  };
  const [showModalAnimalz, setShowModalAnimalz] = React.useState(false);
  const onClickHandleAnimalz = () => {
    setShowModalAnimalz(true);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "rgb(22, 22, 22)",
            pt: 8,
            pb: 6,
          }}
        >
          <Container>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="gold"
              gutterBottom
            >
              My projects
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="var(--yellow)"
              paragraph
            >
              You can find a selection of my projects, carried out as part of my
              training{" "}
            </Typography>
          </Container>
        </Box>
        <Container
          sx={{
            py: 2,
            bgcolor: "rgb(22, 22, 22)",
          }}
        >
          {/* End hero unit */}
          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            autoPlaySpeed={100}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div>
              <Card
                sx={{
                  height: "80vh",
                  marginLeft: "15rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "rbg(22,22,22)",
                  color: "rbg(22,22,22)",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{ height: "450px", width: "250px" }}
                  image={wildquiz}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography gutterBottom variant="h5" component="h2">
                    Project 1
                  </Typography>
                  <Typography>
                    This is our #1 project, done as part of our Wild Code School
                    training...
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    cursor="pointer"
                    sx={{ color: "black", bgcolor: "gold", fontFamily: "bold" }}
                    onClick={onClickHandleWildquiz}
                  >
                    View more
                  </Button>
                  {showModalWildquiz ? (
                    <WildQuiz setShowModal={setShowModalWildquiz} />
                  ) : null}
                </CardActions>
              </Card>
            </div>
            <div>
              <Card
                sx={{
                  height: "80vh",
                  marginLeft: "15rem",

                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    height: "450px",
                    width: "250px",
                  }}
                  image={keskonregarde}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography gutterBottom variant="h5" component="h2">
                    Project 2
                  </Typography>
                  <Typography>
                    This is our project n°2, carried out as part of our training
                    at the Wild Code School...
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    cursor="pointer"
                    sx={{ color: "black", bgcolor: "gold", fontFamily: "bold" }}
                    onClick={onClickHandleKeskonregarde}
                  >
                    View more
                  </Button>
                  {showModalKeskonregarde ? (
                    <Keskonregarde setShowModal={setShowModalKeskonregarde} />
                  ) : null}
                </CardActions>
              </Card>
            </div>
            <div>
              <Card
                sx={{
                  height: "80vh",
                  marginLeft: "15rem",

                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{ height: "450px", width: "250px" }}
                  image={animalz}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography gutterBottom variant="h5" component="h2">
                    Hackathon 1
                  </Typography>
                  <Typography>
                    This is our #1 hackathon, done as part of our Wild Code
                    School training...
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    cursor="pointer"
                    sx={{ color: "black", bgcolor: "gold", fontFamily: "bold" }}
                    onClick={onClickHandleAnimalz}
                  >
                    View more
                  </Button>
                  {showModalAnimalz ? (
                    <Animalz setShowModal={setShowModalAnimalz} />
                  ) : null}
                </CardActions>
              </Card>
            </div>
          </Carousel>
        </Container>
      </main>
    </ThemeProvider>
  );
}

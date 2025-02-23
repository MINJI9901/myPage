import { useContext } from "react";

// MUI COMPONENTS
import { Box, Link, Typography, useTheme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareUpwork,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import theme from "../../theme/theme";
import { RefContext } from "../context/RefContext";

// library.add(faSquareUpwork);

export default function Home() {
  const mainPhrase = "Hi! This is KIM MINJI";
  const { palette } = useTheme(theme);
  const { Home } = useContext(RefContext);

  return (
    <Box
      id="Home"
      ref={Home}
      height={"17%"}
      textAlign={"left"}
      my={"7rem"}
      position={"relative"}
      zIndex={1}
      className="section"
    >
      <Typography variant="h1" fontSize={"3rem"} color={palette.primary.dark}>
        {mainPhrase.split("").map((letter, index) => (
          <span
            key={index}
            style={{
              opacity: 0,
              //   animationName: "displayText",
              //   animationDuration: "0.75s",
              animation: "displayText forwards",
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {letter}
          </span>
        ))}
      </Typography>
      <Typography
        variant="h2"
        fontSize={"2.5rem"}
        fontWeight={700}
        color={palette.primary.dark}
      >
        Front-end Developer
      </Typography>
      <Typography fontSize={"1.5rem"} my={"1rem"}>
        Feel free to explore my projects and about me!
      </Typography>
      <Box sx={{ fontSize: "2rem", height: "100%" }}>
        <a
          href="https://github.com/MINJI9901"
          target="_blank"
          style={{ margin: "0 0.5rem" }}
        >
          <FontAwesomeIcon icon={faGithub} color="black" size="lg" />
        </a>
        <a
          href="https://www.linkedin.com/in/minji-kim-02bb20333/"
          target="_blank"
          style={{ margin: "0 0.5rem" }}
        >
          <FontAwesomeIcon icon={faLinkedin} color="black" size="lg" />
        </a>
        <a
          href="https://www.upwork.com/"
          target="_blank"
          style={{ margin: "0 0.5rem" }}
        >
          <FontAwesomeIcon icon={faSquareUpwork} color="black" size="lg" />
        </a>
      </Box>
    </Box>
  );
}

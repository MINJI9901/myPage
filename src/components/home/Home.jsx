import { useContext, useEffect } from "react";

// MUI COMPONENTS
import { Box, Button, Link, Typography, useTheme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareUpwork,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

// THEME AND CONTEXTS
import theme from "../../theme/theme";
import { RefContext } from "../../context/RefContext";
import { LanguageContext } from "../../context/LanguageContext";

// library.add(faSquareUpwork);
const lanOptions = ["en", "kr"];

export default function Home() {
  const mainPhrases = {
    en: "Hi! This is KIM MINJI",
    kr: "안녕하세요 김민지입니다!",
  };
  const extraPhrases = {
    en: "Feel free to explore my projects and about me!",
    kr: "저를 표현하는 공간입니다. 항상 꿈을 꾸는 개발자입니다.",
  };
  const { palette } = useTheme(theme);
  const { Home } = useContext(RefContext);
  const { language, setLanguage } = useContext(LanguageContext);

  useEffect(() => {}, [language]);

  const handleLanguage = (lan) => {
    localStorage.setItem("language", lan);
    setLanguage(lan);
  };

  return (
    <>
      <Box
        position={"absolute"}
        top={"5%"}
        right={"8%"}
        color={palette.primary.dark}
        bgcolor={"rgb(255,255,255,0.3)"}
        borderRadius={"1rem"}
        py={"5px"}
        // fontWeight={700}
      >
        {lanOptions.map((lan, index) => (
          <Button
            key={lan}
            sx={{
              display: "inline-block",
              color: palette.primary.dark,
              py: 0,
              borderRight: index === 0 ? "1px solid" : "",
              borderRadius: 0,
              borderRightColor: palette.primary.dark,
              fontWeight: lan === language ? 700 : 400,
            }}
            onClick={() => handleLanguage(lan)}
          >
            {lan}
          </Button>
          // {index === 0 ? "|" : ""}
        ))}
      </Box>
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
          {mainPhrases[language].split("").map((letter, index) => (
            <span
              key={`${language}-${index}`}
              style={{
                opacity: 0,
                animation: "displayText forwards",
                animationDelay: `${index * 0.1}s`,
                fontFamily:
                  language === "kr"
                    ? "'Jua', '42dot Sans', sans-serif"
                    : "'42dot Sans', sans-serif",
              }}
            >
              {letter}
            </span>
          ))}
        </Typography>
        <Typography
          variant="h2"
          fontSize={"2rem"}
          fontWeight={700}
          color={palette.primary.dark}
        >
          Front-end Developer
        </Typography>
        <Typography
          fontSize={"1.5rem"}
          my={"1rem"}
          fontFamily={"'Jua', '42dot Sans', sans-serif"}
        >
          {extraPhrases[language]}
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
            href="https://www.upwork.com/freelancers/~01656403c85083e26d"
            target="_blank"
            style={{ margin: "0 0.5rem" }}
          >
            <FontAwesomeIcon icon={faSquareUpwork} color="black" size="lg" />
          </a>
        </Box>
      </Box>
    </>
  );
}

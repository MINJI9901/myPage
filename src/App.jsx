import { useState, useRef, useEffect, useContext, useMemo } from "react";
import "./App.css";
import { Box, Grid2 } from "@mui/material";

// THEME PROVIDER
import ThemeProvider from "./theme/ThemeProvider";

// CONTEXT
import { RefContext } from "./context/RefContext";

// MY COMPONENTS
import NavBar from "./components/generic/NavBar";
import InfoBar from "./components/generic/InfoBar";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
  const [currentSection, setCurrentSection] = useState("");

  const handleScroll = () => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      const top = section.offsetTop - 300;
      const height = section.clientHeight;
      if (window.scrollY > top && window.scrollY < top + height) {
        setCurrentSection(section);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);

  return (
    <>
      <ThemeProvider>
        <RefContext.Provider
          value={{
            Home: useRef(null),
            Projects: useRef(null),
            About: useRef(null),
            Contact: useRef(null),
          }}
        >
          <NavBar />
          <Grid2 container mx={"2rem"}>
            <Grid2 size={10}>
              <video
                autoPlay
                loop
                muted
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 0,
                  opacity: 0.7,
                }}
              >
                <source src="/colorPaint.mp4" type="video/mp4" />
              </video>
              <Home />
              <Projects />
              <About />
              <Contact />
            </Grid2>
            <Grid2 size={2}>
              <InfoBar current={currentSection} />
            </Grid2>
          </Grid2>
        </RefContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;

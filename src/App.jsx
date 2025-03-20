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

// // TOAST
// import { ToastContainer } from "react-toastify";

function App() {
  const [currentSection, setCurrentSection] = useState("");

  const handleScroll = () => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      const top = section.offsetTop - 300;
      const height = section.clientHeight;
      // console.log("top: ", top, "height: ", height);
      // console.log("scroll Y: ", window.scrollY);
      if (
        top !== -300 &&
        window.scrollY > top &&
        window.scrollY < top + height
      ) {
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
        <NavBar />
        <RefContext.Provider
          value={{
            Home: useRef(null),
            Projects: useRef(null),
            About: useRef(null),
            Contact: useRef(null),
          }}
        >
          <Grid2 container mx={"2rem 0"}>
            <Grid2 size={{ xs: 12, md: 10 }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "100%",
                  height: "100vh",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 0,
                  opacity: 0.7,
                }}
              >
                <source src="/colorPaint.mp4" type="video/mp4" />
                <source src="/colorPaint.webm" type="video/webm" />
              </video>
              <Home />
              <Projects />
              <About />
              <Contact />
            </Grid2>
            <Grid2 size={2} display={{ xs: "none", md: "block" }}>
              <InfoBar current={currentSection} />
            </Grid2>
          </Grid2>
        </RefContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;

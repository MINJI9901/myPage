import { useContext, useEffect, useRef } from "react";

import {
  Box,
  Container,
  Grid2,
  Typography,
  Link,
  useTheme,
} from "@mui/material";

import theme from "../../theme/theme";
import { RefContext } from "../../context/RefContext";

const projects = [
  //   {
  //     name: "Farm Story",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cumque unde officiis minima distinctio quibusdam, ut veritatis vel animi. Reprehenderit ratione odio id aspernatur omnis autem ex minima. Velit, dolores?",
  //     tools: [],
  //     file: "",
  //     link: "",
  //     gitLink: "",
  //   },
  {
    name: "Expenser",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cumque unde officiis minima distinctio quibusdam, ut veritatis vel animi. Reprehenderit ratione odio id aspernatur omnis autem ex minima. Velit, dolores?",
    tools: [],
    file: "",
    link: "https://expense-tracker-puce-mu.vercel.app/",
    gitLink: "https://github.com/MINJI9901/ExpenseTracker",
  },
];

export default function Projects() {
  const { palette } = useTheme(theme);
  const { Projects } = useContext(RefContext);
  const rabbit = useRef(null);

  //   const rabbitMoving = () => {
  //     const projectContainer = document.querySelector("#project-container");
  //     const rabbitImg = rabbit.current;

  //     const moveRabbit = () => {
  //       const rabbitRect = rabbitImg.getBoundingClientRect();
  //       const projectRect = projectContainer.getBoundingClientRect();
  //       console.log("rabbit: ", rabbitRect);
  //       console.log("project: ", projectRect);
  //       console.log(rabbitRect.left < projectRect.right);
  //       //   if (rabbitRect.right < projectRect.right) {
  //       //     rabbitImg.style.left = `${rabbitRect.left - 5}px`;
  //       //     console.log("left: ", rabbitImg.style.left);
  //       //   } else if (rabbitRect.bottom > projectContainer.bottom) {
  //       //     rabbitImg.style.transform = "rotate(90deg)";
  //       //     rabbitImg.style.bottom = `${rabbitRect.bottom + 100}px`;
  //       //   }

  //       if (rabbitRect.right < projectRect.right) {
  //         // Move rabbit to the right
  //         rabbitImg.style.left = `${rabbitRect.left + 0.0001}px`;
  //       } else if (rabbitRect.bottom < projectContainer.bottom) {
  //         // Rotate and move down when reaching the right edge
  //         rabbitImg.style.transform = "rotate(90deg)";
  //         rabbitImg.style.top = `${rabbitRect.top + 0.001}px`;
  //       }
  //     };

  //     setInterval(moveRabbit, 1000);
  //   };

  //   useEffect(() => {
  //     rabbitMoving();
  //   }, []);

  return (
    <Box
      id="Projects"
      ref={Projects}
      className="section"
      position={"relative"}
      zIndex={1}
    >
      {/* <img
        ref={rabbit}
        src="/rabbit.png"
        alt=""
        style={{ width: "7%", position: "absolute", top: "-5%" }}
      /> */}
      <Grid2 container sx={{ justifyContent: "center", my: "10rem" }}>
        {projects.map((project) => (
          <Grid2
            size={5}
            id="project-container"
            key={project.name}
            sx={{
              backgroundColor: palette.common.lightGray,
              borderRadius: "0.3rem",
              padding: "2rem",
              margin: "2rem",
            }}
          >
            <Box
              sx={{
                backgroundColor: palette.primary.main,
                borderRadius: "0.3rem",
                height: "15rem",
                // objectFit: "contain",
              }}
            >
              <video
                autoPlay
                loop
                muted
                poster="https://assets.codepen.io/6093409/river.jpg"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              >
                <source
                  src="https://assets.codepen.io/6093409/river.mp4"
                  type="video/mp4"
                />
              </video>
            </Box>
            <Box>
              <Typography sx={{ my: "1rem" }}>{project.name}</Typography>
              <Typography>{project.description}</Typography>
            </Box>
            <Box sx={{ mt: "2rem" }}>
              <Link href={project.link} target="_blank" sx={{ mx: "1rem" }}>
                Live
              </Link>
              <Link href={project.gitLink} target="_blank" sx={{ mx: "1rem" }}>
                Code
              </Link>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

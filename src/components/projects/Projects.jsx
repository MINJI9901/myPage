import { useContext, useEffect, useRef } from "react";
// MUI
import { Box, Button, Grid2, Typography, Link, useTheme } from "@mui/material";
// THEME
import theme from "../../theme/theme";
// CONTEXT
import { RefContext } from "../../context/RefContext";
// COMPONENTS
import LogoGrid from "../generic/LogoGrid";
// REACT-ICONS
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiMui,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiSupabase,
} from "react-icons/si";

import AppearingMotion from "../generic/AppearingMotion";

const skillLogos = {
  React: <FaReact />,
  NextJs: <TbBrandNextjs />,
  TypeScript: <SiTypescript />,
  CSS: <FaCss3Alt />,
  HTML: <FaHtml5 />,
  "Material UI": <SiMui />,
  Bootstrap: <FaBootstrap />,
  Tailwindcss: <SiTailwindcss />,
  NodeJs: <FaNodeJs />,
  ExpressJs: <SiExpress />,
  MongoDB: <SiMongodb />,
  Supabase: <SiSupabase />,
};

const projects = [
  {
    name: "InnerClover",
    description:
      "A place to connect yourself from past to future. Try leaving a message for tomorrow of you! These little dots will connect you of each day.",
    tools: ["React", "NextJs", "TypeScript", "Material UI", "Supabase"],
    file: "/Innerclover_recording.mp4",
    link: "https://innerclover.vercel.app/inspiration",
    gitLink: "https://github.com/MINJI9901/Innerclover",
  },
  {
    name: "Expenser",
    description:
      "You want to manage your money flow in an efficient way? Here, you can manage financial input/output together! We allow you see how you are using your money at a glance.",
    tools: [
      "React",
      "NextJs",
      "JavaScript",
      "Material UI",
      "MongoDB",
      "Supabase",
    ],
    file: "/expenser_recording.mp4",
    link: "https://expense-tracker-puce-mu.vercel.app/",
    gitLink: "https://github.com/MINJI9901/ExpenseTracker",
  },
  // {
  //   name: "Farm Story",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cumque unde officiis minima distinctio quibusdam, ut veritatis vel animi. Reprehenderit ratione odio id aspernatur omnis autem ex minima. Velit, dolores?",
  //   tools: [],
  //   file: "",
  //   link: "",
  //   gitLink: "",
  // },
];

export default function Projects() {
  const { palette } = useTheme(theme);
  const { Projects } = useContext(RefContext);

  //   useEffect(() => {
  //     rabbitMoving();
  //   }, []);

  return (
    <AppearingMotion>
      <Box
        id="Projects"
        ref={Projects}
        className="section"
        position={"relative"}
        zIndex={1}
      >
        <Grid2 container justifyContent={"center"} py={"6rem"} spacing={7}>
          {projects.map((project) => (
            <Grid2
              size={{ xs: 12, sm: 9, md: 6 }}
              minWidth={"23rem"}
              maxWidth={"28rem"}
              id="project-container"
              key={project.name}
              sx={{
                backgroundColor: palette.common.lightGray,
                borderRadius: "0.3rem",
                padding: "2rem",
                margin: "2rem 0",
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
                {project.file ? (
                  <video
                    autoPlay
                    loop
                    muted
                    // poster="/expense_screenshot.png"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  >
                    <source src={project.file} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src="/expense_screenshot.png"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  ></img>
                )}
              </Box>
              <Box>
                <Typography fontWeight={700} my={"1rem"}>
                  {project.name}
                </Typography>
                <Typography textAlign={"left"}>
                  {project.description}
                </Typography>
              </Box>
              <Box m={"1rem"} fontSize={"1.5rem"}>
                <LogoGrid
                  logoNames={project.tools}
                  displayName={false}
                  color={palette.secondary.light}
                />
              </Box>
              <Box>
                <Button
                  href={project.link}
                  target="_blank"
                  sx={{
                    textDecoration: "underline wavy 2px",
                    textUnderlineOffset: "5px",
                    mx: "1rem",
                    "&:hover": {
                      bgcolor: palette.primary.main,
                      color: "white",
                    },
                  }}
                >
                  Try Me
                </Button>
                <Button
                  href={project.gitLink}
                  target="_blank"
                  sx={{
                    textDecoration: "underline wavy 2px",
                    textUnderlineOffset: "5px",
                    mx: "1rem",
                    "&:hover": {
                      bgcolor: palette.primary.main,
                      color: "white",
                    },
                  }}
                >
                  Code
                </Button>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </AppearingMotion>
  );
}

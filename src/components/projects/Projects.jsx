import { useContext, useEffect, useRef } from "react";
// MUI
import { Box, Button, Grid2, Typography, Link, useTheme } from "@mui/material";
// THEME
import theme from "../../theme/theme";
// CONTEXT
import { RefContext } from "../../context/RefContext";
import { LanguageContext } from "../../context/LanguageContext";
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
    description: {
      en: "A place to connect yourself from past to future. Try leaving a message for tomorrow of you! These little dots will connect you of each day.",
      kr: "내일의 나에게 전하고 싶은 말이 있으신가요? 내일의 내가 알았으면 하는 이야기를 하루 하나씩 적어보세요! 잊지 않았으면 하는 메세지를 꾸준히 전하다보면 분명 더 나은 내가 되어있을 거예요. 과거의 나와 미래의 나를 연결할 수 있습니다. 미래의 나에게 희망과 힘을 주세요.",
    },
    tools: ["React", "NextJs", "TypeScript", "Material UI", "Supabase"],
    poster: "/Innerclover_screenshot.png",
    file: "/Innerclover_recording.mp4",
    webmFile: "/Innerclover_recording.webm",
    link: "https://innerclover.vercel.app",
    gitLink: "https://github.com/MINJI9901/Innerclover",
  },
  {
    name: "Expenser",
    description: {
      en: "You want to manage your money flow in an efficient way? Here, you can manage financial input/output together! We allow you see how you are using your money at a glance.",
      kr: "비용을 소득과 비교하여 효율적으로 관리할 수 있습니다. 월별로 지출 계획을 세우고 그에 기반하여 실지출을 관리해보시는 건 어떠실까요? 예상 소득 또한 월별로 기입하여, 실소득 및 지출과 비교하여 관리하세요!",
    },
    tools: [
      "React",
      "NextJs",
      "JavaScript",
      "Material UI",
      "MongoDB",
      "Supabase",
    ],
    poster: "/expense_screenshot.png",
    file: "/expenser_recording.mp4",
    webmFile: "/expenser_recording.webm",
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
  const { language } = useContext(LanguageContext);

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
                // backgroundColor: palette.grey[100],
                border: "1px solid",
                borderColor: palette.primary.light,
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
                    playsInline
                    controls
                    poster={project.poster}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  >
                    <source src={project.file} type="video/mp4" />
                    <source src={project.webmFile} type="video/webm" />
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
                <Typography
                  textAlign={"left"}
                  height={"8rem"}
                  sx={{ overflowY: "auto" }}
                  className="hide-scrollbar"
                >
                  {project.description[language]}
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
                  {{ en: "Try Me", kr: "테스트" }[language]}
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
                  {{ en: "Code", kr: "코드" }[language]}
                </Button>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </AppearingMotion>
  );
}

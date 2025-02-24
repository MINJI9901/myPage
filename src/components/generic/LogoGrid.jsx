// MUI
import { Box, Grid2, Typography } from "@mui/material";
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
  SiMui,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiSupabase,
} from "react-icons/si";

const skillLogos = {
  React: <FaReact />,
  NextJs: <TbBrandNextjs />,
  JavaScript: <IoLogoJavascript />,
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

export default function LogoGrid({ logoNames, displayName }) {
  return (
    <Grid2 container spacing={1}>
      {logoNames.map((name, idx) => (
        <Grid2 size={{ xs: 4, lg: 3 }} key={idx} display={"inline-block"}>
          {skillLogos[name]}
          {displayName ? (
            <Typography fontSize={{ xs: "0.8rem", lg: "0.9rem" }}>
              {name}
            </Typography>
          ) : (
            ""
          )}
        </Grid2>
      ))}
    </Grid2>
  );
}

// MUI
import { Box, Grid2, Typography, Tooltip } from "@mui/material";
import { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
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

const skillLogos = {
  React: <FaReact />,
  NextJs: <TbBrandNextjs />,
  JavaScript: <IoLogoJavascript />,
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

export default function LogoGrid({ logoNames, displayName, color }) {
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.8)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

  return (
    <Grid2 container spacing={1}>
      {logoNames.map((name, idx) => (
        <LightTooltip key={idx} title={name}>
          <Grid2
            size={{ xs: 4, lg: 3 }}
            key={idx}
            color={color ? color : "black"}
            display={"inline-block"}
          >
            {skillLogos[name]}
            {displayName ? (
              <Typography fontSize={{ xs: "0.8rem", lg: "0.9rem" }}>
                {name}
              </Typography>
            ) : (
              ""
            )}
          </Grid2>
        </LightTooltip>
      ))}
    </Grid2>
  );
}

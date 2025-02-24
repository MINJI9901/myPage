// MUI
import { Box, Grid2, Typography } from "@mui/material";
// COMPONENTS
import LogoGrid from "../generic/LogoGrid";

export default function SkillStack() {
  const frontendSkill = [
    "React",
    "NextJs",
    "JavaScript",
    "CSS",
    "HTML",
    "Material UI",
    "Bootstrap",
    "Tailwindcss",
  ];
  const backendSkill = ["NodeJs", "ExpressJs", "MongoDB", "Supabase"];

  return (
    <Box
      display={{ xs: "block", sm: "flex" }}
      justifyContent={"space-between"}
      fontSize={"3rem"}
      p={"2rem 0"}
      textAlign={"center"}
      gap={3}
    >
      <Box width={{ xs: "100%", md: "45%" }} mb={{ xs: "2rem", sm: 0 }}>
        <Typography fontSize={"1.5rem"} fontWeight={700}>
          Front-end
        </Typography>
        <LogoGrid logoNames={frontendSkill} displayName={true} />
      </Box>
      <Box width={{ xs: "100%", md: "45%" }}>
        <Typography fontSize={"1.5rem"} fontWeight={700}>
          Back-end
        </Typography>
        <LogoGrid logoNames={backendSkill} displayName={true} />
      </Box>
    </Box>
  );
}

import { useContext } from "react";

import { Box, Container, Divider, Typography, useTheme } from "@mui/material";

import theme from "../../theme/theme";
import { RefContext } from "../context/RefContext";

const Instruction =
  "Front-end developer specialized in React but also equiped with Back-end technologies.\n\nWhat I'm aiming for is to make applications that are comfortable to use and re-visit. I keep learning new skills and building new knowledges to keep improving myself and become a creative and inspirational developer with user-friendly UI.\n\nPreviously, I worked at 'JYP Entertainment' which is South Korea multinational entertainment agency as administrative assistance which was in charge of managing artists appearance contracts, data of clothing stock, and accounting expense and sales data communicating between clients and internal relavant teams.\n\nIn 2024, I decided to become a web developer, I'm on my journey to make benefits for world.";

export default function About() {
  const { palette } = useTheme(theme);
  const { About } = useContext(RefContext);

  return (
    <Box
      id="About"
      className="section"
      ref={About}
      sx={{
        backgroundColor: palette.primary.light,
        borderRadius: "1rem",
        textAlign: "left",
        padding: "2rem",
        margin: "7rem 2rem",
        zIndex: 1,
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: "2rem", fontWeight: "700", padding: "2rem" }}
      >
        About
      </Typography>
      <Divider sx={{ borderColor: palette.secondary.main }} />
      <Typography
        sx={{
          fontSize: "1.1rem",
          padding: "2rem",
          animation: "move-text 10s linear forwards",
          whiteSpace: "pre-line",
        }}
      >
        {Instruction}
      </Typography>
    </Box>
  );
}

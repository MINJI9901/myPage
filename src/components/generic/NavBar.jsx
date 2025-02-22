import { useState } from "react";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Link,
  Button,
  useTheme,
} from "@mui/material";

import theme from "../../theme/theme";

const navItems = ["Home", "Projects", "About", "Contact"];

export default function NavBar() {
  const { palette } = useTheme(theme);
  const [value, setValue] = useState(0);

  return (
    <Box
      sx={{
        position: "sticky",
        top: "1rem",
        border: `1px solid ${palette.common.lightGray}`,
        borderRadius: "1rem",
        bgcolor: "white",
        width: "fit-content",
        px: "1rem",
        mx: "auto",
        zIndex: 2,
      }}
    >
      {navItems.map((item) => (
        <Button
          href={`#${item}`}
          key={item}
          sx={{ color: palette.secondary.main, mx: "1rem" }}
        >
          {item}
        </Button>
      ))}
    </Box>
  );
}

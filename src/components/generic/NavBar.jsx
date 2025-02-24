import { useState } from "react";

import {
  Box,
  Button,
  useTheme,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import theme from "../../theme/theme";

const navItems = ["Home", "Projects", "About", "Contact"];

export default function NavBar() {
  const { palette } = useTheme(theme);
  const [value, setValue] = useState(0);
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);

  const openMobileMenu = (e) => {
    console.log("menu is clicked!!");
    console.log(e.currentTarget);
    setMobileAnchorEl(e.currentTarget);
  };

  const closeMobileMenu = (e) => {
    setMobileAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
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
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          position: "fixed",
          top: "1rem",
          right: "1rem",
          zIndex: 2,
        }}
      >
        <IconButton onClick={openMobileMenu}>
          <MenuIcon />
        </IconButton>
        <Menu
          open={Boolean(mobileAnchorEl)}
          anchorEl={mobileAnchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          onClose={closeMobileMenu}
        >
          {navItems.map((item) => (
            <Button
              href={`#${item}`}
              key={item}
              sx={{
                display: "block",
                color: palette.secondary.main,
                mx: "1rem",
              }}
              onClick={closeMobileMenu}
            >
              {item}
            </Button>
          ))}
        </Menu>
      </Box>
    </>
  );
}

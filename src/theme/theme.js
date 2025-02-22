import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        common: {
            lightGray: '#dbdad9'
        },
        primary: {
            main: '#b68df0',
            light: '#d7c1f5',
            dark: '#744ab0'
        },
        secondary: {
            main: '#e6592e',
            light: '#eb9a81',
            dark: '#d4461c'
        }
    }
});

export default theme;
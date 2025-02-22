import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from "./theme";

export default function ThemeProvider({ children }) {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </MuiThemeProvider>
    );
};
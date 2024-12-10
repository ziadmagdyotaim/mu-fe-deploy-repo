import L1 from "@/layouts/L1";
import Routes from "@/components/Routes";
import GlobalMiddleware from "./middleware/GlobalMiddleware";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  typography: {
    fontFamily: "Cairo, Arial, sans-serif", // Define your custom font
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <GlobalMiddleware>
          <L1>
            <Routes />
          </L1>
        </GlobalMiddleware>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import { GlobalStyle } from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/header";
import Routes from "./routes";
import { useContext } from "react";
import { darkTheme, lightTheme } from "./styles/themes";
import { ThemeContext } from "./contexts/theme";

export default function App() {

  const { theme } = useContext(ThemeContext)
  console.log(theme)

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Routes />
        <Header />
    </ThemeProvider>
  );
}


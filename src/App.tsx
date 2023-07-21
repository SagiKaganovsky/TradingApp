import { useCallback, useState } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { MenuBar, SideBar } from "./components";

function App() {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
    typography: {
      fontSize: 14,
    },
  });

  const handleDrawerToggle = useCallback(() => {
    setIsDrawerOpen((prevIsDrawerOpen) => !prevIsDrawerOpen);
  }, []);
  const handleThemeChange = useCallback(() => {
    setThemeMode(themeMode == "dark" ? "light" : "dark");
  }, [themeMode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MenuBar
        handleDrawerToggle={handleDrawerToggle}
        handleThemeChange={handleThemeChange}
        isDarkMode={themeMode === "dark"}
      />
      <SideBar handleDrawerToggle={handleDrawerToggle} isOpen={isDrawerOpen} />
    </ThemeProvider>
  );
}

export default App;

import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Switch as ThemeSwitch,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

interface Props {
  handleDrawerToggle: () => void;
  handleThemeChange: () => void;
  isDarkMode: boolean;
}

export const MenuBar: React.FC<Props> = ({
  handleDrawerToggle,
  handleThemeChange,
  isDarkMode,
}): JSX.Element => {
  return (
    <AppBar position="static" variant="elevation">
      <Toolbar variant="dense">
        <IconButton color="inherit" onClick={handleDrawerToggle} edge="start">
          <MenuIcon />
        </IconButton>
        <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1 }}>
          Trading App
        </Typography>
        <LightModeIcon />
        <ThemeSwitch
          size="small"
          onChange={handleThemeChange}
          checked={isDarkMode}
        />
        <DarkModeIcon />
      </Toolbar>
    </AppBar>
  );
};

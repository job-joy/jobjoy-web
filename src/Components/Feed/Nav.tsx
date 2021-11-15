import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { styled } from "@mui/material/styles";

import SideBar from "./SideBar";
import { useStateTheme } from "../../index";

const Nav = () => {
  const { i18n } = useTranslation();

  const { theme, setTheme } = useStateTheme();

  const [openDrawer, setOpenDrawer] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const handleTheme = () => {
    setDark(!dark);
    setTheme(theme == "dark" ? "light" : "dark");
  };

  const handleLanguageMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleLanguageMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleLanguageChange = (lan) => {
    i18n.changeLanguage(lan);
    handleLanguageMenuClose();
  };

  const handleDrawerMenuOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerMenuClose = () => {
    setOpenDrawer(false);
  };

  const renderMenu = (
    <Menu
      id="basic-menu"
      open={isMenuOpen}
      onClose={handleLanguageMenuClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <MenuItem onClick={() => handleLanguageChange("en")}>en</MenuItem>
      <MenuItem onClick={() => handleLanguageChange("fa")}>fa</MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBarHeader>
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={handleLanguageMenuOpen}
          >
            <Badge badgeContent={"en"} color="primary">
              <LanguageIcon aria-controls="fade-menu" />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={1} color="warning">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={1} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            {dark ? (
              <DarkModeIcon onClick={handleTheme} />
            ) : (
              <LightModeIcon onClick={handleTheme} />
            )}
          </IconButton>
          <StyledMenuIconButton color="inherit" aria-label="menu">
            <MenuIcon onClick={handleDrawerMenuOpen} />
          </StyledMenuIconButton>
        </Toolbar>
      </AppBarHeader>
      <SideBar visible={openDrawer} onClose={handleDrawerMenuClose} />
      {renderMenu}
    </>
  );
};

const AppBarHeader = styled(AppBar)(() => ({
  position: "static",
}));

const StyledMenuIconButton = styled(IconButton)(() => ({
  position: "absolute",
  right: 0,
  verticalAlign: "top",
}));

export default Nav;

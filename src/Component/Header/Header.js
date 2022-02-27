import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Tooltip,
  List,
  ListItem,
  ListItemText,
  Drawer,
  IconButton,
  ListItemIcon,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import Link from "next/link";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "type" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar style={{ background: "rgba(143, 88, 73, 1)" }}>
          <Tooltip title="Open settings">
            <IconButton>
              <Link href="/profile">
                <Avatar alt="Remy Sharp" />
              </Link>
            </IconButton>
          </Tooltip>
          <Typography variant="h6" noWrap component="div" style={{ flex: 1 }}>
            JobJoy
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={handleOpenDrawer} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={"right"}
        open={openDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <List style={{ padding: 20 }}>
          {["PROFILE"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};
export default Header;

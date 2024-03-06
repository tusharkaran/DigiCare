import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Avatar } from "@mui/material";
import "./Drawer.scss";
import { useTranslation } from "react-i18next";
import { DigicareDrawerProps } from "./interface";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../../../router/RoutesList";
import styles from "../../../assets/styles/_variable.module.scss";
import { DigiCareTitle } from "../title/title";
import { DigiCareIcons } from "../../../assets/icon";
import { DigiCareIconEnum } from "../../../assets/icon/interface";

export function DigiCareDrawer({ children }: DigicareDrawerProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${styles.navbarWidth})`,
          ml: `${styles.navbarWidth}`,
        }}
      >
        <Toolbar>
          <DigiCareIcons  className="avatar-position" iconFor={DigiCareIconEnum.avatar} />
          {/* <Typography variant="h6" noWrap component="div">
            {t("drawer.pageTitle")}
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: styles.navbarWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: styles.navbarWidth,
            boxSizing: "border-box",
            backgroundColor: styles.navbarTitleBackgroundColor,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <DigiCareTitle />
        </Toolbar>
        <Divider />
        <div className="doctor-details" style={{ textAlign: "center" }}>
          <Avatar
            src={t("drawer.patientImage")}
            alt="name"
            className="doctor-image"
            sx={{ width: 100, height: 100 }}
          />
          <Typography variant="h6" textAlign="center">
            {t("drawer.patientName")}
          </Typography>
        </div>

        <Divider />
        <List>
          {RoutesList.map((data) => {
            return (
              <ListItem key={t(data.name)} disablePadding>
                <ListItemButton onClick={() => navigate(data.link)}>
                  <ListItemText
                    sx={{
                      "& .MuiListItemText-primary": { fontSize: "1.6rem" },
                    }}
                    className="navbar-router-text"
                  >
                    {t(data.name)}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

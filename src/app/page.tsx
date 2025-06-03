"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Info } from "@mui/icons-material";
export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        maxWidth: "816px",
        aspectRatio: "8.5/11",
        margin: "auto",
        position: "relative",
      }}
    >
      {isMobile ? (
        <>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              position: "fixed",
              top: 16,
              right: 16,
              zIndex: theme.zIndex.drawer + 1,
            }}
          >
            <Info sx={{ color: "text.primary" }} />
          </IconButton>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
            }}
          >
            <Sidebar />
          </Drawer>
        </>
      ) : (
        <Sidebar />
      )}
      <MainContent />
    </Box>
  );
}

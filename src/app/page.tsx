"use client";
import React, { useState, useRef } from "react";
import generatePDF from "react-to-pdf";
import Box from "@mui/material/Box";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { Download, Info } from "@mui/icons-material";
export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    noSsr: false,
    defaultMatches: true,
  });
  const pdfRef = useRef(null);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleGeneratePDF = () => {
    generatePDF(pdfRef, { filename: "Justin_Kahrs_Resume.pdf" });
  };
  return (
    <>
      <Box
        ref={pdfRef}
        sx={{
          display: "flex",
          width: "100%",
          maxWidth: "816px",
          aspectRatio: "8.5/11",
          margin: "auto",
          minHeight: "150vh",
        }}
      >
        {isMobile ? (
          <>
            <IconButton
              onClick={handleGeneratePDF}
              sx={{
                position: "fixed",
                top: 16,
                right: 48,
                zIndex: theme.zIndex.drawer + 1,
              }}
            >
              <Download sx={{ color: "text.primary" }} />
            </IconButton>
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
              ModalProps={{ keepMounted: false }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: 240,
                  height: "100vh",
                },
              }}
            >
              <Sidebar />
            </Drawer>
          </>
        ) : (
          <Sidebar />
        )}
        <MainContent generatePDF={handleGeneratePDF} isMobile={isMobile} />
      </Box>
    </>
  );
}

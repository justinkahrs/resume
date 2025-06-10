"use client";
import React, { useState, useRef, useEffect } from "react";
import generatePDF, { Resolution } from "react-to-pdf";
import Grid from "@mui/material/Grid";
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
  const [downloading, setDownloading] = useState(false);
  useEffect(() => {
    if (downloading) {
      generatePDF(pdfRef, {
        filename: "Justin_Kahrs_Resume.pdf",
        resolution: Resolution.HIGH,
        page: {
          format: "letter",
        },
        overrides: {
          pdf: {
            compress: true,
            format: "letter",
          },
        },
      });
      setDownloading(false);
    }
  }, [downloading]);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleGeneratePDF = () => {
    setDownloading(true);
  };
  return (
    <Grid
      container
      display="flex"
      ref={pdfRef}
      sx={{
        background: "linear-gradient(180deg, #333333 0%, #000000 100%)",
        width: downloading ? "8.5in" : "100%",
        maxWidth: downloading ? undefined : "816px",
        margin: "auto",
        height: downloading ? "22in" : undefined,
      }}
    >
      {isMobile ? (
        <>
          <IconButton
            data-html2canvas-ignore="true"
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
            data-html2canvas-ignore="true"
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
                background: "linear-gradient(180deg, #333333 0%, #000000 100%)",
                boxSizing: "border-box",
                width: 240,
              },
            }}
          >
            <Sidebar />
          </Drawer>
        </>
      ) : (
        <Grid size={4}>
          <Sidebar />
        </Grid>
      )}
      <Grid size={isMobile ? 12 : 8}>
        <MainContent
          downloading={downloading}
          generatePDF={handleGeneratePDF}
          isMobile={isMobile}
        />
      </Grid>
      {downloading && (
        <Grid
          container
          display="flex"
          alignContent="center"
          justifyContent="center"
          size={12}
          sx={{ color: "white", minHeight: "250px" }}
        >
          References available upon request
        </Grid>
      )}
    </Grid>
  );
}

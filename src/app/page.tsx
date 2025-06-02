import React from "react";
import Box from "@mui/material/Box";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        maxWidth: "816px",
        aspectRatio: "8.5/11",
        margin: "auto",
      }}
    >
      <Sidebar />
      <MainContent />
    </Box>
  );
}

import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import data from "../app/data";
import Button from "@mui/material/Button";
import { Download } from "@mui/icons-material";
import WorkTimeline from "./WorkTimeline";
export default function MainContent({
  downloading,
  generatePDF,
  isMobile,
}: {
  downloading: boolean;
  generatePDF: () => void;
  isMobile: boolean;
}) {
  return (
    <Grid
      component="main"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        p: { xs: 2, sm: 4 },
      }}
    >
      <Grid sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            display: "inline",
            color: "text.primary",
            mr: 1,
          }}
        >
          {data.basics.firstName}
        </Typography>
        <Typography
          variant="h3"
          sx={{ display: "inline", color: "text.primary" }}
        >
          {data.basics.lastName}
        </Typography>
      </Grid>
      <Typography
        variant="subtitle1"
        sx={{ mt: 1, color: "text.secondary", letterSpacing: 1 }}
      >
        {data.basics.label}
      </Typography>
      {isMobile && downloading && (
        <Typography variant="body2" sx={{ mt: 0.5, color: "text.secondary" }}>
          {data.basics.email} | {data.basics.phone}
        </Typography>
      )}
      {!isMobile && (
        <Grid
          data-html2canvas-ignore="true"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            mb: 2,
          }}
        >
          <Button
            startIcon={<Download />}
            variant="contained"
            onClick={generatePDF}
          >
            Save (PDF)
          </Button>
        </Grid>
      )}
      <Divider sx={{ mb: 3 }} />
      <Grid sx={{ mb: 4 }}>
        <Typography
          variant="h6"
          sx={{
            letterSpacing: 1,
            mb: 1,
            color: "text.primary",
            fontSize: "1rem",
          }}
        >
          PROFILE
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {data.basics.summary}
        </Typography>
      </Grid>
      {/* WORK EXPERIENCE */}
      <Typography
        variant="h6"
        sx={{
          letterSpacing: 1,
          mb: 1,
          color: "text.primary",
          fontSize: "1rem",
          position: "sticky",
          top: 0,
          backgroundColor: "background.default",
          zIndex: 1,
        }}
      >
        WORK EXPERIENCE
      </Typography>
      <WorkTimeline
        isMobile={isMobile}
        downloading={downloading}
        work={data.work}
      />
    </Grid>
  );
}

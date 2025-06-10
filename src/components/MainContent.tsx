import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import data from "../app/data";
import Button from "@mui/material/Button";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Download } from "@mui/icons-material";
export default function MainContent({
  generatePDF,
  isMobile,
}: {
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
      {!isMobile && (
        <Grid
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            mb: 2,
            "@media print": { display: "none" },
          }}
        >
          <Button
            data-html2canvas-ignore="true"
            startIcon={<Download />}
            variant="contained"
            onClick={generatePDF}
          >
            Save (PDF)
          </Button>
        </Grid>
      )}
      <Divider sx={{ mb: 3 }} />
      <Grid data-html2canvas-ignore="true" sx={{ mb: 4 }}>
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
      <Timeline
        sx={{
          width: "100%",
          m: 0,
          p: 0,

          "& .MuiTimelineItem-root:before": {
            flex: 0,
          },
        }}
      >
        {data.work.map((job, idx) => {
          const isLast = idx === data.work.length - 1;
          return (
            <TimelineItem key={job.name}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                {!isLast && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Grid sx={{ mb: isLast ? 0 : 4 }}>
                  <Grid
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      mb: 0.5,
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      component="a"
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        fontWeight: "bold",
                        color: "text.primary",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      {job.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {job.startDate} — {job.endDate}
                    </Typography>
                  </Grid>

                  <Typography
                    variant="body2"
                    sx={{ mb: 1, color: "text.primary" }}
                  >
                    {job.position}
                  </Typography>
                  {job.location && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        mb: 1,
                      }}
                    >
                      {job.location}
                    </Typography>
                  )}
                  <List dense disablePadding>
                    {job.highlights.map((h) => (
                      <ListItem
                        key={h}
                        disablePadding
                        disableGutters
                        sx={{ p: 0, m: 0 }}
                      >
                        <ListItemIcon
                          sx={{ minWidth: 24, color: "primary.main" }}
                        >
                          <Grid
                            component="span"
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              bgcolor: "primary.main",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary={h} sx={{ m: 0.25 }} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Grid>
  );
}

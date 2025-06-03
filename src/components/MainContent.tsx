import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import data from "../app/data";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
export default function MainContent() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: "background.default",
        color: "text.primary",
        p: { xs: 2, sm: 4 },
      }}
    >
      <Box sx={{ mb: 3 }}>
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
        <Typography
          variant="subtitle1"
          sx={{ mt: 1, color: "text.secondary", letterSpacing: 1 }}
        >
          {data.basics.label}
        </Typography>
      </Box>
      <Divider sx={{ mb: 3 }} />
      {/* PROFILE */}
      <Box sx={{ mb: 4 }}>
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
      </Box>
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
                <Box sx={{ mb: isLast ? 0 : 4 }}>
                  <Box
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
                  </Box>

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
                      <ListItem key={h} disableGutters sx={{ pl: 0 }}>
                        <ListItemIcon
                          sx={{ minWidth: 24, color: "primary.main" }}
                        >
                          <Box
                            component="span"
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              bgcolor: "primary.main",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={h}
                          primaryTypographyProps={{
                            variant: "body2",
                            color: "text.secondary",
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>

      <Divider sx={{ mb: 4 }} />
    </Box>
  );
}

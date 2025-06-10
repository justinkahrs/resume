import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { OpenInNew } from "@mui/icons-material";
export interface WorkTimelineProps {
  downloading: boolean;
  isMobile: boolean;
  work: Array<{
    name: string;
    link: string;
    startDate: string;
    endDate: string;
    position: string;
    location?: string;
    highlights: string[];
  }>;
}
export default function WorkTimeline({
  downloading,
  isMobile,
  work,
}: WorkTimelineProps) {
  return (
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
      {work.map((job, idx) => {
        const isLast = idx === work.length - 1;
        // To-do fix this nastiness
        const makeSpace =
          (!isMobile && downloading && idx === 2) ||
          (isMobile && downloading && idx === 3);
        return (
          <TimelineItem
            key={job.name}
            sx={{ mt: makeSpace ? "200px" : undefined }}
          >
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
                    alignItems: "center",
                    mb: 0.5,
                  }}
                >
                  <Grid
                    display="flex"
                    alignItems="center"
                    component="a"
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: "bold",
                        color: "text.primary",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      {job.name}
                    </Typography>
                    <OpenInNew
                      data-html2canvas-ignore="true"
                      fontSize="small"
                      sx={{ ml: 1 }}
                    />
                  </Grid>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {job.startDate} — {job.endDate}
                  </Typography>
                </Grid>
                {downloading && (
                  <Typography
                    variant="subtitle1"
                    sx={{ m: 0, p: 0, color: "text.secondary" }}
                  >
                    {job.link}
                  </Typography>
                )}
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
  );
}

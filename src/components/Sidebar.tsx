import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Phone, Email, LocationOn, Language } from "@mui/icons-material";
import data from "../app/data";
export default function Sidebar() {
  return (
    <Box
      component="aside"
      sx={{
        width: { xs: "100%", sm: 400 },
        height: "100vh",
        bgcolor: "primary.dark",
        color: "common.white",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        p: 2,
        background: "linear-gradient(180deg, #333333 0%, #000000 100%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: 120,
          height: 120,
          backgroundColor: "white",
          mb: 5,
          borderRadius: "100%",
        }}
      >
        <Avatar
          src="/illustrated-profile.png"
          alt={data.basics.firstName}
          sx={{
            width: 120,
            height: 120,
            mx: "auto",
            border: "3px solid white",
          }}
        />
      </Box>
      <Typography
        variant="h6"
        sx={{
          letterSpacing: 1,
          mb: 1,
          color: "grey.300",
          fontSize: "0.9rem",
          alignSelf: "flex-start",
        }}
      >
        CONTACT
      </Typography>
      <List dense disablePadding>
        <ListItem disableGutters>
          <ListItemIcon sx={{ color: "grey.300", minWidth: 32 }}>
            <Phone fontSize="small" />
          </ListItemIcon>
          <ListItemText primary={data.basics.phone} />
        </ListItem>
        <ListItem disableGutters>
          <ListItemIcon sx={{ color: "grey.300", minWidth: 32 }}>
            <Email fontSize="small" />
          </ListItemIcon>
          <ListItemText primary={data.basics.email} />
        </ListItem>
        <ListItem disableGutters>
          <ListItemIcon sx={{ color: "grey.300", minWidth: 32 }}>
            <LocationOn fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary={`${data.basics.location.city}, ${data.basics.location.region}`}
          />
        </ListItem>
        <ListItem disableGutters>
          <ListItemIcon sx={{ color: "grey.300", minWidth: 32 }}>
            <Language fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Link
                href={data.basics.url}
                sx={{ color: "grey.100", textDecoration: "none" }}
                target="_blank"
              >
                {data.basics.url.replace(/^https?:\/\//, "")}
              </Link>
            }
          />
        </ListItem>
      </List>
      <Divider sx={{ bgcolor: "grey.700", my: 2 }} />
      {/* EDUCATION */}
      <Typography
        variant="h6"
        sx={{
          letterSpacing: 1,
          mb: 1,
          color: "grey.300",
          fontSize: "0.9rem",
          alignSelf: "flex-start",
        }}
      >
        EDUCATION
      </Typography>
      {data.education.map((edu) => (
        <Box key={edu.institution} sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ color: "grey.100" }}>
            {edu.institution}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontStyle: "italic", color: "grey.300" }}
          >
            {edu.studyType} in {edu.area}
          </Typography>
          <Typography variant="body2" sx={{ color: "grey.300" }}>
            {edu.startDate} — {edu.endDate}
          </Typography>
        </Box>
      ))}
      <Divider sx={{ bgcolor: "grey.700", my: 2 }} />
      {/* SKILLS */}
      <Typography
        variant="h6"
        sx={{
          letterSpacing: 1,
          mb: 1,
          color: "grey.300",
          fontSize: "0.9rem",
          alignSelf: "flex-start",
        }}
      >
        SKILLS
      </Typography>
      <List dense disablePadding>
        {data.skills.map((skill) => (
          <ListItem key={skill.name} disableGutters>
            <ListItemText
              primary={
                <Typography
                  variant="body2"
                  sx={{ color: "grey.100", fontWeight: "bold" }}
                >
                  {skill.name}
                </Typography>
              }
              secondary={
                <Typography variant="caption" sx={{ color: "grey.300" }}>
                  {skill.keywords.join(" · ")}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

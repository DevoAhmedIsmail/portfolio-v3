"use client";

import { Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import HeaderSection from "../HeaderSection";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import experienceData from "@/data/experinceData";

const Experience = () => {
  return (
    <Box pb="50px" id="experience">
      <Container maxWidth="xl" sx={{ px: { xs: 0 } }}>
        <HeaderSection title="Experience" />
        <Toolbar sx={{ px: { xs: 0 } }}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            {/* ROAD */}
            <Timeline position="alternate" sx={{ width: "100%" }}>
              {/* DATA */}
              {experienceData.map((exp, index) => (
                <TimelineItem
                  key={index}
                  // data-aos="fade-right"
                  // data-aos-offset="900"
                  // data-aos-duration="2000"
                  // data-aos-easing="ease-in-sine"
                >
                  <TimelineOppositeContent
                    color="text.secondary"
                    fontWeight="600"
                  >
                    {exp.date}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Box>
                      <Typography
                        variant="h4"
                        sx={{ fontSize: { xs: 17, md: 20 } }}
                        fontWeight="600"
                      >
                        {exp.text}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="#3da58a"
                        fontWeight="600"
                        mb="5px"
                      >
                        {exp.title}
                      </Typography>
                      <Typography variant="h6" mb="25px">
                        {exp.details}
                      </Typography>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Experience;

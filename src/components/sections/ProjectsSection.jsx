import { Box, Container, Grid, Skeleton, Toolbar } from "@mui/material";
import React from "react";
import ProjectCard from "../ProjectCard";
import { workProjects, PersonalProjects } from "@/data/projects";
import HeaderSection from "../HeaderSection";

const ProjectsSection = ({ source, idSection }) => {
  const projects = source === "work" ? workProjects : PersonalProjects;
  return (
    <Box pb="80px" id={idSection}>
      <Container maxWidth="xl">
        <HeaderSection
          title={source === "work" ? "Work" : "Personal Projects"}
        />
        <Toolbar>
          <Box width="100%">
            <Grid container spacing={7}>
              {projects.map((project) => (
                <Grid key={project.id} item xs={12} sm={6} md={4}>
                  <ProjectCard key={project.id} project={project} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
};

export default ProjectsSection;

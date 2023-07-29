"use client"

import { Box, Container, Grid, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import HeaderSection from "../HeaderSection";
import { skillsData } from "@/data/skillsData";
import Image from "next/image";
import { useTheme } from "@emotion/react";

const Skills = () => {
    const theme = useTheme()
  const currentMode = theme.palette.mode;
  return (
    <Box pb="50px" id="skills">
      <Container maxWidth="xl">
        <HeaderSection title="Skills" />
        <Toolbar>
          <Box width="100%">
            {/* Skills */}
            <Grid container spacing={5}>
              {skillsData.map((skill, index) => (
                <Grid 
                  key={index} 
                  item 
                  xs={6} 
                  sm={6} 
                  md={4} 
                  lg={3} 
                  // data-aos="fade-up" 
                  // data-aos-offset="900" 
                  // data-aos-duration="2000"
                 >
                    <Box width="100%" bgcolor={currentMode === "light" ? "#dddddd" : "#6b7280"} p="20px" borderRadius="8px">
                        {/* IMAGE */}
                        <Box 
                          sx={{width: "100%", height: "8rem", position: "relative"}}
                          
                        >
                            <Image
                                src={skill.image}
                                alt={skill.name}
                                fill
                                objectFit="contain"
                            />
                        </Box>
                        {/* Text */}
                        <Typography variant="h4" textAlign="center" mt="18px" fontWeight="600">{skill.name}</Typography>
                    </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Skills;

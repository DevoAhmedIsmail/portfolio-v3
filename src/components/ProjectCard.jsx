"use client";

import {
  Box,
  Button,
  Divider,
  Paper,
  Skeleton,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ProjectCard = ({ project }) => {
  const theme = useTheme();
  const currentMode = theme.palette.mode;

  const [isLoading, setIsLoading] = useState(true);
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(()=>{
    setTimeout(handleLoadingComplete, 3000)
  }, [])

  return (
    <>
      {isLoading ? (
        <Box>
          <Skeleton
            variant="rectangular"
            width="100%"
            height={200}
            animation="wave"
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={70}
            animation="wave"
            sx={{ mt: "10px" }}
          />
        </Box>
      ) : (
        <Box
          sx={{
            height: "600px",
            borderRadius: "4px",
            overflow: "hidden",
            boxShadow: `4px 3px 10px 5px ${
              currentMode === "light" ? "#eee" : "#000"
            }`,
          }}

        >
          {/* IMAGE */}
          <Box
            position="relative"
            width="100%"
            height="400px"
            overflow="hidden"
          >
            <Image
              className="project-image"
              src={project.image}
              alt={project.title}
              layout="responsive" // Set the layout to "responsive" for full height
              width={1920} // Set the desired width (change as needed)
              height={1080} // Set the desired height (change as needed)
              objectFit="cover"
              objectPosition="top"
              load
              onLoad={handleLoadingComplete}
            />
          </Box>
          <Divider />
          {/* DETAILS */}
          <Box>
            <Toolbar>
              <Box display="flex" flexDirection="column" my="20px">
                <Typography variant="h3" sx={{ textTransform: "capitalize" }}>
                  {project.title}
                </Typography>

                {/* Skills */}
                <Box display="flex" mt="5px" flexWrap="wrap">
                  {project.skills?.map((skill, index) => (
                    <Typography
                      key={index}
                      variant="h5"
                      sx={{ color: "#4cceac", mr: "5px" }}
                    >
                      {skill} {project.skills.length > index + 1 ? "," : "."}
                    </Typography>
                  ))}
                </Box>

                {/* DESCRIPTIONS */}
                <Typography variant="h5" my="10px">
                  {project.description}
                </Typography>

                {project.link && (
                  <Button
                    variant="contained"
                    href={project.link}
                    target="_blank"
                    sx={{
                      bgcolor: "#3da58a",
                      p: "10px 10px",
                      mt: "10px",
                      maxWidth: "125px",
                    }}
                  >
                    View Project
                  </Button>
                )}
              </Box>
            </Toolbar>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ProjectCard;

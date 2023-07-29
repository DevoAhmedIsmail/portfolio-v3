"use client";

import { tokens } from "@/theme/themes";
import { Download } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";
// import ImageWrapper from ""

const HeroSection = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        overflow: "hidden",
        height: `calc(100vh - ${theme.customHeight.navbar})`,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters={true}>
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ flexDirection: { xs: "column-reverse", lg: "row" },p: {xs:"0", lg: "50px 50px"} }}
          >
            {/* LEFT SIDE */}
            <Box
              sx={{
                width: { xs: "100%", lg: "50%" },
                textAlign: { xs: "center", lg: "start" },
                mt: {xs: "-60px", lg: "0px"}
              }}
            >
              <Stack
                direction="column"
                sx={{ alignItems: { xs: "center", lg: "start" } }}
              >
                <Box color={colors.greenAccent[500]}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "30px",
                        md: "35px",
                        lg: "45px",
                        xl: "53px",
                      },
                      fontWeight: "600",
                    }}
                  >{`Hi, I'm Ahmed Ismail:`}</Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "30px",
                        md: "35px",
                        lg: "45px",
                        xl: "53px",
                      },
                      fontWeight: "600",
                    }}
                  >
                    A Front-End Developer
                  </Typography>
                </Box>

                <Typography
                  variant="h4"
                  my="15px"
                  sx={{ fontSize: { md: "15px", xl: "20px" } }}
                >
                  As a front-end developer with a passion for React.js, I thrive
                  in collaborative environments, continuously learning and
                  adapting to evolving technologies to deliver cutting-edge
                  solutions that exceed client expectations and enhance user
                  engagement.
                </Typography>

                <Button
                  startIcon={<Download fontSize="large" />}
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{
                    color: "#fff",
                    width: "150px",
                    height: "45px",
                    mt: "10px",
                  }}
                  href="https://drive.google.com/file/d/11Ahj6NdIayofMH-iGwI6xbz1vu3SXV4L/view?usp=sharing"
                  target="_blank"
                >
                  CV
                </Button>
              </Stack>
            </Box>

            {/* RIGHT SIDE */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{ width: { xs: "100%", lg: "50%" } }}
            >
              <Box
                sx={{
                  position: "relative",
                  rotate: "-23deg",
                  // overflow: "hidden",
                }}

              >
                <Box
                  sx={{ width: {xs: "590px", lg:"800px"}, height: {xs:"490px",lg: "600px"}, position: "relative" }}
                >
                  <Image
                    src="/assets/shapes/photo-wrapper.svg"
                    fill
                    alt="wrapper"
                  />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: "133px",
                    left: {xs:"204px", lg:"281px"},
                    rotate: "24deg",
                    width: {xs: "220px" , lg:"300px"},
                    height: {xs: "220px" , lg:"300px"},
                  }}
                >
                  <Image
                    src="/assets/images/anonymous.png"
                    fill
                    alt="wrapper"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
};

export default HeroSection;

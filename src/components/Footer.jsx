import { Box, Container, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))",
        py: "15px"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Stack
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            gap={2}
            sx={{
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            <Box>
              <Typography>&copy; 2023 Ahmed Ismail</Typography>
            </Box>
            <Box>
              <Typography>devo.ahmedismail@gmail.com</Typography>
              <Typography align="center">+201092071919</Typography>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Footer;

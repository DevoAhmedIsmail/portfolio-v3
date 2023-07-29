import React, { useContext, useState } from "react";
import { ColorModeContext, tokens } from "@/theme/themes";
import { DarkModeOutlined, LightModeOutlined, Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Sidebar from "./Sidebar";
import Link from "next/link";

const Navbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  //   const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const currentMode = theme.palette.mode;

  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky" sx={{ bgcolor: currentMode === "light" ? "#fcfcfc" : "#141b2d", height: theme.customHeight.navbar }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Stack
            display="flex"
            alignItems="center"
            direction="row"
            width="100%"
          >
            {/* LOGO */}
            <Box flex={1}>
              <Typography variant="h4" color="secondary">
                Ahmed Ismail
              </Typography>
            </Box>

            {/* ACTIONS */}
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                alignItems: "center",
                gap: "30px",
                color: colors.grey[100]
              }}
            >
              <IconButton onClick={colorMode.toggleColorMode}>
                {currentMode === "dark" ? (
                  <DarkModeOutlined />
                ) : (
                  <LightModeOutlined />
                )}
              </IconButton>
              
              <Link href="#work" style={{fontSize: "15px"}}>Work</Link>
              <Link href="#personal-projects" style={{fontSize: "15px"}}>Personal Projects</Link>
              <Link href="#about-me" style={{fontSize: "15px"}}>About Me</Link>
              <Link href="#skills" style={{fontSize: "15px"}}>Skills</Link>
              <Link href="#experience" style={{fontSize: "15px"}}>Experience</Link>
              {/* <Link href="#work" style={{fontSize: "15px"}}>Resume</Link> */}
            </Box>

            {/* Menu ICON */}
            <Box
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              <IconButton onClick={()=> setOpen(true)}>
                <Menu fontSize="large" />
              </IconButton>
            </Box>
          </Stack>
        </Toolbar>

        {/* SIDEBAR */}
        <Sidebar open={open} setOpen={setOpen} />
      </Container>
    </AppBar>
  );
};

export default Navbar;

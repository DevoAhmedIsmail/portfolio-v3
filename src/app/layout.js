"use client";
import "./globals.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ColorModeContext, useMode } from "../theme/themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AOSInit } from "./libs/aos";


export const metadata = {
  title: "Ahmed Ismail's Portfolio",
  description: "Ahmed Ismail's Portfolio",
};

export default function RootLayout({ children }) {
  const [theme, colorMode] = useMode();
  const title = "Ahmed Ismail's Portfolio";
  const description = "Ahmed Ismail's Portfolio"

 
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </head>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AOSInit />
          <body suppressHydrationWarning={true}>
            <Navbar />
            {children}
            <Footer />
          </body>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </html>
  );
}

"use client"

import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

const HeaderSection = ({title}) => {
    const theme = useTheme()
    const currentMode = theme.palette.mode;
  return (
    <Box position="relative"> 
        <Typography variant='h2' p="30px 25px" color={currentMode === "light" ? "#2a2d64" : "#c3c6fd"}>{title}</Typography>
        <Box sx={{
          position: "absolute",
          width: 50,
          height: 3,
          bgcolor: "#3da58a",
          bottom: 17,
          left: 28
      }}/>
    </Box>
  )
}

export default HeaderSection
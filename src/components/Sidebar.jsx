"use client"

import { ColorModeContext } from '@/theme/themes'
import styled from '@emotion/styled'
import { AssignmentInd, AutoAwesome, DarkModeOutlined, EmojiPeople, Inbox, LightModeOutlined, Mail, Stars, WorkOutline } from '@mui/icons-material'
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, useTheme } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'

const Sidebar = ({open, setOpen}) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const currentMode = theme.palette.mode;
  const [checked, setChecked] = useState(true)

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: currentMode=== 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: currentMode=== 'dark' ? '#3da58a' : '#4cceac',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: currentMode=== 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));
  
  useEffect(()=>{
    if(currentMode === 'dark') {
      setChecked(true);
    }else {
      setChecked(false);
    }
  },[currentMode])

  return (
    <Drawer
        sx={{
          width: "300px",
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: "300px",
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={()=> setOpen(false)}
      >

        <List>
            <ListItem disablePadding>
              <ListItemButton href='#work' onClick={()=> setOpen(false)}>
                <ListItemIcon>
                  <WorkOutline />
                </ListItemIcon>
                <ListItemText primary="work" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton href='#personal-projects' onClick={()=> setOpen(false)}>
                <ListItemIcon>
                  <AssignmentInd />
                </ListItemIcon>
                <ListItemText primary="Personal Projects" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton href='#about-me' onClick={()=> setOpen(false)}>
                <ListItemIcon>
                  <EmojiPeople />
                </ListItemIcon>
                <ListItemText primary="About Me" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton href='#skills' onClick={()=> setOpen(false)}>
                <ListItemIcon>
                  <AutoAwesome />
                </ListItemIcon>
                <ListItemText primary="Skills" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton href='#experience' onClick={()=> setOpen(false)}>
                <ListItemIcon>
                  <Stars />
                </ListItemIcon>
                <ListItemText primary="Experience" />
              </ListItemButton>
            </ListItem>
        </List>

        <Box sx={{
          position: 'absolute',
          bottom: 50,
          left: "50%",

        }}>
          {/* <IconButton onClick={colorMode.toggleColorMode}>
                {currentMode === "dark" ? (
                  <DarkModeOutlined />
                ) : (
                  <LightModeOutlined />
                )}
              </IconButton> */}
              <MaterialUISwitch onClick={colorMode.toggleColorMode} checked={checked} />
        </Box>

      </Drawer>
  )
}

export default Sidebar
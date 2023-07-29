import { Box, Container, Icon, Toolbar, Typography } from '@mui/material'
import React from 'react'
import HeaderSection from '../HeaderSection'
import aboutData from '@/data/aboutData'
import { KeyboardDoubleArrowRight, Star } from '@mui/icons-material'

const Aboutme = () => {
  return (
    <Box pb="50px" id="about-me">
      <Container maxWidth="xl">
          <HeaderSection title="About Me" />
        <Toolbar>
          <Box fontFamily="cursive">
          {
            aboutData.map((content, index)=>(
               <Box key={index} display="flex" alignItems="start" pb="8px" gap="5px" data-aos="fade-right"
               data-aos-offset="900"
               data-aos-duration="2000"
               data-aos-easing="ease-in-sine">
                <Icon >
                    <KeyboardDoubleArrowRight sx={{ color:"#3da58a"}} />
                </Icon>
                
                 <Typography variant='h5' className='font-tajawal' sx={{fontSize: "18px"}} >
                    {content.text}
                </Typography>
               </Box>
            ))
          }
          </Box>
        </Toolbar>
      </Container>
    </Box>
  )
}

export default Aboutme
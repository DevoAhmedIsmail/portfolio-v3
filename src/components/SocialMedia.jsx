"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { Call, Facebook, FacebookOutlined, GitHub, LinkedIn, PersonOutline, WhatsApp } from "@mui/icons-material";

const actions = [
  { icon: <FacebookOutlined />, name: "FaceBook", link: "https://www.facebook.com/profile.php?id=100011471287921" },
  { icon: <GitHub />, name: "GitHub", link: "https://github.com/DevoAhmedIsmail" },
  { icon: <LinkedIn  />, name: "LinkedIn", link: "https://www.linkedin.com/in/devo-ahmed-ismail/" },
  { icon: <WhatsApp />, name: "WhatsApp", link: "https://wa.me/201092071919" },
  { icon: <Call />, name: "Phone", link: "+201092071919" },
];

export default function ControlledOpenSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const redirectHandler = (link)=>{
    window.open(link, '_blank');
  }

  return (
    <Box
      sx={{
        height: 320,
        transform: "translateZ(0px)",
        flexGrow: 1,
        position: "fixed",
        bottom: 0,
        right: 0,
        bgColor: "#3da58a",
        zIndex:"999"
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={{ position: "absolute", bottom: 16, right: 16, "& .MuiButtonBase-root": { bgcolor: "#3da58a"} }}
        icon={<PersonOutline fontSize="large" sx={{ color: "#fff", }} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={()=> redirectHandler(action.link)}
            sx={{ bgcolor: "#3da58a", color: "#fff", "&:hover": {bgcolor: "#70d8bd"} }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

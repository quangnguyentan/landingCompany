import React from "react";
import { Box, Divider, Typography } from "@mui/material";
function Footer() {
  return (
    <Box  >
      <Box sx={{  bgcolor: "#000000", mx: { md: 0, xl: 0, xs: 1 }, display : 'flex', height : '50px' , color : 'white', alignItems : 'center', justifyContent : 'center', gap : 4 }}>
        <Typography sx={{ fontSize : {xl : '20px', md : '20px', xs : '12px'},  }}>Terms of Service</Typography>
        <Typography sx={{ fontSize : {xl : '20px', md : '20px', xs : '12px'},  }}>DMCA Policy</Typography>
        <Typography sx={{ fontSize : {xl : '20px', md : '20px', xs : '12px'},  }}>Contact us</Typography>
      </Box>
      
    </Box>
  );
}

export default Footer;

import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import path from "../../utils/path";
import "../../index.css";
import Footer from "../../components/Footer/Footer";
const Public = () => {
  return (
    <Box sx={{ position : 'relative' }}>
      <Box sx={{ position: "sticky", top: 0, zIndex : '999', width : '100%' }}>
        <Header />
      </Box>
      <Box sx={{width : '100%', height : 'fit-content', zIndex : 1 }}>
        <Outlet />
      </Box>
      <Box sx={{ width : '100%', height : '370px', bgcolor : 'rgb(33, 32, 107)' }}>
        <Footer/>
      </Box>
    </Box>
  );
};

export default Public;

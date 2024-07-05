import { Button, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import path from "../../utils/path";
import logo from "../../assets/logo.png";
import "../../index.css";

function Header() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "105px",
        display: "flex",
        px: { xl: 8, md: 8, xs: 1 },
        bgcolor: "#F4F4FE",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "start", md: "center", xl: "center" },
          flex: { xs: 6, md: 4, xl: 4 },
        }}
      >
        <Link to={`${path.HOME}`}>
          <Box
            sx={{
              width: { xs: "140px", xl: "220px", md: '"220px"' },
              height: { xs: "55px", md: "55px", xl: "55px" },
            }}
          >
            <img
              src={logo}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="logo"
            />
          </Box>
        </Link>
      </Box>
      <Box sx={{ flex: { xs: 0, md: 2, xl: 4 } }}></Box>
      <Box
        sx={{
          flex: { md: 6, xl: 4, xs: 0 },
          display: { md: "flex", xl: "flex", xs: "none" },
          alignItems: "center",
          gap: 4,
        }}
      >
        <Typography sx={{ fontFamily: "inherit", fontSize: "14px" }}>
          Trang chủ
        </Typography>
        <Typography sx={{ fontFamily: "inherit", fontSize: "14px" }}>
          About Us
        </Typography>
        <Typography sx={{ fontFamily: "inherit", fontSize: "14px" }}>
          Portfolio
        </Typography>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/${path.CONTACT}`}
        >
          <Typography sx={{ fontFamily: "inherit", fontSize: "14px" }}>
            Contact Us
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}

export default Header;

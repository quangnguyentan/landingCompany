import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import logo from "../../assets/logo.png";
import face from "../../assets/face.svg";
import you from "../../assets/you.svg";
import insta from "../../assets/insta.svg";
import zalo from "../../assets/zalo.svg";
import tiktok from "../../assets/tiktok.svg";
import letter from "../../assets/letter.svg";
import phone from "../../assets/phone.svg";

import "../../index.css";
function Footer() {
  return (
    <Box
      sx={{
        mx: { md: 0, xl: 0, xs: 1 },
        display: "flex",
        flexDirection : {md : 'row', xl : 'row', xs : 'column'},
        color: "white",
        alignItems: "center",
        width: {md : "80%", xl : "70%", xs : '100%'},
        px : {md : 2, xs : 2, xl : 0},
        height: "100%",
        mx: "auto",
        gap: 4,
      }}
    >
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography
          sx={{
            fontSize: {
              xl: "15px",
              md: "15px",
              xs: "12px",
              fontFamily: "inherit",
            },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Box
            sx={{
              width: {md : "50px", xl : "50px", xs: '30px'},
              height: {md : "50px", xl : "50px", xs: '30px'},
              bgcolor: "rgb(65, 89, 147)",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: {md : "25px", xl : '25px', xs : "20px"},
                height: {md : "25px", xl : '25px', xs : "20px"},
              }}
            >
              <img
                src={face}
                style={{ width: "100%", height: "100%", fill: "red" }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              width: {md : "50px", xl : "50px", xs: '30px'},
              height: {md : "50px", xl : "50px", xs: '30px'},
              bgcolor: "rgb(189, 52, 43)",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: {md : "25px", xl : '25px', xs : "20px"},
                height: {md : "25px", xl : '25px', xs : "20px"},
              }}
            >
              <img
                src={you}
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              width: {md : "50px", xl : "50px", xs: '30px'},
              height: {md : "50px", xl : "50px", xs: '30px'},
              bgcolor: "rgb(38, 38, 38)",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: {md : "25px", xl : '25px', xs : "20px"},
                height: {md : "25px", xl : '25px', xs : "20px"},
              }}
            >
              <img
                src={tiktok}
                style={{ width: "100%", height: "100%", fill: "red" }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              width: {md : "50px", xl : "50px", xs: '30px'},
              height: {md : "50px", xl : "50px", xs: '30px'},
              bgcolor: "rgb(217, 99, 87)",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: {md : "25px", xl : '25px', xs : "20px"},
                height: {md : "25px", xl : '25px', xs : "20px"},
              }}
            >
              <img
                src={insta}
                style={{ width: "100%", height: "100%", fill: "red" }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              width: {md : "50px", xl : "50px", xs: '30px'},
              height: {md : "50px", xl : "50px", xs: '30px'},
              bgcolor: "rgb(45, 117, 246)",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: {md : "25px", xl : '25px', xs : "20px"},
                height: {md : "25px", xl : '25px', xs : "20px"},
              }}
            >
              <img
                src={zalo}
                style={{ width: "100%", height: "100%", fill: "red" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: {
              fontFamily: "inherit",
              xl: "18px",
              md: "20px",
              xs: "15px",
              fontWeight: 700,
            },
          }}
        >
          Menu
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography
            sx={{
              fontSize: {
                fontFamily: "inherit",
                xl: "15px",
                md: "15px",
                xs: "12px",
              },
            }}
          >
            Home
          </Typography>
          <Typography
            sx={{
              fontSize: {
                fontFamily: "inherit",
                xl: "15px",
                md: "15px",
                xs: "12px",
              },
            }}
          >
            About Us
          </Typography>
          <Typography
            sx={{
              fontSize: {
                fontFamily: "inherit",
                xl: "15px",
                md: "15px",
                xs: "12px",
              },
            }}
          >
            Portfolio
          </Typography>
          <Typography
            sx={{
              fontSize: {
                fontFamily: "inherit",
                xl: "15px",
                md: "15px",
                xs: "12px",
              },
            }}
          >
            Contact
          </Typography>
        </Box>
      </Box>

      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography
          sx={{
            fontFamily: "inherit",
            xl: "18px",
            md: "20px",
            xs: "15px",
            fontWeight: 700,
          }}
        >
          Contact Us
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap : 1
          }}
        >
          <Box
            sx={{
              width: "25px",
              height: "25px",
            }}
          >
            <img src={letter} style={{ width: "100%", height: "100%" }} />
          </Box>
          <Typography>viral@gmail.com</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <Box
            sx={{
              width: "25px",
              height: "25px",
            }}
          >
            <img src={phone} style={{ width: "100%", height: "100%" }} />
          </Box>
          <Typography>viral@gmail.com</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;

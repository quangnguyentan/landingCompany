import React from "react";
import nen2 from "../../assets/nen2.webp";
import nen1 from "../../assets/nen1.png";
import nen5 from "../../assets/nen5.png";

import {
  Box,
  Button,
  Chip,
  Divider,
  TextField,
  Typography,
} from "@mui/material";

const Contact = () => {
  const styles = {
    container: {
      backgroundImage: `url('${nen1}')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundColor: "#F4F4FE",
      backgroundPosition: "left center",
      position: "relative",
      zIndex: 99,
    },
  };
  return (
    <>
      <Box
        style={styles.container}
        sx={{
          height: "1000px",
          bgcolor: "#F4F4FE",
          width: "100%",
        }}
      >
        <Box
          sx={{
            bgcolor: "#F4F4FE",
            position: "absolute",
            width: "fit-content",
            height: "fit-content",
            top: { md: "30%", xl: "35%" },
            right: { md: "0", xl: "0" },
            display: { xs: "none", md: "flex", xl: "flex" },
            zIndex: -9999,
            bgcolor: "#F4F4FE",
          }}
        >
          <img
            src={nen5}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            top: "40%",
            right: "0",
            width: "50%",
            zIndex: 2,
          }}
        >
          <Typography
            className="sign"
            sx={{
              fontFamily: "inherit",
              fontSize: "40px",
              fontWeight: 900,
              color: "rgb(22, 38, 198)",
            }}
          >
            Hi! This is Viral Media Company
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            top: "30%",
            left: "5%",
            width: "50%",
            zIndex: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: "50px",
              fontWeight: 900,
              color: "rgb(33, 32, 107)",
            }}
          >
            Get in touch with us
          </Typography>
          <form action="https://formsubmit.co/tanquanga6k10@gmail.com" method="POST" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Box sx={{ width: "60%", height: "80px" }}>
              <label htmlFor="name">Name</label>
              <input
                required
                type="text"
                name="name"
                style={{
                  width: "100%",
                  height: "70%",
                  backgroundColor: "transparent",
                  fontSize: "18px",
                  border: "1px solid black",
                }}
              />
            </Box>
            <Box sx={{ width: "60%", height: "80px" }}>
              <label htmlFor="phone">Phone</label>
              <input
                required
                name="phone"
                type="text"
                style={{
                  width: "100%",
                  height: "70%",
                  backgroundColor: "transparent",
                  fontSize: "18px",
                  border: "1px solid black",
                }}
              />
            </Box>
            <Box sx={{ width: "60%", height: "80px" }}>
              <label htmlFor="email">Email</label>
              <input
                required
                type="email"
                name="email"
                style={{
                  width: "100%",
                  height: "70%",
                  backgroundColor: "transparent",
                  fontSize: "18px",
                  border: "1px solid black",
                }}
              />
            </Box>
            <Box sx={{ width: "60%", height: "160px" }}>
              <label htmlFor="email">Messages</label>
              <textarea
                required
                rows="4"
                cols="50"
                style={{
                  width: "100%",
                  height: "90%",
                  backgroundColor: "transparent",
                  fontSize: "18px",
                }}
                name="message"
                placeholder="message"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                width: "60%",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: "rgba(22,38,198,1)",
                  fontWeight: 700,
                  color: "rgba(33,32,107,1)",
                  textTransform: "capitalize",
                  py: 1,
                  px: 4,
                  color: "white",
                }}
                type="submit"
              >
                Send
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Contact;

import React from "react";
import { Box, Button, Chip, Divider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import nen1 from "../../assets/nen1.png";
import nen2 from "../../assets/nen2.webp";
import nen3 from "../../assets/nen3.webp";
import nen4 from "../../assets/nen4.webp";
import image1 from "../../assets/image1.webp";
import image2 from "../../assets/image2.webp";
import image3 from "../../assets/image3.webp";
import image4 from "../../assets/image4.webp";
import image5 from "../../assets/image5.webp";
import image6 from "../../assets/image6.webp";
import image7 from "../../assets/image7.webp";
import image8 from "../../assets/image8.webp";
import image9 from "../../assets/image9.webp";
import image10 from "../../assets/image10.webp";

import { Link } from "react-router-dom";
const styles = {
  container: {
    backgroundImage: `url('${nen1}')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#F4F4FE",
    backgroundPosition: "left center",
  },
};
// const useStyles = makeStyles((theme) => ({
//   "@media only screen and  (max-width: 600px)": {
//     container: {
//       backgroundImage: `linear-gradient(rgba(34, 34, 34, 0.8), rgba(34, 34, 34, 0.8)), url('${nen_chu}')`,
//       backgroundRepeat: "no-repeat",
//       backgroundSize: "800% 20%",
//       backgroundPosition: "center",
//       filter: "grayscale(100%)",
//     },
//   },
//   "@media only screen and (min-width: 600px) ": {
//     container: {
//       backgroundImage: `linear-gradient(rgba(34, 34, 34, 0.8), rgba(34, 34, 34, 0.8)), url('${nen_chu}')`,
//       backgroundRepeat: "no-repeat",
//       backgroundSize: "700% 100%",
//       backgroundPosition: "center",
//       filter: "grayscale(100%)",
//     },
//   },
// }));
const Home = () => {
  // const css = useStyles();
  return (
    <>
      <Box
        style={styles.container}
        sx={{
          height: "1000px",
          bgcolor: "#F4F4FE",
          width: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: { md: "443px", xl: "643px" },
            height: { md: "443px", xl: "643px" },
            top: { md: "30%", xl: "15%" },
            right: { md: "0", xl: "10%" },
            display: { xs: "none", md: "flex", xl: "flex" },
          }}
        >
          <img
            src={nen2}
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
            left: "5%",
            width: "50%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: "30px",
              fontWeight: 700,
              color: "rgb(22, 38, 198)",
            }}
          >
            Welcome
          </Typography>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: "50px",
              fontWeight: 900,
              color: "rgb(33, 32, 107)",
            }}
          >
            We're Viral Media
          </Typography>
          <Typography sx={{ fontFamily: "inherit", fontSize: "18px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
            >
              Contact Us
            </Button>
            <Button
              variant="outlined"
              sx={{
                fontWeight: 700,
                color: "rgba(33,32,107,1)",
                textTransform: "capitalize",
                py: 1,
                px: 2,
              }}
            >
              Browse Portfolio
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            bottom: "-8%",
            width: "100%",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box sx={{ flex: 2 }}></Box>
          <Box
            sx={{
              borderRadius: "10px",
              boxShadow: 3,
              height: "160px",
              bgcolor: "rgba(255,255,255,1)",
              flex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "60px",
                fontWeight: 700,
                fontFamily: "inherit",
                color: "rgb(33, 32, 107)",
              }}
            >
              200+
            </Typography>
            <Typography
              sx={{ fontSize: "15px", fontWeight: 400, fontFamily: "inherit" }}
            >
              Projects Completed
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "10px",
              boxShadow: 3,
              height: "160px",
              bgcolor: "rgba(255,255,255,1)",
              flex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "60px",
                fontWeight: 700,
                fontFamily: "inherit",
                color: "rgb(33, 32, 107)",
              }}
            >
              10+
            </Typography>
            <Typography
              sx={{ fontSize: "15px", fontWeight: 400, fontFamily: "inherit" }}
            >
              Design Awards
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "10px",
              boxShadow: 3,
              height: "160px",
              bgcolor: "rgba(255,255,255,1)",
              flex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "60px",
                fontWeight: 700,
                fontFamily: "inherit",
                color: "rgb(33, 32, 107)",
              }}
            >
              5+
            </Typography>
            <Typography
              sx={{ fontSize: "15px", fontWeight: 400, fontFamily: "inherit" }}
            >
              Years of Experience
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "10px",
              boxShadow: 3,
              height: "160px",
              bgcolor: "rgba(255,255,255,1)",
              flex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "60px",
                fontWeight: 700,
                fontFamily: "inherit",
                color: "rgb(33, 32, 107)",
              }}
            >
              200+
            </Typography>
            <Typography
              sx={{ fontSize: "15px", fontWeight: 400, fontFamily: "inherit" }}
            >
              Clients Satisfied
            </Typography>
          </Box>
          <Box sx={{ flex: 2 }}></Box>
        </Box>
      </Box>
      <Box sx={{ position: "relative", height: "100vh" }}>
        <Box
          sx={{
            position: "absolute",
            top: "25%",
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "50px",
              fontFamily: "inherit",
              fontWeight: 700,
              color: "rgb(33, 32, 107)",
            }}
          >
            Our Services
          </Typography>
          <Typography sx={{ fontFamily: "inherit", fontSize: "14px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            top: "45%",
            width: "100%",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box sx={{ flex: 2 }}></Box>
          <Box
            sx={{
              borderRadius: "10px",
              boxShadow: 3,
              height: "340px",
              bgcolor: "rgba(255,255,255,1)",
              flex: 2,
              display: "flex",
              flexDirection: "column",
              pt: 4,
            }}
          >
            <Box sx={{ px: 6 }}>
              <Box sx={{ width: "102px", height: "94px" }}>
                <img
                  src={image1}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: 700,
                  color: "rgb(33, 32, 107)",
                }}
              >
                3D Modeling
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 400,
                fontFamily: "inherit",
                px: 6,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "10px",
              boxShadow: 3,
              height: "340px",
              bgcolor: "rgba(255,255,255,1)",
              flex: 2,
              display: "flex",
              flexDirection: "column",
              pt: 4,
            }}
          >
            <Box sx={{ px: 6 }}>
              <Box sx={{ width: "102px", height: "94px" }}>
                <img
                  src={image2}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: 700,
                  color: "rgb(33, 32, 107)",
                }}
              >
                3D Rendering
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 400,
                fontFamily: "inherit",
                px: 6,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "10px",
              boxShadow: 3,
              height: "340px",
              bgcolor: "rgba(255,255,255,1)",
              flex: 2,
              display: "flex",
              flexDirection: "column",
              pt: 4,
            }}
          >
            <Box sx={{ px: 6 }}>
              <Box sx={{ width: "102px", height: "94px" }}>
                <img
                  src={image3}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: 700,
                  color: "rgb(33, 32, 107)",
                }}
              >
                3D Modeling
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 400,
                fontFamily: "inherit",
                px: 6,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "10px",
              boxShadow: 3,
              height: "340px",
              bgcolor: "rgba(255,255,255,1)",
              flex: 2,
              display: "flex",
              flexDirection: "column",
              pt: 4,
            }}
          >
            <Box sx={{ px: 6 }}>
              <Box sx={{ width: "102px", height: "94px" }}>
                <img
                  src={image4}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: 700,
                  color: "rgb(33, 32, 107)",
                }}
              >
                3D Rendering
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 400,
                fontFamily: "inherit",
                px: 6,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
          </Box>
          <Box sx={{ flex: 2 }}></Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "10%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              fontWeight: 700,
              color: "rgba(33,32,107,1)",
              textTransform: "capitalize",
              fontSize: "18px",
              py: 1,
              px: 4,
              borderRadius: "10px",
            }}
            Button
          >
            Browse Portfolio
          </Button>
        </Box>
      </Box>
      <Box sx={{ position: "relative", height: "160vh" }}>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            px: 4,
            alignItems: "center",
            gap: 12,
            bgcolor: "#FEF9F5",
            py: 8,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <img
              src={nen3}
              alt="nen"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
          <Box
            sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Typography
              sx={{
                fontSize: "50px",
                fontWeight: 700,
                color: "rgb(33, 32, 107)",
              }}
            >
              About Us
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "rgba(22,38,198,1)",
                  fontWeight: 700,
                  color: "rgba(33,32,107,1)",
                  textTransform: "capitalize",
                  py: 1,
                  px: 6,
                  color: "white",
                }}
              >
                About Us
              </Button>
              <Button
                variant="outlined"
                sx={{
                  fontWeight: 700,
                  color: "rgba(33,32,107,1)",
                  textTransform: "capitalize",
                  py: 1,
                  px: 6,
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            top: "50%",
          }}
        >
          <Box sx={{ flex: 1, display: "flex", justifyContent: "end" }}>
            <Box sx={{ width: "60%" }}>
              <Typography
                sx={{
                  fontSize: "50px",
                  fontWeight: 600,
                  color: "rgb(33, 32, 107)",
                }}
              >
                Our Porfolio
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
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
                borderRadius: "8px",
              }}
            >
              Browse Portfolio
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            bottom: "5%",
            width: "100%",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box sx={{ flex: 2 }}></Box>
          <Box
            sx={{
              borderRadius: "10px",
              boxShadow: 3,
              height: "420px",
              bgcolor: "rgba(255,255,255,1)",
              flex: 2,
              display: "flex",
              flexDirection: "column",
              pt: 4,
            }}
          >
            <Box sx={{ px: 6 }}>
              <Box sx={{ width: "fit-content", height: "fit-content" }}>
                <img
                  src={image5}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: 700,
                  color: "rgb(33, 32, 107)",
                }}
              >
                Illustrations for Web Design
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 400,
                fontFamily: "inherit",
                px: 6,
              }}
            >
              Discover More
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "10px",
              boxShadow: 3,
              height: "420px",
              bgcolor: "rgba(255,255,255,1)",
              flex: 2,
              display: "flex",
              flexDirection: "column",
              pt: 4,
            }}
          >
            <Box sx={{ px: 6 }}>
              <Box sx={{ width: "fit-content", height: "fit-content" }}>
                <img
                  src={image6}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: 700,
                  color: "rgb(33, 32, 107)",
                }}
              >
                Motion Graphics for Video
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 400,
                fontFamily: "inherit",
                px: 6,
              }}
            >
              Discover More
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "10px",
              boxShadow: 3,
              height: "420px",
              bgcolor: "rgba(255,255,255,1)",
              flex: 2,
              display: "flex",
              flexDirection: "column",
              pt: 4,
            }}
          >
            <Box sx={{ px: 6 }}>
              <Box sx={{ width: "fit-content", height: "fit-content" }}>
                <img
                  src={image7}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: 700,
                  color: "rgb(33, 32, 107)",
                }}
              >
                Character 3D for Brand
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 400,
                fontFamily: "inherit",
                px: 6,
              }}
            >
              Discover More
            </Typography>
          </Box>

          <Box sx={{ flex: 2 }}></Box>
        </Box>
      </Box>
      <Box sx={{ position: "relative", height: "150vh", bgcolor: "#FEF9F5" }}>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            px: 4,
            alignItems: "center",
            gap: 4,
            bgcolor: "rgb(33, 32, 107)",
            py: 8,
          }}
        >
          <Box sx={{ flex: 0.5 }}></Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "50px",
                  fontWeight: 700,
                  color: "white",
                }}
              >
                Have a project?
              </Typography>
              <Typography
                sx={{
                  fontSize: "50px",
                  fontWeight: 700,
                  color: "white",
                }}
              >
                Get in touch today!
              </Typography>
            </Box>
            <Typography sx={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "rgba(22,38,198,1)",
                  fontWeight: 700,
                  color: "rgba(33,32,107,1)",
                  textTransform: "capitalize",
                  py: 1,
                  px: 6,
                  color: "white",
                }}
              >
                About Us
              </Button>
              <Button
                variant="outlined"
                sx={{
                  fontWeight: 700,
                  color: "white",
                  textTransform: "capitalize",
                  py: 1,
                  px: 6,
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
          <Box sx={{ flex: 1 }}>
            <img
              src={nen4}
              alt="nen"
              style={{
                width: "fit-content",
                height: "fit-content",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box sx={{ flex: 0.5 }}></Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "40%",
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "50px",
              fontFamily: "inherit",
              fontWeight: 700,
              color: "rgb(33, 32, 107)",
            }}
          >
            Our Process
          </Typography>
          <Typography sx={{ fontFamily: "inherit", fontSize: "14px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            bottom: "10%",
            width: "100%",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box sx={{ flex: 2 }}></Box>
          <Box
            sx={{
              borderRadius: "10px",
              boxShadow: 3,
              height: "340px",
              bgcolor: "rgba(255,255,255,1)",
              flex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: 4,
            }}
          >
            <Box sx={{ width: "102px", height: "94px" }}>
              <img
                src={image8}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: 700,
                color: "rgb(33, 32, 107)",
              }}
            >
              3D Modeling
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 400,
                fontFamily: "inherit",
                px: 5,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "10px",
              boxShadow: 3,
              height: "340px",
              bgcolor: "rgba(255,255,255,1)",
              flex: 2,
              display: "flex",
              flexDirection: "column",
              pt: 4,
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "102px", height: "94px" }}>
              <img
                src={image9}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: 700,
                color: "rgb(33, 32, 107)",
              }}
            >
              3D Rendering
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 400,
                fontFamily: "inherit",
                px: 5,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "10px",
              boxShadow: 3,
              height: "340px",
              bgcolor: "rgba(255,255,255,1)",
              flex: 2,
              display: "flex",
              flexDirection: "column",
              pt: 4,
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "102px", height: "94px" }}>
              <img
                src={image10}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: 700,
                color: "rgb(33, 32, 107)",
              }}
            >
              3D Modeling
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 400,
                fontFamily: "inherit",
                px: 5,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
          </Box>

          <Box sx={{ flex: 2 }}></Box>
        </Box>
      </Box>
      
    </>
  );
};

export default Home;

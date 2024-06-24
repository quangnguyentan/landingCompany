import React from "react";
import { Box, Button, Chip, Divider, Typography } from "@mui/material";
import nen from "../../assets/nen.jpg";
import logo from "../../assets/logo.webp";
import khung1 from "../../assets/khung1.jpg";
import khung2 from "../../assets/khung2.jpg";
import khung3 from "../../assets/khung3.jpg";
import khung4 from "../../assets/khung4.webp";
import ro from "../../assets/ro.png";
import player1 from "../../assets/player1.png";
import player2 from "../../assets/player2.png";
import nen1 from "../../assets/nen1.webp";
import nen_chu from "../../assets/nen_chu.webp";
import { makeStyles } from "@mui/styles";

import logo_footer from "../../assets/logo_footer.png";
import { Link } from "react-router-dom";
const styles = {
  container: {
    backgroundImage: `linear-gradient(rgba(34, 34, 34, 0.8), rgba(34, 34, 34, 0.8)), url('${nen1}')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    filter: "grayscale(100%)",
  },
};
const useStyles = makeStyles((theme) => ({
  "@media only screen and  (max-width: 600px)": {
    container: {
      backgroundImage: `linear-gradient(rgba(34, 34, 34, 0.8), rgba(34, 34, 34, 0.8)), url('${nen_chu}')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "800% 20%",
      backgroundPosition: "center",
      filter: "grayscale(100%)",
    },
  },
  "@media only screen and (min-width: 600px) ": {
    container: {
      backgroundImage: `linear-gradient(rgba(34, 34, 34, 0.8), rgba(34, 34, 34, 0.8)), url('${nen_chu}')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "700% 100%",
      backgroundPosition: "center",
      filter: "grayscale(100%)",
    },
  },
}));
const Home = () => {
  const css = useStyles();
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { md: "70vh", xl: "70vh", xs: "20vh", sm: "40vh" },
        }}
      >
        <img src={nen} alt="nen" style={{ width: "100%", height: "100%" }} />
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            width: { lg: "734px", md: "734px", xl: "734px", xs: "fit-content" },
            heigth: { lg: "281px", md: "281px", xl: "281px", xs: "133px" },
            left: { lg: "25%", xl: "30%", md: "15%", xs: "0", sm: "0" },
          }}
        >
          <img src={logo} alt="nen" style={{ width: "100%", height: "100%" }} />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "10px",
            width: { xl: "335px", md: "321px", lg: "335px" },
            left: { xl: "20%", md: "20px", lg: "15%" },
            height: "270px",
            bgcolor: "#561313",
            display: { md: "flex", xl: "flex", xs: "none" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "center",
            }}
          >
            <img
              src={khung1}
              alt="nen"
              style={{
                width: "315px",
                height: "177px",
                paddingLeft: "20px",
                paddingTop: "10px",
              }}
            />
            <Link>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "50px",
                  fontWeight: 600,
                  outline: "1px solid white",
                }}
              >
                LINK XEM BÓNG ĐÁ
              </Button>
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "10px",
            width: { xl: "335px", md: "321px", lg: "335px" },
            left: { xl: "40%", md: "34.5%", lg: "40%" },
            height: "270px",
            bgcolor: "#561313",
            display: { md: "flex", xl: "flex", xs: "none" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "center",
            }}
          >
            <img
              src={khung2}
              alt="nen"
              style={{
                width: "315px",
                height: "177px",
                paddingLeft: "20px",
                paddingTop: "10px",
              }}
            />
            <Link>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "50px",
                  fontWeight: 600,
                  outline: "1px solid white",
                }}
              >
                SOI KÈO BÓNG ĐÁ
              </Button>
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "10px",
            width: { xl: "335px", md: "321px", lg: "335px" },
            right: { md: "20px" },
            left: { xl: "60%", lg: "65%" },
            height: "270px",
            bgcolor: "#561313",
            display: { md: "flex", xl: "flex", xs: "none" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "center",
            }}
          >
            <img
              src={khung3}
              alt="nen"
              style={{
                width: "315px",
                height: "177px",
                paddingLeft: "20px",
                paddingTop: "10px",
              }}
            />
            <Link>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "50px",
                  fontWeight: 600,
                  outline: "1px solid white",
                }}
              >
                TRẬN HOT HÔM NAY
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          p: 2,
          bgcolor: "#561313",
          height: { sm: "502px" },
          display: { md: "none", xl: "none", xs: "flex" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Box sx={{ pl: 0, pt: 0, width: "100%", height: "100%" }}>
            <img
              src={khung1}
              alt="nen"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Link>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50px",
                fontWeight: 600,
                outline: "1px solid white",
                fontSize: { xs: "12px", sm: "15px" },
              }}
            >
              LINK XEM BÓNG ĐÁ
            </Button>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xl: "500px", md: "500px", xs: "500px" },
        }}
      >
        <img
          src={khung4}
          alt="nen"
          style={{
            width: "100%",
            height: "100%",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: 0,
            width: "302px",
            height: "500px",
            left: { xl: "20%", md: "5%", lg: "15%" },
            display: { xs: "none", xl: "flex", md: "flex", sm: "flex" },
          }}
        >
          <img src={ro} style={{ width: "100%", height: "100%" }} />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            width: "270px",
            height: "429px",
            left: { xl: "16.5%", md: 0, lg: "13.5%" },
            display: { xs: "none", xl: "flex", md: "flex", sm: "flex" },
          }}
        >
          <img src={player1} style={{ width: "100%", height: "100%" }} />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "24%",
            width: "270px",
            height: "356px",
            left: { xl: "25%", md: "15%", lg: "25%" },
            display: { xs: "none", xl: "flex", md: "flex", sm: "flex" },
          }}
        >
          <img src={player2} style={{ width: "100%", height: "100%" }} />
        </Box>
        <Box
          sx={{
            width: { xl: "648px", md: "580px", sm: "480px" },
            height: { xl: "343px" },
            position: "absolute",
            top: { xl: "70px", xs: "70px", md: "70px", sm: "40px" },
            right: { xl: "20%", md: 0, sm: 0, lg: "10%" },
            display: { xl: "flex", md: "flex", xs: "flex", md: "flex" },
            flexDirection: {
              xl: "column",
              md: "column",
              xs: "column",
              sm: "column",
            },
            gap: { xl: 2, md: 2, xs: 1, sm: 2 },
          }}
        >
          <Box
            sx={{
              "&::before": {
                content: '""',
                position: "absolute",
                top: { xl: "50px", md: "30px" },
                left: "3%",
                width: { xl: "23%", md: "28%", xs: 0 },
                borderBottom: "1px solid gray",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                top: { xl: "50px", md: "30px" },
                right: "3%",
                width: { xl: "23%", md: "28%", xs: 0 },
                borderBottom: "1px solid gray",
              },
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: { xl: "60px", md: "40px", xs: "40px" },
                color: "white",
                fontWeight: 600,
              }}
            >
              SỢ VỢ TV
            </Typography>
          </Box>
          <Typography
            sx={{
              px: 6,
              color: "white",
              fontWeight: 600,
              fontSize: { xl: "25px", md: "25px", xs: "17px", sm: "20px" },
              wordBreak: "break-word",
              textAlign: "center",
            }}
          >
            TRANG XEM TRỰC TIẾP BÓNG ĐÁ HÔM NAY
          </Typography>
          <Box
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              gap: { xl: 1, md: 2, xs: 1, sm: 1 },
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { md: "14px", xl: "16px", xs: "13px", sm: "16px" },
                px: 2.5,
              }}
            >
              Tại sao nên chọn Sợ Vợ TV để xem trực tiếp bóng đá?
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: { md: 2, xl: 2, xs: 1 },
                px: { xs: 1 },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "14px", xl: "16px", xs: "13px", sm: "16px" },
                }}
              >
                •
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "14px", xl: "16px", xs: "13px", sm: "16px" },
                }}
              >
                Trực tiếp miễn phí: Không mất phí, không cần đăng ký, chỉ cần
                truy cập và thưởng thức.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                gap: { md: 2, xl: 2, xs: 1 },
                px: { xs: 1 },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "14px", xl: "16px", xs: "13px", sm: "16px" },
                }}
              >
                •
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "14px", xl: "16px", xs: "13px", sm: "16px" },
                }}
              >
                Chất lượng cao: Hình ảnh rõ nét, âm thanh sống động, không giật
                lag.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                gap: { md: 2, xl: 2, xs: 1 },
                px: { xs: 1 },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "14px", xl: "16px", xs: "13px", sm: "16px" },
                }}
              >
                •
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "14px", xl: "16px", xs: "13px", sm: "16px" },
                }}
              >
                Đa dạng giải đấu: Từ các giải VĐQG đến các cúp châu lục, quốc
                tế.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                gap: { md: 2, xl: 2, xs: 1 },
                px: { xs: 1 },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "14px", xl: "16px", xs: "13px", sm: "16px" },
                }}
              >
                •
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "14px", xl: "16px", xs: "13px", sm: "16px" },
                }}
              >
                Cập nhật liên tục: Lịch thi đấu, kết quả, tin tức mới nhất.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                gap: { md: 2, xl: 2, xs: 1 },
                px: { xs: 1 },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "14px", xl: "16px", xs: "13px", sm: "16px" },
                }}
              >
                •
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "14px", xl: "16px", xs: "13px", sm: "16px" },
                }}
              >
                Giao diện thân thiện: Dễ dàng tìm kiếm và theo dõi trận đấu yêu
                thích.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
      style={styles.container}
        sx={{
          width: "100%",
          height: 'fit-content',
          py : { md : 4, xl : 4, xs : 0},
          display: 'flex', 
          alignItems : 'center',
          justifyContent : 'center'
        }}
      >
        <Box
          className={css.container}
          sx={{
            width: { xl: "1050px", md: "100%", xs: "100%", sm: "100%" },
            height: "fit-content",
            top: "30px",
            borderRadius: "10px",
            p: 4,
            left: { xl: "20%", md: "0", xs: 0 },
            color: "white",
            display: "flex",
            flexDirection: "column",
            bgcolor: "rgba(34, 34, 34, 0.8)",
            gap: 3,
          }}
        >
          <Typography sx={{ fontSize: "18px" }}>
            Sợ Vợ TV là một nền tảng trực tuyến đầy hứa hẹn dành cho những người
            đam mê bóng đá. Với các tính năng nổi bật như xem trực tiếp bóng đá
            hôm nay, soi kèo nhà cái chuẩn xác và miễn phí, Sợ Vợ TV mang đến
            cho người dùng trải nghiệm tuyệt vời nhất trong thế giới bóng đá.
            Hãy cùng khám phá những điều thú vị mà nền tảng này mang lại nhé!
          </Typography>
          <Typography sx={{ fontSize: "30px" }}>
            Giới thiệu sơ lược về Sợ Vợ TV
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Sợ Vợ TV là một điểm đến lý tưởng cho những ai muốn xem trực tiếp
            bóng đá và soi kèo từ các nhà cái uy tín. Nền tảng này nổi bật với
            việc cung cấp các trận đấu miễn phí, đi kèm với bình luận tiếng Việt
            sống động và đa dạng giải đấu từ khắp nơi trên thế giới.
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Với chất lượng phát sóng tuyệt vời, giao diện thân thiện, và một
            cộng đồng yêu bóng đá đông đảo, Sợ Vợ TV chính là sự lựa chọn hoàn
            hảo cho những ai muốn tận hưởng niềm đam mê một cách tiện lợi và
            hiệu quả nhất. Nền tảng này mang đến cho người dùng một trải nghiệm
            xem bóng đá trọn vẹn và đầy hứng khởi.
          </Typography>
          <Typography sx={{ fontSize: "30px" }}>
            Các tính năng nổi bật tại Sợ Vợ
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Sợ Vợ TV tự hào mang đến cho người dùng một loạt các tính năng hấp
            dẫn, giúp nâng cao trải nghiệm xem bóng đá và soi kèo. Đầu tiên phải
            kể đến tính năng trực tiếp bóng đá hôm nay, nơi bạn có thể theo dõi
            các trận đấu nóng hổi nhất từ khắp nơi trên thế giới, kèm theo phân
            tích soi kèo bóng đá chuyên sâu.
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Tiếp theo, Sợ Vợ TV cung cấp lịch thi đấu đầy đủ và chi tiết, cho
            phép bạn xem trước lịch thi đấu và soi kèo sớm cho các giải đấu lớn.
            Điều này giúp bạn lên kế hoạch theo dõi và đặt cược một cách hiệu
            quả, không bỏ lỡ bất kỳ trận đấu quan trọng nào.
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Chất lượng xem trực tiếp trên Sợ Vợ TV cũng là một điểm cộng lớn.
            Với hình ảnh sắc nét, âm thanh sống động, và đường truyền ổn định,
            không bị giật lag, nền tảng này đảm bảo mang đến cho bạn trải nghiệm
            xem bóng đá hoàn hảo nhất. Bạn sẽ có cảm giác như đang ngồi trực
            tiếp trên khán đài và hòa mình vào không khí sôi động của trận đấu.
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Sợ Vợ TV còn cung cấp nhiều link xem dự phòng, đảm bảo việc xem trực
            tiếp luôn diễn ra mượt mà, không bị gián đoạn. Bất kể tốc độ mạng
            của bạn như thế nào, Sợ Vợ TV cũng có thể đáp ứng và mang đến chất
            lượng xem tốt nhất.
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Giao diện của Sợ Vợ TV được thiết kế thân thiện và dễ sử dụng, giúp
            người dùng dễ dàng tìm kiếm trận đấu, soi kèo và đặt cược chỉ trong
            vài cú nhấp chuột. Bạn sẽ không mất quá nhiều thời gian để làm quen
            với nền tảng này và có thể bắt đầu tận hưởng niềm vui bóng đá ngay
            lập tức.
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Giao diện của Sợ Vợ TV được thiết kế thân thiện và dễ sử dụng, giúp
            người dùng dễ dàng tìm kiếm trận đấu, soi kèo và đặt cược chỉ trong
            vài cú nhấp chuột. Bạn sẽ không mất quá nhiều thời gian để làm quen
            với nền tảng này và có thể bắt đầu tận hưởng niềm vui bóng đá ngay
            lập tức.
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Cuối cùng, SoVo còn sở hữu một cộng đồng yêu bóng đá sôi nổi và đông
            đảo. Đây là nơi bạn có thể giao lưu, bình luận, chia sẻ kinh nghiệm
            soi kèo bóng đá với các thành viên khác, tạo nên không khí sôi động
            và đầy hứng khởi. Bạn sẽ có cơ hội kết nối với những người đam mê
            bóng đá, cùng nhau chia sẻ niềm vui và nỗi buồn trong thế giới bóng
            đá.
          </Typography>
          <Typography sx={{ fontSize: "30px" }}>
            Giải đấu và nội dung hấp dẫn trên Sợ Vợ TV
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Sovotv mang đến cho người dùng cơ hội theo dõi trực tiếp và soi kèo
            các giải đấu bóng đá hàng đầu thế giới, cùng với những nội dung đa
            dạng và hấp dẫn khác.
          </Typography>
          <Typography sx={{ fontSize: "22px" }}>
            Các giải đấu hàng đầu (có xem trực tiếp và soi kèo bóng đá)
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Ngoại hạng Anh (Premier League): Giải đấu số một thế giới với sự góp
            mặt của những đội bóng mạnh nhất như Manchester United, Manchester
            City, Liverpool, Chelsea, và Arsenal.
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Cúp C1 (UEFA Champions League): Giải đấu danh giá nhất cấp CLB châu
            Âu, nơi quy tụ những đội bóng hàng đầu từ khắp các giải quốc nội như
            Real Madrid, Barcelona, Bayern Munich, Juventus, và PSG.
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            La Liga: Giải đấu hàng đầu của Tây Ban Nha với sự góp mặt của hai gã
            khổng lồ Real Madrid và Barcelona, cùng với những đội bóng mạnh như
            Atletico Madrid, Sevilla, và Valencia.
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Serie A: Giải đấu số một của Ý, quê hương của những CLB lừng danh
            như Juventus, AC Milan, Inter Milan, AS Roma, và Napoli.
          </Typography>

          <Typography sx={{ fontSize: "18px" }}>
            Bundesliga: Giải đấu hàng đầu nước Đức với sự thống trị của Bayern
            Munich, cùng sự góp mặt của Borussia Dortmund, RB Leipzig, và Bayer
            Leverkusen.
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Ligue 1: Giải đấu số một của Pháp với sự góp mặt của PSG, Lyon,
            Marseille, và Monaco.
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            World Cup và Euro: Hai giải đấu lớn nhất cấp đội tuyển quốc gia, nơi
            những ngôi sao hàng đầu thế giới cùng nhau tranh tài để giành vinh
            quang cho đất nước của mình.
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Ngoài ra, Sợ Vợ TV còn cung cấp rất nhiều giải đấu hấp dẫn khác như
            Europa League, FA Cup, Copa del Rey, và các giải đấu quốc nội trên
            toàn thế giới.
          </Typography>
          <Typography sx={{ fontSize: "22px" }}>Nội dung đa dạng</Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Ngoài việc xem trực tiếp và soi kèo bóng đá, Sợ Vợ TV còn cung cấp
            nhiều nội dung thú vị khác để làm hài lòng mọi fan bóng đá:
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Video highlight bàn thắng: Xem lại những pha ghi bàn đẹp mắt và
            những khoảnh khắc đáng nhớ nhất của các trận đấu.
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Phân tích, bình luận trước và sau trận đấu: Theo dõi những góc nhìn
            chuyên sâu và những nhận định thú vị từ các chuyên gia hàng đầu về
            bóng đá.
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Tin tức bóng đá mới nhất: Cập nhật liên tục những tin tức nóng hổi
            nhất về chuyển nhượng, chấn thương, và các sự kiện đáng chú ý trong
            thế giới bóng đá.
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Soi kèo nhà cái, dự đoán kết quả: Tham khảo những phân tích kèo
            chuẩn xác và dự đoán tỷ số từ các chuyên gia, giúp bạn đưa ra quyết
            định sáng suốt khi đặt cược.
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Sợ Vợ TV – Không chỉ là xem bóng đá và soi kèo
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Sợ Vợ TV không chỉ đơn thuần là một nền tảng xem bóng đá và soi kèo,
            mà còn là nơi quy tụ một cộng đồng yêu bóng đá đông đảo và sôi nổi,
            cùng với nhiều ưu đãi hấp dẫn dành cho thành viên.
          </Typography>
          <Typography sx={{ fontSize: "22px" }}>
            Cộng đồng yêu bóng đá
          </Typography>
          <Typography sx={{ fontSize: "19px" }}>
            Tại Sợ Vợ, bạn có thể:
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Tham gia thảo luận, đưa ra nhận định, dự đoán kết quả trận đấu, và
            chia sẻ kinh nghiệm soi kèo với các thành viên khác trong cộng đồng
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Kết nối với những người hâm mộ đồng điệu, cùng nhau chia sẻ niềm đam
            mê bóng đá và lan tỏa tinh thần thể thao tích cực.
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Tạo và tham gia các nhóm chat, diễn đàn để trao đổi về các đội bóng,
            cầu thủ yêu thích, và thảo luận về những chủ đề nóng hổi nhất trong
            thế giới bóng đá.
          </Typography>
          <Typography sx={{ fontSize: "22px" }}>Ưu đãi hấp dẫn</Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Khi trở thành thành viên của Sợ Vợ TV, bạn sẽ được:
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Tham gia các minigame dự đoán tỷ số, kết quả trận đấu, và nhận những
            phần quà giá trị như áo đấu, bóng, vé xem trực tiếp, và thậm chí cả
            tiền mặt.
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Nhận ưu đãi và khuyến mãi đặc biệt từ Sợ Vợ TV và các đối tác nhà
            cái, giúp bạn tối ưu hóa lợi nhuận khi đặt cược.
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Theo dõi những chương trình khuyến mãi thường xuyên và đặc biệt vào
            các dịp lễ lớn, giúp bạn nhận thêm nhiều phần quà hấp dẫn và trải
            nghiệm xem bóng đá, soi kèo thú vị hơn bao giờ hết.
          </Typography>
          <Typography sx={{ fontSize: "22px" }}>
            Hướng dẫn xem trực tiếp bóng đá và soi kèo trên Sợ Vợ TV
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Để bắt đầu hành trình khám phá thế giới bóng đá trên Sợ Vợ TV, bạn
            chỉ cần làm theo các bước đơn giản sau:
          </Typography>
          <Typography sx={{ fontSize: "19px" }}>Các bước đơn giản</Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Bước 1: Truy cập website Sợ Vợ TV: https://sovo88.link/ bằng trình
            duyệt web trên máy tính hoặc điện thoại của bạn.
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Bước 2: Tìm và chọn trận đấu bạn muốn xem hoặc soi kèo. Bạn có thể
            dễ dàng tìm thấy các trận đấu nổi bật ngay trên trang chủ hoặc sử
            dụng công cụ tìm kiếm của Sợ Vợ TV.
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Bước 3: Chọn link xem phù hợp với tốc độ mạng của bạn hoặc tham khảo
            thông tin soi kèo để đưa ra quyết định đặt cược. Sợ Vợ TV cung cấp
            nhiều link xem chất lượng cao và thông tin soi kèo chuẩn xác từ các
            chuyên gia.
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Bước 4: Tận hưởng trận đấu đỉnh cao hoặc đưa ra quyết định đặt cược
            thông minh dựa trên thông tin soi kèo. Giờ đây, bạn đã sẵn sàng để
            hòa mình vào không khí sôi động của bóng đá và trải nghiệm cảm giác
            hồi hộp, kịch tính đến tận những phút cuối cùng.
          </Typography>
          <Typography sx={{ fontSize: "22px" }}>
            Mẹo xem bóng đá và soi kèo hiệu quả
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Để tối ưu hóa trải nghiệm xem bóng đá và soi kèo trên Sợ Vợ TV, hãy
            ghi nhớ những mẹo sau:
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Mẹo 1: Khi xem trực tiếp bóng đá, hãy chọn link phát có chất lượng
            phù hợp với tốc độ mạng của bạn. Sợ Vợ TV cung cấp nhiều tùy chọn
            chất lượng khác nhau, từ SD đến HD, đảm bảo bạn có thể xem mượt mà
            nhất.
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Mẹo 2: Trước khi đưa ra quyết định soi kèo, hãy tham khảo ý kiến của
            các chuyên gia và phân tích kỹ lưỡng các yếu tố như phong độ, đội
            hình, thống kê đối đầu, và tỷ lệ kèo. Sợ Vợ TV cung cấp nhiều bài
            viết phân tích chuyên sâu và chính xác để giúp bạn đưa ra quyết định
            sáng suốt nhất.P
          </Typography>
          <Typography sx={{ fontSize: "22px" }}>Lời kết</Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Với tất cả những ưu điểm và tính năng vượt trội, Sợ Vợ TV chính là
            điểm đến lý tưởng cho mọi tín đồ bóng đá đam mê xem trực tiếp và soi
            kèo chuẩn xác. Hãy truy cập Sợ Vợ TV ngay hôm nay và cùng hòa mình
            vào không khí sôi động của bóng đá thế giới. Với Sợ Vợ TV, bạn sẽ
            không bao giờ bỏ lỡ những trận cầu đỉnh cao và cơ hội đặt cược sinh
            lời. Chúc bạn có những phút giây thư giãn và giải trí tuyệt vời cùng
            Sợ Vợ TV!
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "rgb(86,19,19)",
          width: "100%",
          height: { xl: "436px", md: "436px", xs: "fit-content" },
          py: 4,
          px: { md: 2, xs: 0, xl: 0 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: { md: "flex", xl: "flex", xs: "flex" },
            flexDirection: { md: "row", xl: "row", xs: "column" },
            gap: { md: 12, xl: 12, xs: 1 },
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: { xl: "600px", md: "600px", xs: "fit-content" } }}>
            <img src={logo_footer} style={{ width: "100%" }} />
            <Box
              sx={{
                display: "flex",
                gap: 2,
                height: { md: "120px", xl: "120px" },
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: { md: "20px", xl: "20px", xs: "17px" },
                  fontWeight: 600,
                  px: { md: 0, xl: 0, xs: 1 },
                }}
              >
                <span style={{ color: "#f2f207" }}>Sợ Vợ TV</span>
                <span style={{}}>-</span> Trang xem trực tiếp bóng đá chất lượng
                cao, không lag, không giật. Cung cấp link xem các trận đấu bóng
                đá hấp dẫn nhất trong ngày với bình luận tiếng Việt sôi động.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: { md: "420px", xl: "420px", xs: "100%" },
              px: { md: 0, xl: 0, xs: 1 },
              display: "flex",
              flexDirection: "column",
              color: "white",
              gap: { md: 2, xl: 2, xs: 1 },
            }}
          >
            <Typography
              sx={{
                paddingLeft: { md: 12, xs: 0, xl: 12 },
                fontSize: { md: "30px", xl: "30px", xs: "20px" },
                fontWeight: 600,
                textAlign: { xs: "center", width: "100%" },
              }}
            >
              HỖ TRỢ 24/7
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography>•</Typography>
              <Typography>Địa chỉ: 49 Tản Đà, P.10, Q.5, TP.HCM</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography>•</Typography>
              <Typography>Hotline: 090 935 8888</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography>•</Typography>
              <Typography>Mail: sovotvlink@gmail.com</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography>•</Typography>
              <Typography>
                #sovo, #sovotv, #sovotvlink, #sovoxemtructiepbongda,
                #sovobongdahomnay, #sovosoikeobongda
              </Typography>
            </Box>
          </Box>
        </Box>
        <hr />
        <Typography sx={{ width: "100%", textAlign: "center", color: "white" }}>
          @ 2024 Sợ Vợ TV
        </Typography>
      </Box>
    </>
  );
};

export default Home;

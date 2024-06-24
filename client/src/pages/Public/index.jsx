import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import path from "../../utils/path";

const Public = () => {
  return (
    <>
      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default Public;

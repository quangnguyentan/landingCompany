import { Box, Button, Container, Modal, Typography } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import Public from "./pages/Public/";
import Home from "./pages/Home/";
import path from "./utils/path";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./pages/Contact";
function App() {
  return (
    <Box sx={{ height : '100vh' }}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.CONTACT} element={<Contact />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;

import { Box } from "@mui/material";
import Footer from "components/common/Footer";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/Header/component";

const ChatLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Box as="main">{children || <Outlet />}</Box>
    </>
  );
};

export default ChatLayout;

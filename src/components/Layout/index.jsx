import React from "react";
import { Box, useColorMode } from "@chakra-ui/core";
import Aside from "./Aside";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const { width, bp2 } = useSelector((state) => state.resizeReducer);
  const { colorMode } = useColorMode();

  const myBgColor = {
    light: "#eef4f8",
    dark: "#1a202c",
  };

  
  return (
    <div>
      {width < bp2 ? (
        <>
          <NavBar />
          <Box height="50px"></Box>
          <Box background={myBgColor[colorMode]} padding="1rem">
            {children}
          </Box>
        </>
      ) : (
        <>
          <Aside />
          <Box
            background={myBgColor[colorMode]}
            height="100%"
            marginLeft="200px"
            padding="1rem"
          >
            {children}
          </Box>
        </>
      )}
    </div>
  );
};

export default Layout;

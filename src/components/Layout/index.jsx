import React from "react";
import { Box, useColorMode } from "@chakra-ui/core";
import Aside from "./Aside";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const { colorMode } = useColorMode();

  const myBgColor = {
    light: "#eef4f8",
    dark: "#1a202c",
  };

  window.addEventListener("resize", (e) => setWidth(e.target.innerWidth));
  return (
    <div>
      {width < 768 ? (
        <>
          <NavBar />
          <Box height = "50px"></Box>
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

import React from "react";
import { Button, useColorMode } from "@chakra-ui/core";

const About = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <h1>Seeting</h1>
      <Button onClick = {toggleColorMode}>Toggle mode</Button>
    </div>
  );
};

export default About;

import React from "react";
import { Button, useColorMode, Flex, Text } from "@chakra-ui/core";

const About = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <div>
      <Text>Settings</Text>
      <Text >Appearance</Text>
      <Button bg = "#5f8af8" onClick = {toggleColorMode}>Toggle mode</Button>
      <Flex height = "80vh"></Flex>
    </div>
  );
};

export default About;

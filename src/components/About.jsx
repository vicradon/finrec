import React from "react";
import { Heading, Flex, Text } from "@chakra-ui/core";

const About = () => {
  return (
    <>
      <Heading as = "h1" size = "lg">About</Heading>
      <Text>FinRec is an expense tracker. It's best feature is cloud storage. </Text>
      <Flex height="88vh"></Flex>
    </>
  );
};

export default About;

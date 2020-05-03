import React from "react";
import { Flex, Text, useColorMode } from "@chakra-ui/core";

const InfoCard = ({ name, value, color }) => {
  const { colorMode } = useColorMode();

  const myBgColor = {
    light: "#fff",
    dark: "gray.600",
  };

  return (
    <Flex
      padding="1rem 0"
      margin = "1rem"
      flexBasis="200px"
      flexGrow="1"
      flexShrink=" 0"
      align="center"
      rounded="lg"
      bg={myBgColor[colorMode]}
      direction="column"
      boxShadow = " 0px 0px 50px -19px rgba(79,79,79,0.3);"
    >
      <Text color={color} fontSize="24px">
        {value}
      </Text>
      <Text>{name}</Text>
    </Flex>
  );
};

const SummaryCards = () => {
  //
  return (
    <Flex width = "100%" my="1rem" justifyContent="space-between" flexWrap="wrap">
      <InfoCard name="Income" value="$20000" color="#4d80f3" />
      <InfoCard name="Income" value="$20000" color="#fb6d9d" />
      <InfoCard name="Income" value="$20000" color="#81c868" />
      <InfoCard name="Income" value="20000" color="#34d3eb" />
    </Flex>
  );
};

export default SummaryCards;

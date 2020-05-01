import React from "react";
import { Flex, Text } from "@chakra-ui/core";


const TotalExpensePie = () => {
  return (
    <Flex direction="column">
      <Text>Total Expenses</Text>
      <Text>demo range</Text>
      <Flex>
        <Text>Chart</Text>
        <Text>Chart details</Text>
      </Flex>
    </Flex>
  );
};

export default TotalExpensePie;
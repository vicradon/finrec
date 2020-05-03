import React from "react";
import { Flex, Text } from "@chakra-ui/core";
import Table from "./Table/Index";

const Transactions = () => {
  return (
    <Flex direction="column">
      <Text>Transactions</Text>
      <Table />
    </Flex>
  );
};

export default Transactions;

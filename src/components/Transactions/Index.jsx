import React from "react";
import { Flex, Text } from "@chakra-ui/core";
import Table from "../Table/Index";
import Filters from "./Filters";

const Transactions = () => {
  return (
    <Flex direction="column">
      <Text>Transactions</Text>
      <Table />
      <Filters />
    </Flex>
  );
};

export default Transactions;

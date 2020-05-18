import React from "react";
import { Flex, Text, Box } from "@chakra-ui/core";
import Table from "../Table/Index";
import Filters from "./Filters";
import { useSelector } from "react-redux";
import Header from "./Header";

const Transactions = () => {
  const width = useSelector((state) => state.resizeReducer.width);

  return (
    <Flex direction="column">
      {width > 900 ? (
        <Box>
          <Box height="100%" marginRight="270px">
            <Text>Transactions</Text>
            <Header />
            <Table />
          </Box>
          <Box>
            <Filters />
          </Box>
        </Box>
      ) : (
        <Box height="100%">
          <Text>Transactions</Text>
          <Header />
          <Table />
        </Box>
      )}
    </Flex>
  );
};

export default Transactions;

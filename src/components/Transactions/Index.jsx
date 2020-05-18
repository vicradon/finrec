import React from "react";
import { Flex, Text, Box } from "@chakra-ui/core";
import Table from "../Table/Index";
import Filters from "./Filters";

const Transactions = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  window.addEventListener("resize", (e) => setWidth(e.target.innerWidth));

  return (
    <Flex direction="column">
      {width > 768 ? (
        <Box>
          <Box height="100%" marginRight="270px">
            <Text>Transactions</Text>
            <Table />
          </Box>
          <Box>
            <Filters />
          </Box>
        </Box>
      ) : (
        <Box height="100%" marginRight="270px">
          <Text>Transactions</Text>
          <Table />
        </Box>
      )}
    </Flex>
  );
};

export default Transactions;

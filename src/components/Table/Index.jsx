import React from "react";
import {
  // Button,
  // Avatar,
  // Box,
  // Grid,
  Flex,
  // Text,
  // useColorMode,
  // LightMode,
} from "@chakra-ui/core";
import { useSelector } from "react-redux";
import Shell, { EmptyShell } from "./Shell";

const Table = () => {
  const { dataPoints, isLoading } = useSelector(
    (state) => state.financeReducer
  );

  return (
    <Flex>
      {isLoading ? (
        <EmptyShell name="Transactions 1" />
      ) : (
        <Shell
          name="Transactions 2"
          data={dataPoints}
        />
      )}
    </Flex>
  );
};

export default Table;

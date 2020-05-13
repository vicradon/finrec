import React from "react";
import {
  Button,
  Avatar,
  Box,
  Flex,
  Text,
  LightMode,
  CloseButton,
  Heading,
  Checkbox,
} from "@chakra-ui/core";
import FilterFields from "./FilterFields";

const Filters = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      position="fixed"
      right="0"
      top="0"
      width="200px"
      backgroundColor="#fff"
    >
      <Flex alignItems="center" height="50px" bg="gray.300">
        <Heading margin="0 10px" as="h3" fontSize="xl">
          Filters
        </Heading>
      </Flex>
      <FilterFields name="Select a range"></FilterFields>
      <FilterFields name="Category"></FilterFields>
      <FilterFields name="Cashflow">
        <Checkbox defaultIsChecked variantColor = "blue">Income</Checkbox>
        <Checkbox variantColor = "primary">Expense</Checkbox>
      </FilterFields>
      <FilterFields name="Payment Mode">
        <Checkbox variantColor = "primary">Cash</Checkbox>
        <Checkbox variantColor = "primary">Credit card</Checkbox>
        <Checkbox variantColor = "primary">Debit card</Checkbox>
      </FilterFields>
      <FilterFields name="Amount"></FilterFields>
    </Box>
  );
};

export default Filters;

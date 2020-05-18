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
import { useSelector } from "react-redux";

const Filters = () => {
  const { width, bp1 } = useSelector((state) => state.resizeReducer);

  const filtersWidth = width > bp1 ? "270px" : "100%";
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      position="fixed"
      right="0"
      top="0"
      width={filtersWidth}
      backgroundColor="#fff"
    >
      <Flex alignItems="center" height="50px" bg="gray.300">
        <Heading margin="0 10px" as="h3" fontSize="xl">
          Filters
        </Heading>
      </Flex>

      <Box padding="1rem">
        <FilterFields name="Select a range"></FilterFields>
        <FilterFields name="Category"></FilterFields>
        <FilterFields name="Cashflow">
          <Checkbox defaultIsChecked variantColor="blue">
            Income
          </Checkbox>
          <Checkbox variantColor="primary">Expense</Checkbox>
        </FilterFields>
        <FilterFields name="Payment Mode">
          <Checkbox variantColor="primary">Cash</Checkbox>
          <Checkbox variantColor="primary">Credit card</Checkbox>
          <Checkbox variantColor="primary">Debit card</Checkbox>
        </FilterFields>
        <FilterFields name="Amount"></FilterFields>
      </Box>
    </Box>
  );
};

export default Filters;

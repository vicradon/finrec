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
      boxShadow = {width > bp1 ? "0px 0px 15px -5px rgba(0,0,0,0.75)": ""}
      // backgroundColor="#fff"
    >
      <Flex alignItems="center" height="50px" borderBottom = "1px solid lightgray">
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

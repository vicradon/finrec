import React from "react";
import { Text, Box } from "@chakra-ui/core";

const FilterFields = ({ children, name }) => {
  return (
    <Box>
      <Text>{name}</Text>
      {children}
    </Box>
  );
};

export default FilterFields;

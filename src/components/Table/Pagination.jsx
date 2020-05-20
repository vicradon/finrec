import React from "react";
import {
  Flex,
  Editable,
  EditableInput,
  EditablePreview,
  Text,
  Icon,
  Grid,
} from "@chakra-ui/core";

const Pagination = ({ length }) => {
  return (
    <Grid templateColumns="3fr 6fr 3fr" width="100%">
      <Flex justifyContent="space-around" alignItems="center">
        <Icon size="12px" name="arrow-left" />
        <Icon size="22px" name="chevron-left" />
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <Editable />
        to
        <Text>{length}</Text>
      </Flex>
      <Flex justifyContent="space-around" alignItems="center">
        <Icon size="22px" name="chevron-right" />
        <Icon size="12px" name="arrow-right" />
      </Flex>
    </Grid>
  );
};

export default Pagination;

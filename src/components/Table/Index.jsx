import React from "react";
import {
  // Button,
  // Avatar,
  // Box,
  // Grid,
  Flex,
  Text,
  // useColorMode,
  // LightMode,
} from "@chakra-ui/core";
import { connect } from "react-redux";

const Table = ({ dataPoints, isLoading }) => {
  return (
    <Flex>
      {isLoading ? (
        <Text>loading...</Text>
      ) : (
        <Text>
          Data loaded
          <br />
          {dataPoints.data[0].description}
        </Text>
      )}
    </Flex>
  );
};

const mapState = (originalStateObject) => {
  const state = originalStateObject.financeReducer;
  return {
    dataPoints: state.dataPoints,
    isLoading: state.isLoading,
  };
};

const mapDispatch = {};

export default connect(mapState, mapDispatch)(Table);

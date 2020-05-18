import React from "react";
import {
  // Button,
  // Avatar,
  Box,
  // Grid,
  Flex,
  Text,
  // useColorMode,
  // LightMode,
} from "@chakra-ui/core";
import { connect } from "react-redux";
import Shell, { EmptyShell } from "./Shell";

const Table = ({ dataPoints, isLoading }) => {
  // React.useEffect(() => {
  //   if (!isLoading) {
  //     setState((state) => ({ ...state, dataPoints }));
  //   }
  // }, [dataPoints, isLoading]);
  // return (
  //   <EmptyShell
  //     name="Transactions 1"
  //     options={{ edit: "edit", delete: "delete" }}
  //   />
  // );

  return (
    <Flex>
      {isLoading ? (
        <EmptyShell name="Transactions 1" />
      ) : (
        <Shell
          name="Transactions 2"
          options={{ edit: "edit", delete: "delete" }}
          data={dataPoints}
        />
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

import React from "react";
import { Box, Text, Flex, Checkbox, Grid, Button, useColorMode } from "@chakra-ui/core";
import { useSelector, useDispatch } from "react-redux";
import styles from "./shell.module.css";

const TableItem = ({ dataObject }) => {
  const { date, category, paymentMode, description, amount } = dataObject;
  const width = useSelector((state) => state.resizeReducer.width);
  const currentlySelected = useSelector(
    (state) => state.financeReducer.currentlySelected
  );
  const count = useSelector((state) => state.financeReducer.count);

  const icon = (category) => {
    switch (category) {
      case "value":
        return "guy";
      default:
        break;
    }
  };

  const dispatch = useDispatch();

  // const handleCheck = (event) => {
  //   dataObject.toggleCheck();
  //   if (dataObject.isChecked) {
  //     dispatch({ type: "ALTER_SELECTED", value: 1 });
  //   } else {
  //     dispatch({ type: "ALTER_SELECTED", value: -1 });
  //   }
  //   dispatch({ type: "REPAINT_UI" });
  // };
  const handleCheck = (event) => {
    dataObject.toggleCheck();

    if (dataObject.isChecked) {
      dispatch({ type: "PUSH_TO_SELECTED", dataObject });
    } else {
      dispatch({ type: "REMOVE_FROM_SELECTED", dataObject });
    }
    dispatch({ type: "REPAINT_UI" });
  };
  const { colorMode } = useColorMode();


  const tableItemColor = colorMode === 'light'? 'gray.600': 'gray.100';

  return (
    <Box>
      <Grid onClick={handleCheck} className={styles.tableHead}>
        <Checkbox onChange={handleCheck} isChecked={dataObject.isChecked} />
        {/* <Button onClick={() => dispatch({ type: "INCREMENT_COUNT" })}>
          {count}
        </Button> */}
        {width > 1100 ? (
          <Text color={tableItemColor} fontWeight="400" fontSize=".9em">
            {category}
          </Text>
        ) : (
          <Text color={tableItemColor} fontWeight="400" fontSize=".9em">
            {category}
            <br />
            {description}
          </Text>
        )}
        {width > 1100 ? (
          <Text color={tableItemColor} fontWeight="400" fontSize=".9em">
            {date}
          </Text>
        ) : (
          ""
        )}
        <Text color={tableItemColor} fontWeight="400" fontSize=".9em">
          {paymentMode}
        </Text>
        {width > 1100 ? (
          <Text color={tableItemColor} fontWeight="400" fontSize=".9em">
            {description}
          </Text>
        ) : (
          ""
        )}
        <Text justifySelf="end" color={tableItemColor} fontWeight="400" fontSize=".9em">
          {amount}
          <br />
          {date}
        </Text>
      </Grid>
      <hr />
    </Box>
  );
};

export default TableItem;

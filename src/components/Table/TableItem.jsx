import React from "react";
import { Box, Text, Flex, Checkbox, Grid, Button } from "@chakra-ui/core";
import { useSelector, useDispatch } from "react-redux";
import styles from "./shell.module.css";

const TableItem = ({ dataObject }) => {
  const { date, category, paymentMode, description, amount } = dataObject;
  const width = useSelector((state) => state.resizeReducer.width);
  const numberOfSelected = useSelector(
    (state) => state.financeReducer.numberOfSelected
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

  const handleCheck = (event) => {
    dataObject.toggleCheck();

    dispatch({ type: "INCREMENT_COUNT" });
    dispatch({ type: "REPAINT_UI" });
  };

  return (
    <Box>
      <Grid onClick={handleCheck} className={styles.tableHead}>
        <Checkbox onChange={handleCheck} isChecked={dataObject.isChecked} />
        {/* <Button onClick={() => dispatch({ type: "INCREMENT_COUNT" })}>
          {count}
        </Button> */}
        {width > 1100 ? (
          <Text color="#333" fontWeight="400" fontSize=".9em">
            {category}
          </Text>
        ) : (
          <Text color="#333" fontWeight="400" fontSize=".9em">
            {category}
            <br />
            {description}
          </Text>
        )}
        {width > 1100 ? (
          <Text color="#333" fontWeight="400" fontSize=".9em">
            {date}
          </Text>
        ) : (
          ""
        )}
        <Text color="#333" fontWeight="400" fontSize=".9em">
          {paymentMode}
        </Text>
        {width > 1100 ? (
          <Text color="#333" fontWeight="400" fontSize=".9em">
            {description}
          </Text>
        ) : (
          ""
        )}
        <Text justifySelf="end" color="#333" fontWeight="400" fontSize=".9em">
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

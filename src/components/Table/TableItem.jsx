import React from "react";
import { Box, Text, Flex, Checkbox, Grid } from "@chakra-ui/core";
import { useSelector } from "react-redux";
import styles from "./shell.module.css";

const TableItem = ({ date, category, paymentMode, description, amount }) => {
  const width = useSelector((state) => state.resizeReducer.width);

  const icon = (category) => {
    switch (category) {
      case "value":
        return "guy";
      default:
        break;
    }
  };
  return (
    <Grid
      // columnGap="10px"
      // rowGap="20px"
      // gridTemplateColumns="0.5fr 2fr 2.25fr 2.25fr 4fr 1fr"
      // width="100%"
      className={styles.tableHead}
    >
      <Checkbox />

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
  );
};

export default TableItem;

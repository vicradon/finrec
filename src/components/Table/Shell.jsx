import React from "react";
import { Flex, Box, Text, Checkbox, Grid } from "@chakra-ui/core";
import TableItem from "./TableItem";
import { useSelector } from "react-redux";
import styles from "./shell.module.css";

export const EmptyShell = ({ name }) => {
  return (
    <Flex
      direction="column"
      backgroundColor="white"
      boxShadow=""
      padding="0.5rem 1rem"
      width="100%"
    >
      <Flex>{name}</Flex>
      <Grid gridTemplateColumns="0.5fr 3fr 1.5fr 2fr 4fr 1fr" width="100%">
        <Checkbox />
        <Text>Category</Text>
        <Text>Date</Text>
        <Text>Payment Mode</Text>
        <Text>Description</Text>
        <Text>Amount</Text>
      </Grid>
      <Flex direction="column" justifyContent="center" alignItems="center">
        <p>Loading...</p>
      </Flex>
    </Flex>
  );
};

const Shell = ({ data, name, options }) => {
  const width = useSelector((state) => state.resizeReducer.width);

  console.log(data);
  return (
    <Flex
      direction="column"
      backgroundColor="white"
      boxShadow=""
      padding="0.5rem 1rem"
      width="100%"
    >
      <Flex>{name}</Flex>
      <Grid
        marginBottom="0.5rem"
        className={styles.tableHead}
        // columnGap="10px"
        // rowGap="20px"
        // gridTemplateColumns="0.5fr 2fr 2.25fr 2.25fr 4fr 1fr"
        // width="100%"
      >
        <Checkbox />
        <Text color="#333" fontWeight="600">
          Category
        </Text>
        {width > 1100 ? (
          <Text color="#333" fontWeight="600">
            Date
          </Text>
        ) : (
          ""
        )}
        <Text justifyItems="end" color="#333" fontWeight="600">
          Payment Mode
        </Text>
        {width > 1100 ? (
          <Text color="#333" fontWeight="600">
            Description
          </Text>
        ) : (
          ""
        )}
        <Text justifySelf = "end" color="#333" fontWeight="600">
          Amount
        </Text>
      </Grid>
      <Grid rowGap=".8rem">
        {data.data.map((x, i) => {
          return (
            <>
              <TableItem
                key={x.id}
                dataId={x.id}
                date={x.date}
                category={x.category}
                paymentMode={x.paymentMode}
                description={x.description}
                amount={x.amount}
              />
              <hr />
            </>
          );
        })}
      </Grid>
    </Flex>
  );
};

export default Shell;

import React from "react";
import { connect } from "react-redux";
import { Flex, Text } from "@chakra-ui/core";
import SummaryCards from "./SummaryCards";
import IncomeExpenseCharts from "./IncomeExpenseCharts";
import RecentTransactions from "./RecentTransactions";
import TotalExpensePie from "./TotalExpensePie";
import { repaintUI, countPlus } from "../../state/actions/repaintUI";

const mapState = (receivedState) => {
  const state = receivedState.financeReducer;
  return {
    state,
  };
};

const mapDispatch = {
  repaintUI,
  countPlus
};

const Dashboard = ({ state, repaintUI, countPlus }) => {
  const stuff = state.generatedData.tens[0][0];
  return (
    <div>
      <Flex justify="space-between">
        <Text>Dashboard </Text>
        <Text>{state.count}</Text>
        <Text>{stuff.description}</Text>
        <button
          onClick={() => {
            stuff.setDescription("blah blah");
            repaintUI();
          }}
        >
          click
        </button>
        <button
          onClick={() => countPlus()}
        >
          count plus
        </button>
      </Flex>
      <SummaryCards />
      <TotalExpensePie />
      <IncomeExpenseCharts />
      <RecentTransactions />
    </div>
  );
};

export default connect(mapState, mapDispatch)(Dashboard);

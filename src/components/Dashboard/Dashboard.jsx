import React from "react";
import { Flex, Text } from "@chakra-ui/core";
import SummaryCards from "./SummaryCards";
import IncomeExpenseCharts from "./IncomeExpenseCharts";
import RecentTransactions from "./RecentTransactions";
import TotalExpensePie from "./TotalExpensePie";
import { StateContext, DispatchContext } from "../../state/Store";

const Dashboard = () => {
  const c = React.useContext(StateContext);
  const d = React.useContext(DispatchContext);
  console.log(c, d)
  return (
    <div>
      <Flex justify="space-between">
        <Text>Dashboard</Text>
      </Flex>
      <SummaryCards />
      <TotalExpensePie />
      <IncomeExpenseCharts />
      <RecentTransactions />
    </div>
  );
};

export default Dashboard;

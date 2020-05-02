import React from "react";
const {
  financeStateReducer,
  initialFinancialState,
} = "./finance_state_reducer";

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

const StoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    financeStateReducer,
    initialFinancialState
  );
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};
export default StoreProvider;

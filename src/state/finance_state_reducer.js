export const initialFinancialState = {
  count: 0
}

export const financeStateReducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "ADD_ITEM":
      return addNewItem(state, payload.todoItem);
    default:
      return state;
  }
};

const initialState = {
  dataPoints: "",
  isLoading: true,
  count: 1,
  numberOfSelected: 0,
};

const financeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REPAINT_UI": {
      return { ...state, count: Date.now() };
    }
    case "UPDATE_DATA_POINTS": {
      return {
        ...state,
        dataPoints: action.data,
        isLoading: false,
      };
    }
    case "INCREMENT_COUNT": {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    default: {
      return state;
    }
  }
};

export default financeReducer;

const initialState = {
  dataPoints: "",
  isLoading: true,
  count: 1,
  currentlySelected: [],

  get numberOfSelected() {
    return this.currentlySelected.length;
  },
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
    case "PUSH_TO_SELECTED": {
      return {
        ...state,
        currentlySelected: [...state.currentlySelected, action.dataObject],
      };
    }
    case "REMOVE_FROM_SELECTED": {

      return {
        ...state,
        currentlySelected: state.currentlySelected.filter(
          (x) => x !== action.dataObject
        ),
      };
    }
    case "ALTER_SELECTED": {
      return {
        ...state,
        numberOfSelected: state.numberOfSelected + action.value,
      };
    }
    default: {
      return state;
    }
  }
};

export default financeReducer;

const initialState = {
  dataPoints: "",
  isLoading: true
}

const financeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REPAINT_UI': {
      return { ...state }
    }
    case 'UPDATE_DATA_POINTS': {
      return {
        ...state,
        dataPoints: action.data,
        isLoading: false
      }
    }
    case 'COUNT_PLUS': {
      return {
        ...state,
        count: state.count + 1
      }
    }
    default: {
      return state
    }
  }
}

export default financeReducer
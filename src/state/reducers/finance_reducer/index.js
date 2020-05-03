import randomData from './random_data'

const someRandomData = new randomData({
  length: 50000,
  dateRange: { min: '2/20/2020', max: '5/20/2020' },
  categories: ['clothing', 'housing'],
  cashFlow: ['income',],
  paymentMode: ['cash'],
  amount: { min: 500, max: 1000 },
  description: "bought this"
});

const initialState = someRandomData

const testState = {
  generatedData: initialState,
  count: 1
}

const financeReducer = (state = testState, action) => {
  switch (action.type) {
    case 'REPAINT_UI': {
      return { ...state }
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
import randomData from './random_data'

const someRandomData = new randomData(20, { min: '2/20/2020', max: '5/20/2020' });
someRandomData.breakIntoTens()

// const firstGuy = someRandomData.tens[0][0]
// console.log(someRandomData.tens)

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
import { createStore } from "redux";
import rootReducer from "./reducers";
import randomData from './reducers/finance_reducer/random_data'

const store = createStore(rootReducer);

const dataPoints = new randomData({
  length: 4,
  // dateRange: { min: '2/20/2020', max: '5/20/2020' },
  // categories: ['clothing', 'housing'],
  // cashFlow: ['income',],
  // paymentMode: ['cash'],
  // amount: { min: 500, max: 1000 },
  // description: "bought this"
});


const updateDataPoints = (data) => {
  return {
    type: 'UPDATE_DATA_POINTS',
    data
  }
}


const getDataAsync = async () => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataPoints)
    }, 1000)
  }).then((res) => {
    store.dispatch(updateDataPoints(res))
  })
}
getDataAsync()

export default store

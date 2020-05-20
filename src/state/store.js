import { createStore } from "redux";
import rootReducer from "./reducers";
import randomData from "./reducers/finance_reducer/random_data";

const store = createStore(rootReducer);

const dataPoints = new randomData({
  length: 10,
  // dateRange: { min: '2/20/2020', max: '5/20/2020' },
  // categories: ['clothing', 'housing'],
  // cashFlow: ['income',],
  // paymentMode: ['cash'],
  // amount: { min: 500, max: 1000 },
  // description: "bought this"
});

const updateDataPoints = (data) => {
  return {
    type: "UPDATE_DATA_POINTS",
    data,
  };
};

const updateWindowSize = (e) => {
  return {
    type: "UPDATE_WINDOW_SIZE",
    payload: {
      width: e.target.innerWidth,
      height: e.target.innerHeight,
    }
  }
}

const getDataAsync = async () => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataPoints);
    }, 1000);
  }).then((res) => {
    store.dispatch(updateDataPoints(res));
  });
};
getDataAsync();

window.addEventListener("resize", (e) => {
  store.dispatch(updateWindowSize(e));
});

export default store;

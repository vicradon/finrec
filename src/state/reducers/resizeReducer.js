const initialState = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const resizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_WINDOW_SIZE": {
      return { ...action.payload };
    }
    default: {
      return state;
    }
  }
};

export default resizeReducer;

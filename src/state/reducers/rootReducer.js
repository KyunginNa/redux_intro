import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {
  if (action.type === "TEST") {
    return {
      ...state,
      message: {
        greeting: action.payload,
      },
    };
  } else {
    return state;
  }
  return state;
};

export default rootReducer;

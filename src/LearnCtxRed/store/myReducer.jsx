export const defaultState = {
  someString: "IBM",
  someTime: 30,
};

export const MyReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE_DAYS":
      return {
        ...state,
        someTime: state.someTime + action.payload,
      };
    default:
      return defaultState;
  }
};

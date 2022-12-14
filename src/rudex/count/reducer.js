import { INCREMENT, DECREMENT } from "./type";

const initialState = {
  value: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + 1 };
    case "DECREMENT":
      return { ...state, value: state.value - 1 };

    default:
      return state;
  }
};
export default countReducer;

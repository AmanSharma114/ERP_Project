// ordersReducer.js
import { ADD_ORDER, DELETE_ORDER } from '../actions/actionTypes';

const initialState = [];

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [...state, action.payload];
    case DELETE_ORDER:
      return state.filter(order => order.id !== action.payload);
    default:
      return state;
  }
};

export default ordersReducer;

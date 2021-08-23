import { ActionType } from './action';

const AMOUNT_CONVERSIONS = 10;

const initialState = {
  convertHistory: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_HISTORY:
      return {
        ...state,
        convertHistory: [action.payload, ...state.convertHistory].slice(0, AMOUNT_CONVERSIONS),
      };
    case ActionType.DELETE_HISTORY:
      return {
        ...state,
        convertHistory: [],
      };
    default:
      return state;
  }
};

export {reducer};

import { ActionType } from './action';

const initialState = {
  convertHistory: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_HISTORY:
      return {
        ...state,
        convertHistory: [action.payload, ...state.convertHistory].slice(0,3),
      };
    default:
      return state;
  }
};

export {reducer};

import * as actions from '../action-types/trades.type';

const initialState = {
  trades: [],
  isFetching: false,
};

const tradesReducer = (state = initialState, action: ActionRedux) => {
  switch (action.type) {
    case actions.GET_TRADES_REQUEST:
      return { ...state, isFetching: true };

    case actions.GET_TRADES_SUCCESS:
      return {
        ...state,
        trades: action.payload,
        isFetching: false,
      };

    case actions.GET_TRADES_FAILED:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default tradesReducer;

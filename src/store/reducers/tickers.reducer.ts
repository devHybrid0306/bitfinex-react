import * as actions from '../action-types/tickers.type';

const initialState = {
  tTickers: [],
  fTickers: [],
  isFetching: false,
};

const tickersReducer = (state = initialState, action: ActionRedux) => {
  switch (action.type) {
    case actions.GET_ALL_TICKERS_REQUEST:
      return { ...state, isFetching: true };

    case actions.GET_ALL_TICKERS_SUCCESS:
      return {
        ...state,
        tTickers: action.payload,
        fTickers: action.append,
        isFetching: false,
      };

    case actions.GET_ALL_TICKERS_FAILED:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default tickersReducer;

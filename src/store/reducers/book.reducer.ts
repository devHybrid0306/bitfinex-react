import * as actions from '../action-types/book.type';

const initialState = {
  books: [],
  isFetching: false,
};

const bookReducer = (state = initialState, action: ActionRedux) => {
  switch (action.type) {
    case actions.GET_ORDER_BOOK_REQUEST:
      return { ...state, isFetching: true };

    case actions.GET_ORDER_BOOK_SUCCESS:
      return {
        ...state,
        books: action.payload,
        isFetching: false,
      };

    case actions.GET_ORDER_BOOK_FAILED:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default bookReducer;

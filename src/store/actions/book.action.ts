import axios from 'axios';
import { BITFINEX_API_URL } from '../../constants';
import { IFBook, ITBook } from '../../types/book';
import { isTrading } from '../../utils';
import * as actions from '../action-types/book.type';

export const getBookOrder = (symbol: string) => {
  return async (dispatch: any) => {
    dispatch({ type: actions.GET_ORDER_BOOK_REQUEST });

    try {
      const { data, status } = await axios.get(`${BITFINEX_API_URL}/book/${symbol}/P0`);
      if (status === 200) {
        const books: (ITBook | IFBook)[] = [];
        if (isTrading(symbol)) {
          data.map((item: any) => books.push({ price: item[0], count: item[1], amount: item[2] }));
        } else {
          data.map((item: any) =>
            books.push({ rate: item[0], period: item[1], count: item[2], amount: item[3] }),
          );
        }
        dispatch({ type: actions.GET_ORDER_BOOK_SUCCESS, payload: books });
      } else {
        dispatch({ type: actions.GET_ORDER_BOOK_FAILED });
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: actions.GET_ORDER_BOOK_FAILED });
    }
  };
};

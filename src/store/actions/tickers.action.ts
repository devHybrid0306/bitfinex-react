import axios from 'axios';
import { BITFINEX_API_URL } from '../../constants';
import { ITicker } from '../../types/tickers';
import * as actions from '../action-types/tickers.type';

export const getAllTickers = () => {
  return async (dispatch: any) => {
    dispatch({ type: actions.GET_ALL_TICKERS_REQUEST });

    try {
      const { data, status } = await axios.get(`${BITFINEX_API_URL}/tickers?symbols=ALL`);
      if (status === 200) {
        const tTickers: ITicker[] = [];
        const fTickers: ITicker[] = [];
        data.map((item: any) =>
          item[0].substring(0, 1) === 't'
            ? tTickers.push({
                symbol_value: item[0],
                symbol_label: item[0].substring(1),
                last_price: item[7],
                volume: item[8],
              })
            : fTickers.push({
                symbol_value: item[0],
                symbol_label: item[0].substring(1),
                last_price: item[10],
                volume: item[11],
              }),
        );

        dispatch({ type: actions.GET_ALL_TICKERS_SUCCESS, payload: tTickers, append: fTickers });
      } else {
        dispatch({ type: actions.GET_ALL_TICKERS_FAILED });
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: actions.GET_ALL_TICKERS_FAILED });
    }
  };
};

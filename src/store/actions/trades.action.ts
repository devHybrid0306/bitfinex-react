import axios from 'axios';
import { BITFINEX_API_URL } from '../../constants';
import { IFTrade, ITTrade } from '../../types/trades';
import { isTrading } from '../../utils';
import * as actions from '../action-types/trades.type';

export const getTrades = (symbol: string) => {
  return async (dispatch: any) => {
    dispatch({ type: actions.GET_TRADES_REQUEST });

    try {
      const { data, status } = await axios.get(
        `${BITFINEX_API_URL}/trades/${symbol}/hist?limit=120&sort=-1`,
      );
      if (status === 200) {
        const trades: (ITTrade | IFTrade)[] = [];

        console.log('->GetTrades', data);
        if (isTrading(symbol)) {
          data.map((item: any) =>
            trades.push({ id: item[0], mts: item[1], amount: item[2], price: item[3] }),
          );
        } else {
          data.map((item: any) =>
            trades.push({
              id: item[0],
              mts: item[1],
              amount: item[2],
              rate: item[3],
              period: item[4],
            }),
          );
        }
        dispatch({ type: actions.GET_TRADES_SUCCESS, payload: trades });
      } else {
        dispatch({ type: actions.GET_TRADES_FAILED });
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: actions.GET_TRADES_FAILED });
    }
  };
};

import { IFBook, ITBook } from './book';
import { ITicker } from './tickers';
import { IFTrade, ITTrade } from './trades';

export interface IState {
  tickers: {
    tTickers: ITicker[];
    fTickers: ITicker[];
    isFetching: boolean;
  };
  book: {
    books: (ITBook | IFBook)[];
    isFetching: boolean;
  };
  trades: {
    trades: (ITTrade | IFTrade)[];
    isFetching: boolean;
  };
}

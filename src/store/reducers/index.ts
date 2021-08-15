import { combineReducers } from 'redux';
import tickers from './tickers.reducer';
import book from './book.reducer';
import trades from './trades.reducer';

export const rootReducer = combineReducers({ tickers, book, trades });

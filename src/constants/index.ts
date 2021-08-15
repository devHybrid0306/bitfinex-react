export const BITFINEX_API_URL =
  'https://cors-anywhere.herokuapp.com/https://api-pub.bitfinex.com/v2';

export const TICKER_COLUMNS = [
  { title: 'NAME', dataIndex: 'label', key: 'symbol', width: 100 },
  { title: 'LAST', dataIndex: 'last_price', key: 'last_price', width: 100 },
  { title: 'VOL', dataIndex: 'volume', key: 'volume', width: 100 },
];

export const TRADING_BOOK_COLUMNS = [
  { title: 'PRICE', dataIndex: 'price', key: 'price' },
  { title: 'COUNT', dataIndex: 'count', key: 'count' },
  { title: 'AMOUNT', dataIndex: 'amount', key: 'amount' },
];

export const FUNDING_BOOK_COLUMNS = [
  { title: 'RATE', dataIndex: 'rate', key: 'rate' },
  { title: 'PERIOD', dataIndex: 'period', key: 'period' },
  { title: 'COUNT', dataIndex: 'count', key: 'count' },
  { title: 'AMOUNT', dataIndex: 'amount', key: 'amount' },
];

export const TRADING_TRADES_COLUMNS = [
  { title: 'MTS', dataIndex: 'mts', key: 'mts' },
  { title: 'AMOUNT', dataIndex: 'amount', key: 'amount' },
  { title: 'PRICE', dataIndex: 'price', key: 'price' },
];

export const FUNDING_TRADES_COLUMNS = [
  { title: 'MTS', dataIndex: 'mts', key: 'mts' },
  { title: 'AMOUNT', dataIndex: 'amount', key: 'amount' },
  { title: 'RATE', dataIndex: 'rate', key: 'rate' },
  { title: 'PERIOD', dataIndex: 'period', key: 'period' },
];

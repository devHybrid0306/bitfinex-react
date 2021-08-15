import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Col, Row, Table, Tabs } from 'antd';
import TradingViewWidget from 'react-tradingview-widget';
import classes from './main.module.css';

import { getAllTickers } from '../../store/actions/tickers.action';
import { IState } from '../../types/state';
import { getBookOrder } from '../../store/actions/book.action';
import { isTrading } from '../../utils';
import { getTrades } from '../../store/actions/trades.action';
import {
  FUNDING_BOOK_COLUMNS,
  FUNDING_TRADES_COLUMNS,
  TICKER_COLUMNS,
  TRADING_BOOK_COLUMNS,
  TRADING_TRADES_COLUMNS,
} from '../../constants';

const Home = () => {
  const dispatch = useDispatch();
  const tTickers = useSelector((state: IState) => state.tickers.tTickers);
  const fTickers = useSelector((state: IState) => state.tickers.fTickers);
  const books = useSelector((state: IState) => state.book.books);
  const trades = useSelector((state: IState) => state.trades.trades);

  const [isTrade, setIsTrade] = useState<boolean>(true);
  const [currentTicker, setCurrentTicker] = useState<string>('tBTCUSD');

  const { TabPane } = Tabs;

  useEffect(() => {
    dispatch(getAllTickers());
  }, []);

  useEffect(() => {
    dispatch(getBookOrder(currentTicker));
    dispatch(getTrades(currentTicker));
  }, [currentTicker]);

  const callback = (key: string) => {
    console.log(key);
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2>BITFINEX Integration</h2>
      </div>
      <Row>
        <Col span={6} className={classes.sidebar}>
          <Tabs onChange={callback}>
            <TabPane tab="Trading" key="1">
              <Table
                scroll={{ y: 500 }}
                dataSource={tTickers}
                columns={TICKER_COLUMNS}
                pagination={false}
                onRow={(r) => ({
                  onClick: () => {
                    setCurrentTicker(r.symbol_value);
                    setIsTrade(isTrading(r.symbol_value));
                  },
                })}
              />
            </TabPane>
            <TabPane tab="Funding" key="2">
              <Table
                scroll={{ y: 500 }}
                dataSource={fTickers}
                columns={TICKER_COLUMNS}
                pagination={false}
                onRow={(r) => ({
                  onClick: () => {
                    setCurrentTicker(r.symbol_value);
                    setIsTrade(isTrading(r.symbol_value));
                  },
                })}
              />
            </TabPane>
          </Tabs>
        </Col>
        <Col span={18} className={classes.main}>
          <Row className={classes.chart}>
            <TradingViewWidget symbol={`BITFINEX:${currentTicker.substring(1)}`} autosize />
          </Row>
          <Row className={classes.booksTrades}>
            <Col span={12}>
              <Card title="Order Book" bordered={false}>
                <Table
                  scroll={{ y: 500 }}
                  dataSource={books}
                  pagination={false}
                  columns={isTrade ? TRADING_BOOK_COLUMNS : FUNDING_BOOK_COLUMNS}
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Trades" bordered={false}>
                <Table
                  scroll={{ y: 500 }}
                  dataSource={trades}
                  pagination={false}
                  columns={isTrade ? TRADING_TRADES_COLUMNS : FUNDING_TRADES_COLUMNS}
                />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;

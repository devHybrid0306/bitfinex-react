export interface ITTrade {
  id: number;
  mts: string;
  amount: number;
  price: number;
}

export interface IFTrade {
  id: number;
  mts: string;
  amount: number;
  rate: number;
  period: number;
}

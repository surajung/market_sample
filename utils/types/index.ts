export interface MarketItemType {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
}

export interface MarketItemFilerType extends MarketItemType {
  depth1: string;
  depth2: string;
  depth3: string;
}

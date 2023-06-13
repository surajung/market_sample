import { StateCreator } from "zustand";
import { PersistOptions } from "zustand/middleware";
import { MarketItemType } from "@/utils/types";

export interface CartStoreStates {
  // 상품 리스트
  itemCart: MarketItemType[];
}

export type CartStorePersist = (
  config: StateCreator<CartStore>,
  options: PersistOptions<CartStoreStates>
) => StateCreator<CartStore>;

export interface CartStoreActions {
  setItemCart: (select: MarketItemType[]) => void;
}

export interface CartStore extends CartStoreStates, CartStoreActions {}

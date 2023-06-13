import { StateCreator } from "zustand";
import { PersistOptions } from "zustand/middleware";
import { MarketItemType } from "@/utils/types";

export interface ICartStoreStates {
  // 상품 리스트
  itemCart: MarketItemType[];
}

export type ICartStorePersist = (
  config: StateCreator<ICartStore>,
  options: PersistOptions<ICartStoreStates>
) => StateCreator<ICartStore>;

export interface ICartStoreActions {
  setItemCart: (select: MarketItemType[]) => void;
}

export interface ICartStore extends ICartStoreStates, ICartStoreActions {}

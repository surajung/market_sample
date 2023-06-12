import { create } from "zustand";
import { MarketItemType } from "@/utils/types";

interface SeletItemState {
  item: MarketItemType[];
  setItem: (list: MarketItemType[]) => void;
}

export const useItemStore = create<SeletItemState>((set) => ({
  item: [],
  setItem: (list) => set((state) => ({ ...state, item: list })),
}));

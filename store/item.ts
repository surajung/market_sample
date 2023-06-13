import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { MarketItemType } from "@/utils/types";
import { CartStore, CartStorePersist, CartStoreStates } from "./itemType";

interface SeletItemState {
  item: MarketItemType[];
  setItem: (list: MarketItemType[]) => void;
}

export const useItemStore = create<SeletItemState>((set) => ({
  item: [],
  setItem: (list) => set((state) => ({ ...state, item: list })),
}));

// 스토어 내 state 초기값에 대한 정의
const initialState: CartStoreStates = {
  itemCart: [],
};

interface SeletItemCartState {
  itemCart: MarketItemType[];
  setItemCart: (select: MarketItemType[]) => void;
}

export const useItemCartStore = create<CartStore>(
  (persist as CartStorePersist)(
    (set) => ({
      itemCart: initialState.itemCart,
      setItemCart: (select) =>
        set((state) => ({ itemCart: state.itemCart.concat(select) })),
    }),
    {
      name: "cartStorage",
      storage: createJSONStorage(() => window.localStorage),
    }
  )
);

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { MarketItemType } from "@/utils/types";
import { ICartStore, ICartStorePersist, ICartStoreStates } from "./itemType";

interface SeletItemState {
  item: MarketItemType[];
  setItem: (list: MarketItemType[]) => void;
}

export const useItemStore = create<SeletItemState>((set) => ({
  item: [],
  setItem: (list) => set((state) => ({ ...state, item: list })),
}));

const dummyStorageApi = {
  getItem: () => null,
  setItem: () => undefined,
  removeItem: () => undefined,
};

// 스토어 내 state 초기값에 대한 정의
const initialState: ICartStoreStates = {
  itemCart: [],
};

interface SeletItemCartState {
  itemCart: MarketItemType[];
  setItemCart: (select: MarketItemType[]) => void;
}

export const useItemCartStore = create<ICartStore>(
  (persist as ICartStorePersist)(
    (set) => ({
      itemCart: initialState.itemCart,
      setItemCart: (select) =>
        set((state) => ({ itemCart: state.itemCart.concat(select) })),
    }),
    {
      name: "cartStorage",
      // partialize: (state) => ({ cartList: state.itemCart }),
      // storage: createJSONStorage(() => sessionStorage),
      storage: createJSONStorage(() =>
        typeof window !== "undefined" ? window.localStorage : dummyStorageApi
      ),
      // typeof window !== "undefined" ? window.localStorage : dummyStorageApi,
    }
  )
);

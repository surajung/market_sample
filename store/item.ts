import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { MarketItemType } from "@/utils/types";
import { CartStore, CartStorePersist, CartStoreStates } from "./itemType";

interface SeletItemState {
  itemDepth1: MarketItemType[];
  itemDepth2: MarketItemType[];
  itemDepth3: MarketItemType[];
  setItemDepth1: (list: MarketItemType[]) => void;
  setItemDepth2: (list: MarketItemType[]) => void;
  setItemDepth3: (list: MarketItemType[]) => void;
}
/**
 * 필터링된 아이템 리스트 store
 */
export const useFilterItemStore = create<SeletItemState>((set) => ({
  itemDepth1: [],
  itemDepth2: [],
  itemDepth3: [],
  setItemDepth1: (list) =>
    set((state) => ({ itemDepth1: state.itemDepth1.concat(list) })),
  setItemDepth2: (list) =>
    set((state) => ({ itemDepth2: state.itemDepth2.concat(list) })),
  setItemDepth3: (list) =>
    set((state) => ({ itemDepth3: state.itemDepth3.concat(list) })),
}));

// 장바구니 스토어 내 state 초기값에 대한 정의
const initialState: CartStoreStates = {
  itemCart: [],
};

/**
 * 장바구니 스토어
 * localStorage를 활용하여 데이터를 브라우져에 저장
 */
export const useItemCartStore = create<CartStore>(
  (persist as CartStorePersist)(
    (set) => ({
      itemCart: initialState.itemCart,
      setItemCart: (select) =>
        set((state) => ({ itemCart: state.itemCart.concat(select) })),
      removeItemCart: (select: any) => set(() => ({ itemCart: select })),
    }),
    {
      name: "cartStorage",
      storage: createJSONStorage(() => window.localStorage),
    }
  )
);

interface filterStore {
  filterList: [];
  setFilterList: (select: any) => void;
}
export const useFilterStore = create<filterStore>((set) => ({
  filterList: [],
  setFilterList: (select) => set(() => ({ filterList: select })),
}));

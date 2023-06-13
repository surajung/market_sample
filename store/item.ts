import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { MarketItemType } from "@/utils/types";
import { CartStore, CartStorePersist, CartStoreStates } from "./itemType";

interface SeletItemState {
  item: MarketItemType[];
  setItem: (list: MarketItemType[]) => void;
}
/**
 * @deprecated
 * 최초 아이템 리스트 store
 * react-query chace 로 인해 불필요
 */
export const useItemStore = create<SeletItemState>((set) => ({
  item: [],
  setItem: (list) => set((state) => ({ ...state, item: list })),
}));

// 장바구니 스토어 내 state 초기값에 대한 정의
const initialState: CartStoreStates = {
  itemCart: [],
};

interface SeletItemCartState {
  itemCart: MarketItemType[];
  setItemCart: (select: MarketItemType[]) => void;
  removeItemCart: (select: MarketItemType[]) => void;
}

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
      removeItemCart: (select: any) => set((state) => ({ itemCart: select })),
    }),
    {
      name: "cartStorage",
      storage: createJSONStorage(() => window.localStorage),
    }
  )
);

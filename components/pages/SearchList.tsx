import { useEffect, useState } from "react";
import MarketItem from "@/components/MarketItem/MarketItem";
import { useItemStore, useItemCartStore } from "@/store/item";
import { MarketItemType } from "@/utils/types";

interface PropsType {
  keywordQuery: string;
  itemList?: MarketItemType[];
}

const SearchList = ({ keywordQuery, itemList = [] }: PropsType) => {
  const [itemlist, setItemList] = useState<MarketItemType[]>([]);
  const item = useItemStore<MarketItemType[]>((state) => state.item);
  const { itemCart, setItemCart } = useItemCartStore((state: any) => state);
  const onCartItem = (id: number) => {
    setItemCart(item.filter((i) => i.id === id));
  };
  useEffect(() => {
    setItemList(itemList);
  }, [itemlist]);

  return (
    <div className="search__list">
      <ul className="inner">
        {itemlist
          .filter((list) => list.title.includes(keywordQuery))
          .map((item) => (
            <li key={item.id}>
              <MarketItem
                id={item.id}
                title={item.title}
                description={item.description}
                thumbnail={item.thumbnail}
                price={item.price}
                discountPercentage={item.discountPercentage}
              />
              <button
                className="button__cart"
                type="button"
                onClick={() => onCartItem(item.id)}
              >
                <span className="blind">장바구니에 담기</span>
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default SearchList;

import { useEffect, useState } from "react";
import MarketItem from "@/components/MarketItem/MarketItem";
import useItemList from "@/hook/useItemList";
import { useItemCartStore } from "@/store/item";
import Spinner from "@/components/Spinner/Spinner";
import { MarketItemType } from "@/utils/types";

interface PropsType {
  keywordQuery: string;
}

const SearchList = ({ keywordQuery }: PropsType) => {
  const [itemList, setItemList] = useState<MarketItemType[]>([]);
  const { itemCart, setItemCart } = useItemCartStore((state: any) => state);
  /**
   * 아이템 리스트 get hook
   */
  const { status, result } = useItemList({ depth1: "a1" });
  status !== "success" && console.log(result);

  /**
   * 장바구니 로직
   */
  const onCartItem = (id: number) => {
    if (itemCart.some((x: MarketItemType) => x.id === id)) {
      alert("이미 장바구니에 담겨있습니다");
      return;
    }
    if (result) setItemCart(result.filter((i: MarketItemType) => i.id === id));
  };

  /**
   * 아이템 result fetch
   */
  useEffect(() => {
    if (result) setItemList(result);
    console.log(itemList);
  }, [result, itemList]);

  if (status !== "success") {
    return <Spinner />;
  } else {
    return (
      <div className="search__list">
        <ul className="inner">
          {itemList
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
  }
};
export default SearchList;

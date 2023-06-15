import { useEffect, useState } from "react";
import MarketItem from "@/components/MarketItem/MarketItem";
import useItemList from "@/hook/useItemList";
import { useItemCartStore, useFilterStore } from "@/store/item";
import Spinner from "@/components/Spinner/Spinner";
import { MarketItemFilerType } from "@/utils/types";

interface PropsType {
  keywordQuery: string;
}

const SearchList = ({ keywordQuery }: PropsType) => {
  const [itemList, setItemList] = useState<MarketItemFilerType[]>([]);
  // 카테고리 3뎁스에서 선택된값
  const { filterList } = useFilterStore();
  const { itemCart, setItemCart } = useItemCartStore((state: any) => state);
  /**
   * 아이템 리스트 fetch hook
   */
  const { isFetching, data } = useItemList();

  /**
   * 카테고리 선택에 따른 아이템 리스트 노출조건 필터링
   * @returns boolean
   */
  const filteringList = (list: MarketItemFilerType) => {
    if (keywordQuery.length > 0) {
      return list.title.includes(keywordQuery);
    } else if (filterList !== undefined) {
      return filterList.includes(list.depth3);
    } else {
      return true;
    }
  };

  /**
   * 장바구니 담기 로직
   * 중복일땐 얼럿처리
   */
  const onCartItem = (id: number) => {
    if (itemCart.some((x: MarketItemFilerType) => x.id === id)) {
      alert("이미 장바구니에 담겨있습니다");
      return;
    }
    if (data) setItemCart(data.filter((i: MarketItemFilerType) => i.id === id));
  };

  useEffect(() => {
    if (data) setItemList(data);
  }, [data]);

  if (isFetching) {
    return <Spinner />;
  } else {
    return (
      <div className="search__list">
        <ul className="inner">
          {itemList
            .filter((list) => filteringList(list))
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

import MarketItem from "@/components/MarketItem/MarketItem";
import { useItemStore } from "@/store/item";
import { MarketItemType } from "@/utils/types";

const SearchList = () => {
  const itemList = useItemStore<MarketItemType[]>((state: any) => state.item);
  return (
    <div className="search__list">
      <ul className="inner">
        {itemList.map((item) => (
          <li key={item.id}>
            <MarketItem
              id={item.id}
              title={item.title}
              description={item.description}
              thumbnail={item.thumbnail}
              price={item.price}
              discountPercentage={item.discountPercentage}
            />
            <button className="button__cart" type="button">
              <span className="blind">장바구니에 담기</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SearchList;

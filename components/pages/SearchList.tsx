import {useState,useEffect} from "react"
import MarketItem from "@/components/MarketItem/MarketItem";
import { MarketItemType } from "@/utils/types";

const SearchList = () => {
  const [marketItemList, setMarketItemList] = useState<MarketItemType[]>([]);
  useEffect(() => {
    fetch("/api/market")
      .then((response) => response.json())
      .then((response) => setMarketItemList(response.result));
  }, []);
  return (
    <div className="search__list">
      <ul className="inner">
      {marketItemList.map((item) => (
        <li
          key={item.id}
        >
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
}
export default SearchList;
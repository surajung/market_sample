import {useEffect, useState} from "react"
import DefaultLayout from "@/components/layout/DefaultLayout"
import MarketItem from "@/components/MarketItem/MarketItem";
import { MarketItemType } from "@/utils/types";

const Cart = () => {
  const [marketItemList, setMarketItemList] = useState<MarketItemType[]>([]);
  useEffect(() => {
    fetch("/api/market")
      .then((response) => response.json())
      .then((response) => setMarketItemList(response.result));
  }, []);
  return (
    <DefaultLayout title="장바구니">
      <div className="cartPage">
        <div className="cartPage__list">
          <ul className="inner">
          {marketItemList.map((item) => (
            <li>
              <MarketItem
                id={item.id}
                title={item.title}
                description={item.description}
                thumbnail={item.thumbnail}
                price={item.price}
                discountPercentage={item.discountPercentage}
                key={item.id}
              />
              <button className="button__cart" type="button">
                <span className="blind">장바구니에 담기</span>
              </button>
            </li>
          ))}
          </ul>
        </div>

      </div>
    </DefaultLayout>
  );
}
export default Cart;
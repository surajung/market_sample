import { useState, useEffect } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import MarketItem from "@/components/MarketItem/MarketItem";
import { useItemCartStore } from "@/store/item";
import { MarketItemType } from "@/utils/types";

const Cart = () => {
  const { itemCart, removeItemCart } = useItemCartStore((state: any) => state);
  const [cartList, setCartList] = useState<MarketItemType[]>([]);
  /**
   * 장바구니 아이템 삭제
   */
  const onRemoveCartItem = (id: number) => {
    removeItemCart(itemCart.filter((i: MarketItemType) => i.id !== id));
  };
  useEffect(() => {
    setCartList(itemCart);
  }, [itemCart]);
  return (
    <DefaultLayout title="장바구니">
      <div className="cartPage">
        <div className="cartPage__list">
          <ul className="inner">
            {cartList.map((item) => (
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
                  className="button__delete"
                  type="button"
                  onClick={() => onRemoveCartItem(item.id)}
                >
                  <span className="blind">장바구니에서 삭제</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Cart;

import { MarketItemType } from "@/utils/types";
import { useEffect } from "react";

const MarketItem = ({
  id,
  title,
  description,
  thumbnail,
  price,
  discountPercentage,
}: MarketItemType) => {
  const isSale = (n: number) => {
    return n > 5;
  };
  return (
    <>
      <div className="market-item">
        <figure className="market-item__image">
          <img src={thumbnail} alt={description} />
        </figure>
        <p className="market-item__title">{title}</p>
        <div className="market-item__price">
          {price.toLocaleString("ko-KR")}원
        </div>
        {isSale(discountPercentage) && <div>{discountPercentage}</div>}
      </div>
    </>
  );
};
export default MarketItem;

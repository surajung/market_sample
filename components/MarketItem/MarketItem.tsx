import { MarketItemType } from "@/utils/types";

const MarketItem = ({
  id,
  title,
  description,
  thumbnail,
  price,
  discountPercentage,
}: MarketItemType) => {
  return (
    <>
      <div className="market-item" id={`id`}>
        <figure className="market-item__image" title={description}>
          <img src={thumbnail} alt={description} />
        </figure>
        <p className="market-item__title">{title}</p>
        {discountPercentage !== 0 && (
          <div className="market-item__before-price">
            {price.toLocaleString("ko-KR")}원
          </div>
        )}
        <div className="market-item__price">
          {discountPercentage !== 0 && (
            <span className="salePoint">{Math.floor(discountPercentage)}%</span>
          )}
          {Math.floor(
            price - (price * discountPercentage) / 100
          ).toLocaleString("ko-KR")}
          원
        </div>
      </div>
    </>
  );
};
export default MarketItem;

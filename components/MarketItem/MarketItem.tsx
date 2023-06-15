import { MarketItemType } from "@/utils/types";
import Image from "next/image";

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
      <div className="market-item" id={String(id)}>
        <figure className="market-item__image" title={description}>
          {/* <Image src={thumbnail} width={152} height={152} alt={description} /> */}
          <img src={thumbnail} alt={description} />
        </figure>
        <p className="market-item__title">{title}</p>
        {discountPercentage !== 0 && (
          <div className="market-item__before-price">{price}원</div>
        )}
        <div className="market-item__price">
          {discountPercentage !== 0 && (
            <span className="salePoint">{Math.floor(discountPercentage)}%</span>
          )}
          {Math.floor(price - (price * discountPercentage) / 100)}원
        </div>
      </div>
    </>
  );
};
export default MarketItem;

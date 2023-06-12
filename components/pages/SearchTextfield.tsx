import {useState,useEffect} from "react"
import TextInput from "@/components/TextInput/TextInput"
import KeywordHighlight from "@/components/KeywordHighlight/KeywordHighlight";
import Link from "next/link";
import { useItemStore } from "@/store/item";
import { MarketItemType } from "@/utils/types";

const SearchTextfield = () => {
  const itemList = useItemStore<MarketItemType[]>((state: any) => state.item);
  const [keyword, setKeyword] = useState("");
  const [isAutocorrect, setIsAutocorrect] = useState(false);
  const [autocorrectList, setAutocorrectList] = useState<MarketItemType[]>([]);

  useEffect(() => {
    setIsAutocorrect(keyword !== "");
    setAutocorrectList(
      itemList.filter((item: MarketItemType) => {
        return item.title.includes(keyword);
      })
    );
  }, [keyword]);

  return (
    <div className="search__textfield">
      <TextInput
        id="search"
        value={keyword}
        placeholder="검색어"
        size="h40"
        maxLength={30}
        onChange={(e) => setKeyword(e.target.value)}
      ></TextInput>
      <Link href="./cart" className="button__cart-page">
        <span className="blind">장바구니</span>
      </Link>
      {isAutocorrect && (
        <ul className="search__autocorrect">
          {autocorrectList.map((item, index) => (
            <li key={index}>
              <KeywordHighlight text={item.title} keyword={keyword} />
              <Link
                href={`/search?item=${item.id}`}
                className="search__autocorrect--select"
              >
                <span className="blind">선택</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default SearchTextfield;
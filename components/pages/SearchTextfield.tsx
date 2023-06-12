import {useState,useEffect} from "react"
import { useRouter } from "next/router";
import TextInput from "@/components/TextInput/TextInput";
import KeywordHighlight from "@/components/KeywordHighlight/KeywordHighlight";
import Link from "next/link";
import { useItemStore } from "@/store/item";
import { MarketItemType } from "@/utils/types";

interface PropsType {
  keywordQuery?: string;
}

const SearchTextfield = ({ keywordQuery = "" }: PropsType) => {
  const router = useRouter();
  const itemList = useItemStore<MarketItemType[]>((state: any) => state.item);
  const [keyword, setKeyword] = useState(keywordQuery);
  const [isAutocorrect, setIsAutocorrect] = useState(false);
  const [autocorrectList, setAutocorrectList] = useState<MarketItemType[]>([]);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    router.push(`/search/?keyword=${keyword}`);
    event.preventDefault();
  };

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
      <form onSubmit={onSubmit}>
        <TextInput
          id="search"
          value={keyword}
          placeholder="검색어"
          size="h40"
          maxLength={30}
          onChange={(e) => setKeyword(e.target.value)}
        ></TextInput>
      </form>
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
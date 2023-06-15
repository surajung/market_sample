import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import TextInput from "@/components/TextInput/TextInput";
import KeywordHighlight from "@/components/KeywordHighlight/KeywordHighlight";
import Link from "next/link";
import useItemList from "@/hook/useItemList";
import { MarketItemType } from "@/utils/types";

interface PropsType {
  keywordQuery?: string;
}

const SearchTextfield = ({ keywordQuery = "" }: PropsType) => {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>(keywordQuery);
  const [isAutocorrectLayer, setIsAutocorrectLayer] = useState<boolean>(false);
  const [autocorrectList, setAutocorrectList] = useState<MarketItemType[]>([]);
  /**
   * 아이템 리스트 get hook
   */
  const { data } = useItemList();

  /**
   * 검색어입력 submit -> url에 quert string으로 검색어(키워드) 주입
   */
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    router.push(`/search/?keyword=${keyword}`);
    setIsAutocorrectLayer(false);
    event.preventDefault();
  };

  useEffect(() => {
    /**
     * 검색어 입력되면 자동완성 리스트 노출
     */
    setIsAutocorrectLayer(keyword !== "");
    if (data) {
      setAutocorrectList(
        data.filter((item: MarketItemType) => {
          return item.title.includes(keyword);
        })
      );
    }
  }, [keyword, data]);

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
      {isAutocorrectLayer && (
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

import {useState,useEffect} from "react"
import Link from "next/link"
import DefaultLayout from "@/components/layout/DefaultLayout"
import TextInput from "@/components/TextInput/TextInput"
import Chips from "@/components/Chips/Chips";
import MarketItem from "@/components/MarketItem/MarketItem";
import Modal from "@/components/Modal/Modal";
import CategorySelect from "@/components/CategorySelect/CategorySelect";
import Button from "@/components/Button/Button";
import { MarketItemType } from "@/utils/types";
interface Menus {
  id: number;
  name: string;
}

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [chipsList, setChipsList] = useState<Menus[]>([
    {
      id: 1,
      name: "양파1",
    },
    {
      id: 2,
      name: "양파2",
    },
  ]);
  const onChipsDelete = (id: number) => {
    console.log(`${id}번 삭제`);
    setChipsList(chipsList.filter((chips) => chips.id !== id));
  };
  const [marketItemList, setMarketItemList] = useState<MarketItemType[]>([]);

  const toggleModal = () => {
    setIsModal(prev => !prev)
  }
  useEffect(() => {
    fetch("/api/market")
      .then((response) => response.json())
      .then((response) => setMarketItemList(response.result));
  }, []);
  return (
    <DefaultLayout>
      <div className="search">
        <div className="search__textfield">
          <TextInput
            id="search"
            value={keyword}
            placeholder="검색어"
            size="h40"
            maxLength={30}
            onChange={(e) => setKeyword(e.target.value)}
          ></TextInput>
          <Link href="./cart">
            <button className="button__cart-page" type="button">
              <span className="blind">장바구니</span>
            </button>
          </Link>
        </div>
        {false && (
          <ul className="search__autocorrect">
            <li>
              <span className="point">TEXT</span>
              test
              <button className="search__autocorrect--select" type="button"><span className="blind">선택</span></button>
            </li>
          </ul>
        )}
        <div className="search__filter">
          <div className="search__filter--keyword">
            {chipsList.map((item) => (
              <Chips
                id={item.id}
                name={item.name}
                key={item.id}
                onHandler={() => onChipsDelete(item.id)}
              />
          ))}
          </div>
          <button className="search__filter--button" type="button" onClick={() => toggleModal()}><span className="blind">카테고리</span></button>
        </div>
        <div className="search__list">
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
      {isModal && (
        <Modal title="제목" height="500px" onHandler={() => toggleModal()}>
          <CategorySelect />
          <Button variant="primary_filled" size="h56" isFullWidth={true}>
            선택하기
          </Button>
        </Modal>
        )}
    </DefaultLayout>
  )
}
export default Search;
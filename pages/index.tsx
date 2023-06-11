import { useEffect, useState } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import Button from "@/components/Button/Button";
import TextInput from "@/components/TextInput/TextInput";
import Checkbox from "@/components/Checkbox/Checkbox";
import Modal from "@/components/Modal/Modal";
import Chips from "@/components/Chips/Chips";
import MarketItem from "@/components/MarketItem/MarketItem";
import CategorySelect from "@/components/CategorySelect/CategorySelect";
import { MarketItemType } from "@/utils/types";

interface Menus {
  id: number;
  name: string;
}

function Index() {
  // 컴포넌트 구성을 위한 기본 정보
  const [keyword, setKeyword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isModal, setIsModal] = useState(true);
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
  const [marketItemList, setMarketItemList] = useState<MarketItemType[]>([]);

  // 컴포넌트 인터렉션 핸들러
  const onModalClose = () => {
    setIsModal((prev) => !prev);
  };
  const onChipsDelete = (id: number) => {
    console.log(`${id}번 삭제`);
    setChipsList(chipsList.filter((chips) => chips.id !== id));
  };
  useEffect(() => {
    fetch("/api/market")
      .then((response) => response.json())
      .then((response) => setMarketItemList(response.result));
  }, []);
  return (
    <DefaultLayout title="Template">
      <dl className="template__list">
        <dt>Button</dt>
        <dd>
          <Button variant="primary_filled" size="h56" isFullWidth={true}>
            선택 완료
          </Button>
          <Button
            variant="primary_filled"
            size="h56"
            isFullWidth={true}
            isDisabled={true}
          >
            선택 완료
          </Button>
        </dd>
        <dt>
          TextInput <i>({keyword ? keyword : "빈값"})</i>
        </dt>1
        <dd>
          <TextInput
            id="search"
            value={keyword}
            placeholder="검색어"
            size="h40"
            maxLength={30}
            onChange={(e) => setKeyword(e.target.value)}
          ></TextInput>
        </dd>
        <dt>
          Checkbox <i>({isChecked ? "선택" : "해제"})</i>
        </dt>
        <dd>
          <Checkbox
            id="test"
            size="h24"
            isChecked={isChecked}
            onChange={setIsChecked}
          >
            선택합니다.
          </Checkbox>
        </dd>
        <dt>
          Modal{" "}
          <i>
            (
            {isModal ? (
              "활성화"
            ) : (
              <button onClick={() => onModalClose()}>모달 열기</button>
            )}
            )
          </i>
        </dt>
        <dd style={{ position: "relative", height: "520px" }}>
          {isModal && (
            <Modal title="제목" height="500px" onHandler={() => onModalClose()}>
              <CategorySelect />
              <Button variant="primary_filled" size="h56" isFullWidth={true}>
                선택하기
              </Button>
            </Modal>
          )}
        </dd>
        <dt>
          Chips{" "}
          <i>(선택 키워드: {chipsList.map((item) => `${item.name}, `)})</i>
        </dt>
        <dd>
          {chipsList.map((item) => (
            <Chips
              id={item.id}
              name={item.name}
              key={item.id}
              onHandler={() => onChipsDelete(item.id)}
            />
          ))}
        </dd>
        <dt>상품</dt>
        <dd>
          {marketItemList.map((item) => (
            <MarketItem
              id={item.id}
              title={item.title}
              description={item.description}
              thumbnail={item.thumbnail}
              price={item.price}
              discountPercentage={item.discountPercentage}
              key={item.id}
            />
          ))}
        </dd>
      </dl>
    </DefaultLayout>
  );
}

export default Index;

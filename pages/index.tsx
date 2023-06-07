import { useState } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import Button from "@/components/Button/Button";
import TextInput from "@/components/TextInput/TextInput";
import Checkbox from "@/components/Checkbox/Checkbox";
import Modal from "@/components/Modal/Modal"
import Chips from "@/components/Chips/Chips";

interface Menus {
  id: number;
  name: string;
}

function Index() {
  const [keyword, setKeyword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
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
    console.log(id, "삭제");
    setChipsList(chipsList.filter((chips) => chips.id !== id));
  };
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
          TextInput <i>({keyword})</i>
        </dt>
        <dd>
          <TextInput
            id="search"
            value={keyword}
            placeholder="키워드 입력"
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
        <dt>Modal</dt>
        <dd style={{ position: "relative", height: "220px" }}>
          <Modal title="제목" height="200px">
            <div className="contents">내용</div>
            <Button variant="primary_filled" size="h56" isFullWidth={true}>
              선택하기
            </Button>
          </Modal>
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
      </dl>
    </DefaultLayout>
  );
}

export default Index;

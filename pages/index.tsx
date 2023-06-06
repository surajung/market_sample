import { useState } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import Button from "@/components/Button/Button";
import TextInput from "@/components/TextInput/TextInput";
import Checkbox from "@/components/Checkbox/Checkbox";

function Index() {
  const [keyword, setKeyword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  return (
    <DefaultLayout>
      <dl>
        <dt>버튼</dt>
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
        <dt>TextInput</dt>
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
        <dt>Checkbox</dt>
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
      </dl>
    </DefaultLayout>
  );
}

export default Index;

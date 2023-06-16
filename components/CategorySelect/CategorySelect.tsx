import { useEffect } from "react";
import { useRouter } from "next/router";
import codes from "@/utils/constants";
import { useState } from "react";
import Checkbox from "@/components/Checkbox/Checkbox";
import Button from "@/components/Button/Button";
import CheckboxGroup from "../Checkbox/CheckboxGroup";
import { useFilterStore } from "@/store/item";

type CodesType3 = {
  code: string;
  codename: string;
};

type CodesType2 = {
  code: string;
  codename: string;
  depth3: CodesType3[];
};

type CodesType1 = {
  code: string;
  codename: string;
  depth2: CodesType2[];
};

interface PropsType {
  setKeyword: React.Dispatch<string>;
  onHandler: () => void;
}
const CategorySelect = ({ setKeyword, onHandler }: PropsType) => {
  const router = useRouter();
  // 카테고리 아코디언 토글
  const [isSelectDepth1, setIsSelectDepth1] = useState<number>(0);
  const [isSelectDepth2, setIsSelectDepth2] = useState<string>("-1");
  // 카테고리 3뎁스에서 선택된값
  const { filterList, setFilterList } = useFilterStore();
  const [filterChecked, setFilterChecked] = useState<string[]>([]);

  // 아코디언 토글을 위한 함수
  const expandDepth1 = (n: number) => {
    setIsSelectDepth1(n);
  };
  const expandDepth2 = (n: string) => {
    if (isSelectDepth2 === n) {
      setIsSelectDepth2("-1");
    } else {
      setIsSelectDepth2(n);
    }
  };
  const filterListFetch = () => {
    const obj = { filter: filterChecked };
    const payload = Object.entries(obj)
      .map((item) => item.join("=").replace(/,/g, "&" + item[0] + "="))
      .join("&");
    setFilterList(filterChecked);
    setKeyword("");
    onHandler();
    router.push(`/search/?${payload}`);
  };

  useEffect(() => {
    setFilterChecked(filterList !== undefined ? filterList : []);
  }, [filterList, setFilterChecked]);

  return (
    <>
      <div className="category-select">
        <ul className="category-select__depth1">
          {codes.marketItemCategory.depth1.map(
            (item1: CodesType1, index1: number) => (
              <li
                className={
                  isSelectDepth1 === index1
                    ? "category-select__depth1--selected"
                    : ""
                }
                onClick={() => expandDepth1(index1)}
                key={item1.code}
              >
                {item1.codename}

                <ul className="category-select__depth2">
                  {item1.depth2.map((item2: CodesType2) => (
                    <li
                      className={
                        isSelectDepth2 === item2.code
                          ? "category-select__depth2--selected"
                          : ""
                      }
                      key={item2.code}
                    >
                      {item2.codename}
                      <button
                        type="button"
                        className="button_expand"
                        onClick={() => expandDepth2(item2.code)}
                      >
                        <span className="blind">확장</span>
                      </button>

                      <fieldset>
                        <ul
                          className={`category-select__depth3 ${
                            isSelectDepth2 === item2.code
                              ? "category-select__depth3--open"
                              : ""
                          }`}
                        >
                          <CheckboxGroup
                            label="검색필터"
                            values={filterChecked}
                            onChange={setFilterChecked}
                          >
                            {item2.depth3.map((item3: CodesType3) => (
                              <li key={item3.code}>
                                <Checkbox size="h24" value={item3.code}>
                                  {item3.codename}
                                </Checkbox>
                              </li>
                            ))}
                          </CheckboxGroup>
                        </ul>
                      </fieldset>
                    </li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
      </div>
      <Button
        variant="primary_filled"
        size="h56"
        isFullWidth={true}
        isDisabled={filterChecked.length === 0}
        onHandler={filterListFetch}
      >
        선택하기
      </Button>
    </>
  );
};
export default CategorySelect;

import codes from "@/utils/constants";
import { useState } from "react";
import Checkbox from "@/components/Checkbox/Checkbox";
import Button from "@/components/Button/Button";
import CheckboxGroup from "../Checkbox/CheckboxGroup";
import { MarketItemType } from "@/utils/types";

type Code = {
  code: string;
  codename: string;
};

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

const CategorySelect = () => {
  /**
   * 아이템 리스트 get hook
   */
  const [isSelectDepth1, setIsSelectDepth1] = useState<number>(0);
  const [isSelectDepth2, setIsSelectDepth2] = useState<number>(-1);
  const [filterList, setFilterList] = useState([]);

  const expandDepth1 = (n: number) => {
    setIsSelectDepth1(n);
  };
  const expandDepth2 = (n: number) => {
    if (isSelectDepth2 === n) {
      setIsSelectDepth2(-1);
    } else {
      setIsSelectDepth2(n);
    }
  };

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
                        isSelectDepth2 === Number(item2.code)
                          ? "category-select__depth2--selected"
                          : ""
                      }
                      key={item2.code}
                    >
                      {item2.codename}
                      <button
                        type="button"
                        className="button_expand"
                        onClick={() => expandDepth2(Number(item2.code))}
                      >
                        <span className="blind">확장</span>
                      </button>

                      <fieldset>
                        <ul
                          className={`category-select__depth3 ${
                            isSelectDepth2 === Number(item2.code)
                              ? "category-select__depth3--open"
                              : ""
                          }`}
                        >
                          <CheckboxGroup
                            label="검색필터"
                            values={filterList}
                            onChange={setFilterList}
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
      <Button variant="primary_filled" size="h56" isFullWidth={true}>
        선택하기
      </Button>
    </>
  );
};
export default CategorySelect;

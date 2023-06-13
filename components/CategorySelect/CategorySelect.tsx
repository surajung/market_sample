import codes from "@/utils/constants";
import { useEffect, useState } from "react";
import useItemList from "@/hook/useItemList";
import Checkbox from "@/components/Checkbox/Checkbox";
import Button from "@/components/Button/Button";
import CheckboxGroup from "../Checkbox/CheckboxGroup";
import { MarketItemType } from "@/utils/types";

type CodesType = {
  code: string;
  codename: string;
};

interface categoryType {
  depth1: CodesType[];
  depth2: CodesType[];
  depth3: CodesType[];
}

const CategorySelect = () => {
  /**
   * 아이템 리스트 get hook
   */
  const { data } = useItemList();
  const [itemList, setItemList] = useState<MarketItemType[]>();
  const [category, setCategory] = useState<categoryType>({
    depth1: [],
    depth2: [],
    depth3: [],
  });
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
  useEffect(() => {
    // const result = data?.filter((list) => list.depth1);
    if (data) setItemList(data);
  }, [data]);

  useEffect(() => {
    // if (!data) {return}
    // console.log(codes.marketItemCategory.depth2);
    // console.log(itemList);
    // console.log(
    //   codes.marketItemCategory.depth2.filter((l1) =>
    //     itemList?.some((l2) => l1.code === l2.depth2)
    //   )
    // );
    const compare = (n: string) => {
      const depth1 = `a${n}`;
      const currentList = itemList?.filter((list) => list.depth1 === depth1);
      console.log(currentList);
      return codes.marketItemCategory.depth2.filter((l1) =>
        currentList?.some((l2) => l1.code === l2.depth2)
      );
    };
    setCategory({
      depth1: codes.marketItemCategory.depth1,
      depth2: compare(String(isSelectDepth1 + 1)),
      depth3: [],
    });
  }, [isSelectDepth1, itemList]);

  // useEffect(() => {
  //   console.log(itemList, category);
  // }, [itemList, category]);

  return (
    <>
      <div className="category-select">
        {filterList}
        <ul className="category-select__depth1">
          {category.depth1.map((item1: CodesType, index1: number) => (
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
            </li>
          ))}
        </ul>
        <ul className="category-select__depth2">
          {category.depth2.map((item2: CodesType, index2: number) => (
            <li
              className={
                isSelectDepth2 === index2
                  ? "category-select__depth2--selected"
                  : ""
              }
              key={item2.code}
            >
              {item2.codename}
              <button
                type="button"
                className="button_expand"
                onClick={() => expandDepth2(index2)}
              >
                <span className="blind">확장</span>
              </button>

              <fieldset>
                <ul
                  className={`category-select__depth3 ${
                    isSelectDepth2 === index2
                      ? "category-select__depth3--open"
                      : ""
                  }`}
                >
                  <CheckboxGroup
                    label="검색필터"
                    values={filterList}
                    onChange={setFilterList}
                  >
                    {/* {category.depth3.map((item3: CodesType) => (
                      <li key={item3.code}>
                        <Checkbox size="h24" value={item3.code}>
                          {item3.codename}
                        </Checkbox>
                      </li>
                    ))} */}
                  </CheckboxGroup>
                </ul>
              </fieldset>
            </li>
          ))}
        </ul>
      </div>
      <Button variant="primary_filled" size="h56" isFullWidth={true}>
        선택하기
      </Button>
    </>
  );
};
export default CategorySelect;

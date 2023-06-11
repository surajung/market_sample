import codes from "@/utils/constants";
import { useEffect, useState } from "react";
import Checkbox from "@/components/Checkbox/Checkbox"
import Button from "@/components/Button/Button";
interface CodesProps {
  code: string;
  codeName: string;
}

const CategorySelect = () => {
  const [depth1List, setDepth1List] = useState<CodesProps[]>([]);
  const [depth2List, setDepth2List] = useState<CodesProps[]>([]);
  const [depth3List, setDepth3List] = useState<CodesProps[]>([]);
  const [isSelectDepth1, setIsSelectDepth1] = useState<number>(0);
  const [isSelectDepth2, setIsSelectDepth2] = useState<number>(-1);
  const [isChecked, setIsChecked] = useState(false);

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
    setDepth1List(codes.marketItemCategory.depth1);
    setDepth2List(codes.marketItemCategory.depth2);
    setDepth3List(codes.marketItemCategory.depth3);
  }, [codes]);
  return (
    <>
      <div className="category-select">
        {isSelectDepth1}, {isSelectDepth2}
        <ul className="category-select__depth1">
          {depth1List.map((item1: CodesProps, index1: number) => (
            <li
              className={
                isSelectDepth1 === index1
                  ? "category-select__depth1--selected"
                  : ""
              }
              onClick={() => expandDepth1(index1)}
              key={item1.code}
            >
              {item1.codeName}
            </li>
          ))}
        </ul>
        <ul className="category-select__depth2">
          {depth2List.map((item2: CodesProps, index2: number) => (
            <li
              className={
                isSelectDepth2 === index2
                  ? "category-select__depth2--selected"
                  : ""
              }
              onClick={() => expandDepth2(index2)}
              key={item2.code}
            >
              {item2.codeName}
              <ul
                className={`category-select__depth3 ${
                  isSelectDepth2 === index2 ? "category-select__depth3--open" : ""
                }`}
              >
                {depth3List.map((item3: CodesProps) => (
                  <li key={item3.code}>
                      <Checkbox
                        id="test"
                        size="h24"
                        isChecked={isChecked}
                        onChange={setIsChecked}
                      >
                        {item3.codeName}
                      </Checkbox>
                  </li>
                ))}
              </ul>
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

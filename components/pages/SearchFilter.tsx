import { useState, useEffect } from "react";
import Chips from "@/components/Chips/Chips";
import { useFilterStore } from "@/store/item";
import codes from "@/utils/constants";

interface PropsTypes {
  onHandler: React.MouseEventHandler;
}
interface CodeProps {
  code: string;
  codename: string;
}

const SearchFilter = ({ onHandler }: PropsTypes) => {
  const { filterList, setFilterList } = useFilterStore();
  const [chipsList, setChipsList] = useState();
  const onChipsDelete = (code: string) => {
    console.log(`${code}번 삭제`);
    setFilterList(filterList.filter((chips) => chips !== code));
  };
  return (
    <div className="search__filter">
      <div className="search__filter--keyword">
        {codes.marketItemCategory.filterList
          .filter((list) => filterList.includes(list.code))
          .map((item) => (
            <Chips
              id={item.code}
              name={item.codename}
              key={item.code}
              onHandler={() => onChipsDelete(item.code)}
            />
          ))}
      </div>
      <button
        className="search__filter--button"
        type="button"
        onClick={onHandler}
      >
        <span className="blind">카테고리</span>
      </button>
    </div>
  );
};
export default SearchFilter;

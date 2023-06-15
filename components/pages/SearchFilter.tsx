import { useState, useEffect } from "react";
import Chips from "@/components/Chips/Chips";
import { useFilterStore } from "@/store/item";
import codes from "@/utils/constants";
import { MarketItemType } from "@/utils/types";

interface PropsTypes {
  onHandler: React.MouseEventHandler;
}
interface CodeProps {
  code: string;
  codename: string;
}

const SearchFilter = ({ onHandler }: PropsTypes) => {
  const { filterList, setFilterList } = useFilterStore();
  const onChipsDelete = (code: string) => {
    console.log(filterList, `${code}번 삭제`);
    setFilterList(filterList.filter((chips) => chips !== code));
  };

  const filteringList = (list: CodeProps) => {
    if (filterList !== undefined) {
      return filterList.includes(list.code);
    } else {
      return false;
    }
  };

  return (
    <div className="search__filter">
      <div className="search__filter--keyword">
        <div className="inner">
          {codes.marketItemCategory.filterList
            .filter((list) => filteringList(list))
            .map((item) => (
              <Chips
                id={item.code}
                name={item.codename}
                key={item.code}
                onHandler={() => onChipsDelete(item.code)}
              />
            ))}
        </div>
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

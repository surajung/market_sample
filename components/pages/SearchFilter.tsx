import { useState, useEffect } from "react";
import Chips from "@/components/Chips/Chips";

interface PropsTypes {
  onHandler: React.MouseEventHandler;
}
interface Menus {
  id: number;
  name: string;
}

const SearchFilter = ({ onHandler }: PropsTypes) => {
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
  return (
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

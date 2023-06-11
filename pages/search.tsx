import {useState} from "react"
import DefaultLayout from "@/components/layout/DefaultLayout"
import TextInput from "@/components/TextInput/TextInput"
const Search = () => {
  const [keyword, setKeyword] = useState("");
  return (
    <DefaultLayout>
      <div className="search">
        <div className="search__textfield">
          <TextInput
            id="search"
            value={keyword}
            placeholder="검색어"
            size="h40"
            maxLength={30}
            onChange={(e) => setKeyword(e.target.value)}
          ></TextInput>
          <button className="button__cart" type="button">
            <span className="blind">장바구니</span>
          </button>
        </div>
        <ul className="search__autocorrect">
          <li>
            <span className="point">TEXT</span>
            test
            <button className="search__autocorrect--select" type="button"><span className="blind">선택</span></button>
          </li>
        </ul>
      </div>
    </DefaultLayout>
  )
}
export default Search;
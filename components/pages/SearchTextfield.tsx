import {useState,useEffect} from "react"
import TextInput from "@/components/TextInput/TextInput"
import Link from "next/link"

const SearchTextfield = () => {
  const [keyword, setKeyword] = useState("");
  return (
    <>
      <div className="search__textfield">
        <TextInput
          id="search"
          value={keyword}
          placeholder="검색어"
          size="h40"
          maxLength={30}
          onChange={(e) => setKeyword(e.target.value)}
        ></TextInput>
        <Link href="./cart">
          <button className="button__cart-page" type="button">
            <span className="blind">장바구니</span>
          </button>
        </Link>
      </div>
      {false && (
        <ul className="search__autocorrect">
          <li>
            <span className="point">TEXT</span>
            test
            <button className="search__autocorrect--select" type="button"><span className="blind">선택</span></button>
          </li>
        </ul>
      )}
    </>
  )
}
export default SearchTextfield;
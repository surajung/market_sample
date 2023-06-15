import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DefaultLayout from "@/components/layout/DefaultLayout";
import SearchTextfield from "@/components/pages/SearchTextfield";
import SearchFilter from "@/components/pages/SearchFilter";
import SearchList from "@/components/pages/SearchList";
import Modal from "@/components/Modal/Modal";
import CategorySelect from "@/components/CategorySelect/CategorySelect";
import { useFilterStore } from "@/store/item";

const Search = () => {
  const router = useRouter();
  const [isModal, setIsModal] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");
  // 카테고리 3뎁스에서 선택된값
  const { setFilterList } = useFilterStore();

  /**
   * 필터 모달 토글
   */
  const toggleModal = () => {
    setIsModal((prev) => !prev);
  };

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    /**
     * url query string에 검색키워드&카테고리 있을때 리스트 필터링
     */
    if (typeof router.query.keyword === "string") {
      setKeyword(router.query.keyword);
      setFilterList([]);
    } else if (typeof router.query.filter === "object") {
      setFilterList(router.query.filter);
    } else if (typeof router.query.filter === "string") {
      setFilterList([router.query.filter]);
    }
  }, [router.isReady, router.query, setFilterList]);

  return (
    <DefaultLayout>
      <div className="search">
        <SearchTextfield keywordQuery={keyword} />
        <SearchFilter onHandler={toggleModal} />
        <SearchList keywordQuery={keyword} />
      </div>
      {isModal && (
        <Modal title="카테고리" height="500px" onHandler={toggleModal}>
          <CategorySelect setKeyword={setKeyword} onHandler={toggleModal} />
        </Modal>
      )}
    </DefaultLayout>
  );
};
export default Search;

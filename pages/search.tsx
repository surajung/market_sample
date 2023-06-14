import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DefaultLayout from "@/components/layout/DefaultLayout";
import SearchTextfield from "@/components/pages/SearchTextfield";
import SearchFilter from "@/components/pages/SearchFilter";
import SearchList from "@/components/pages/SearchList";
import Modal from "@/components/Modal/Modal";
import CategorySelect from "@/components/CategorySelect/CategorySelect";

const Search = () => {
  const router = useRouter();
  const [isModal, setIsModal] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");

  /**
   * 필터 모달 토글
   */
  const toggleModal = () => {
    setIsModal((prev) => !prev);
  };

  /**
   * 파라미터에 검색키워드 주입시 리스트 필터링
   */
  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    if (typeof router.query.keyword === "string") {
      setKeyword(router.query.keyword);
    }
  }, [router.isReady, router.query.keyword]);

  return (
    <DefaultLayout>
      <div className="search">
        <SearchTextfield keywordQuery={keyword} />
        <SearchFilter onHandler={toggleModal} />
        <SearchList keywordQuery={keyword} />
      </div>
      {isModal && (
        <Modal title="카테고리" height="500px" onHandler={toggleModal}>
          <CategorySelect />
        </Modal>
      )}
    </DefaultLayout>
  );
};
export default Search;

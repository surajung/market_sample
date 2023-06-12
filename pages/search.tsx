import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DefaultLayout from "@/components/layout/DefaultLayout";
import SearchTextfield from "@/components/pages/SearchTextfield";
import SearchFilter from "@/components/pages/SearchFilter";
import SearchList from "@/components/pages/SearchList";
import Modal from "@/components/Modal/Modal";
import CategorySelect from "@/components/CategorySelect/CategorySelect";
import Spinner from "@/components/Spinner/Spinner";
import useItemList from "@/hook/useItemList";
import { useItemStore } from "@/store/item";
import { MarketItemType } from "@/utils/types";

const Search = () => {
  const router = useRouter();
  const [isModal, setIsModal] = useState(false);
  const [keyword, setKeyword] = useState("");
  const itemList = useItemStore<MarketItemType[]>((state: any) => state.item);
  const [searchResult, setSearchResult] = useState<MarketItemType[]>([]);

  const { status } = useItemList();

  const toggleModal = () => {
    setIsModal((prev) => !prev);
  };

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    if (typeof router.query.keyword === "string") {
      setKeyword(router.query.keyword);
    }
  }, [router.query]);

  if (status !== "success") {
    return <Spinner />;
  } else {
    return (
      <DefaultLayout>
        <div className="search">
          <SearchTextfield keywordQuery={keyword} />
          <SearchFilter onHandler={toggleModal} />
          <SearchList keywordQuery={keyword} itemList={itemList} />
        </div>
        {isModal && (
          <Modal title="제목" height="500px" onHandler={toggleModal}>
            <CategorySelect />
          </Modal>
        )}
      </DefaultLayout>
    );
  }
};
export default Search;

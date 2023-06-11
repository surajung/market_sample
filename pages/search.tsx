import {useState} from "react"
import DefaultLayout from "@/components/layout/DefaultLayout"
import SearchTextfield from "@/components/pages/SearchTextfield"
import SearchFilter from "@/components/pages/SearchFilter"
import SearchList from "@/components/pages/SearchList"
import Modal from "@/components/Modal/Modal";
import CategorySelect from "@/components/CategorySelect/CategorySelect";

const Search = () => {
  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal(prev => !prev)
  }
  return (
    <DefaultLayout>
      <div className="search">
        <SearchTextfield/>
        <SearchFilter onHandler={() => toggleModal()}/>
        <SearchList/>
      </div>
      {isModal && (
        <Modal title="제목" height="500px" onHandler={() => toggleModal()}>
          <CategorySelect />
        </Modal>
        )}
    </DefaultLayout>
  )
}
export default Search;
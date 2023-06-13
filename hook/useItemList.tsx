import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MarketItemType } from "@/utils/types";
// import { useItemStore } from "@/store/item";

const getList = async () => {
  const response = await axios.get("/api/market");
  return response.data.result;
};
const useItemList = () => {
  // const { item, setItem } = useItemStore((state: any) => state);
  const { status, data } = useQuery<MarketItemType[]>(["itemList"], getList, {
    // onSuccess: (data) => {
    //   setItem(data);
    // },
  });
  return { status, data };
};
export default useItemList;

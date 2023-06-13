import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MarketItemType } from "@/utils/types";

/**
 * mock data request
 */
const getList = async () => {
  const response = await axios.get("/api/market");
  return response.data.result;
};

/**
 * 아이템 리스트 요청, query key를 통해 캐싱
 * 캐싱설정은 /_app.tsx
 * @returns status fetching status
 * @returns data reponse data
 */
const useItemList = () => {
  const { status, data } = useQuery<MarketItemType[]>(["itemList"], getList);
  return { status, data };
};
export default useItemList;

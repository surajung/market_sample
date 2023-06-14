import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useFilterItemStore } from "@/store/item";
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
interface paramsType {
  depth1?: string | undefined;
  depth2?: string | undefined;
  depth3?: string | undefined;
}
const useItemList = () => {
  const { setItemDepth1, setItemDepth2, setItemDepth3 } = useFilterItemStore();
  const { isLoading, data, isFetching } = useQuery<MarketItemType[]>(
    ["itemList"],
    getList,
    {
      onSuccess(data) {
        setItemDepth1(data.filter((list) => list.depth1 === "a1"));
        setItemDepth2(data.filter((list) => list.depth1 === "a2"));
        setItemDepth3(data.filter((list) => list.depth1 === "a3"));
      },
    }
  );
  return { isLoading, data, isFetching };
};
export default useItemList;

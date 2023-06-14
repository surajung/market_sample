import { useState } from "react";
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
interface paramsType {
  depth1?: string | undefined;
  depth2?: string | undefined;
  depth3?: string | undefined;
}
const useItemList = (params?: paramsType) => {
  const [result, setResult] = useState<MarketItemType[]>();
  const { status, data } = useQuery<MarketItemType[]>(["itemList"], getList, {
    onSuccess(data) {
      if (params === undefined) {
        setResult(data);
      } else {
        setResult(
          data.filter((list) => {
            const isDepth1 = list.depth1 === params.depth1;
            const isDepth2 = params.depth2
              ? list.depth2 === params.depth2
              : true;
            const isDepth3 = params.depth3
              ? list.depth3 === params.depth3
              : true;
            return isDepth1 && isDepth2 && isDepth3;
          })
        );
      }
    },
  });
  return { status, result };
};
export default useItemList;

import { useEffect } from "react";
import SearchBar from "../components/SearchBar";

import { useRequest } from "@src/service/useRequest";
import { getAllExampleMbtiUsingGet } from "@src/service/apis/mbtiapp";

export default function Index() {
  const [fetchExampleData, exampleData] = useRequest(
    getAllExampleMbtiUsingGet,
    {
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );

  useEffect(() => {
    fetchExampleData();
  }, []);

  return (
    <div>
      <SearchBar />
    </div>
  );
}

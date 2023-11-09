import { useRequest } from "@src/service/useRequest";
import { getPersonByNameUsingGet } from "@src/service/apis/mbtiapp";
import { useEffect } from "react";

export default function PersonDetailsComponent({ name, mbti }) {
  const [getPersonByName, person] = useRequest(getPersonByNameUsingGet);

  useEffect(() => {
    getPersonByName({ name: name });
  }, []);
  return (
    <div>
      <h1>{name}</h1>
      <h1>{JSON.stringify(mbti)}</h1>
      <h1>{JSON.stringify(person?.data.data)}</h1>
    </div>
  );
}

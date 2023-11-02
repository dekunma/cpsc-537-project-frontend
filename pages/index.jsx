import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";

import { useRequest } from "@src/service/useRequest";
import { getAllExampleMbtiUsingGet } from "@src/service/apis/mbtiapp";
import "react-loading-skeleton/dist/skeleton.css";
import PersonCard from "../components/PersonCard";

export default function Index() {
  const fakePeopleData = [
    { name: "John", subTitle: "John subtitle" },
    { name: "Bob", subTitle: "Bob subtitle" },
    { name: "Alice", subTitle: "Alice subtitle" },
    { name: "Jane", subTitle: "Jane subtitle" },
    { name: "Kate", subTitle: "Kate subtitle" },
    { name: "Jenny", subTitle: "Jenny subtitle" },
    { name: "Jill", subTitle: "Jill subtitle" },
    { name: "Jack", subTitle: "Jack subtitle" },
    { name: "Jill", subTitle: "Jill subtitle" },
    { name: "Jack", subTitle: "Jack subtitle" },
  ];

  const emptyPeopleData = new Array(10).fill({ name: "", subTitle: "" });

  const [peopleData, setPeopleData] = useState(emptyPeopleData);

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
    setTimeout(() => {
      setPeopleData(fakePeopleData);
    }, 3000);
  }, []);

  return (
    <div>
      <SearchBar />
      {peopleData.map((person, idx) => (
        <PersonCard key={idx} title={person.name} subTitle={person.subTitle} />
      ))}
    </div>
  );
}

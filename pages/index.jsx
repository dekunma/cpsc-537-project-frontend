import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

import { useRequest } from "@src/service/useRequest";
import { getAllExampleMbtiUsingGet } from "@src/service/apis/mbtiapp";
import "react-loading-skeleton/dist/skeleton.css";
import PersonCard from "../components/PersonCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

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

  const fetchFakeData = () => {
    setPeopleData(emptyPeopleData);
    setTimeout(() => {
      setPeopleData(fakePeopleData);
    }, 3000);
  };

  useEffect(() => {
    fetchExampleData();
    fetchFakeData();
  }, []);

  return (
    <div>
      <SearchBar />
      <div className="w-full grid grid-cols-1">
        <button className="btn btn-link w-full" onClick={fetchFakeData}>
          <FontAwesomeIcon icon={faArrowsRotate} size="lg" />
          10 New Random People
        </button>

        {peopleData.map((person, idx) => (
          <PersonCard
            key={idx}
            title={person.name}
            subTitle={person.subTitle}
          />
        ))}
      </div>
    </div>
  );
}

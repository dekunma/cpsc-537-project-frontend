import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

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
import SearchBar from "../components/SearchBar";

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
      <NavBar />
      <div className="w-full grid grid-cols-1">
        <SearchBar />
        <div className="w-full my-6 flex justify-center">
          <button className="btn btn-link" onClick={fetchFakeData}>
            <FontAwesomeIcon icon={faArrowsRotate} size="lg" />
            10 New Random People
          </button>
        </div>

        <dialog id="guess-modal" className="modal">
          <div className="modal-box">
            <h1>TO BE REPLACED</h1>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </dialog>

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

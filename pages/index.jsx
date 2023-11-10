import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

import { useRequest } from "@src/service/useRequest";
import { getTenRandomPeopleUsingGet } from "@src/service/apis/mbtiapp";
import "react-loading-skeleton/dist/skeleton.css";
import PersonCard from "../components/PersonCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../components/SearchBar";
import MBTIGuessComponent from "../components/MBTIGuessComponent";
import PersonDetailsComponent from "../components/PersonDetailsComponent";

export default function Index() {
  const emptyPeopleData = new Array(10).fill({ name: "", subTitle: null });
  const [isLoading, setIsLoading] = useState(true);

  const [currentName, setCurrentName] = useState("");
  const [guess, setGuess] = useState({
    EorI: "",
    NorS: "",
    TorF: "",
    JorP: "",
  });
  const [continuedToDetails, setContinuedToDetails] = useState(false);

  const [getTenRandomPeople, tenRandomPeople] = useRequest(
    getTenRandomPeopleUsingGet,
    {
      onSuccess: () => {
        setIsLoading(false);
      },
    }
  );

  const onClickGuess = (name) => {
    document.getElementById("guess-modal").showModal();
    setCurrentName(name);
  };

  const clearGuess = () => {
    setTimeout(() => {
      setGuess({
        EorI: "",
        NorS: "",
        TorF: "",
        JorP: "",
      });
      setContinuedToDetails(false);
    }, 200);
  };

  const onClickGetRandom = () => {
    setIsLoading(true);
    getTenRandomPeople();
  };

  useEffect(() => {
    getTenRandomPeople();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="w-full grid grid-cols-1">
        <SearchBar />
        <div className="w-full my-6 flex justify-center">
          <button className="btn btn-link" onClick={onClickGetRandom}>
            <FontAwesomeIcon icon={faArrowsRotate} size="lg" />
            10 New Random People
          </button>
        </div>
      </div>

      <dialog id="guess-modal" className="modal">
        <div className="modal-box">
          {continuedToDetails ? (
            <PersonDetailsComponent name={currentName} mbti={guess} />
          ) : (
            <MBTIGuessComponent
              name={currentName}
              guess={guess}
              setGuess={setGuess}
              onContinue={setContinuedToDetails}
            />
          )}
        </div>

        {/* Close outside to close */}
        <form method="dialog" className="modal-backdrop">
          <button onClick={clearGuess}>close</button>
        </form>
      </dialog>

      <div className="w-full flex justify-center">
        <div className="w-2/3 grid xl:grid-cols-2 grid-cols-1">
          {(isLoading ? emptyPeopleData : tenRandomPeople.data.data).map(
            (person, idx) => (
              <PersonCard
                key={idx}
                title={person.name}
                description={
                  person.description === "" ? "-" : person.description
                }
                onClickGuess={() => onClickGuess(person.name)}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

import React from "react";

function MBTIGuessComponent({ name, guess, setGuess, onContinue }) {
  const handleGuess = (type, value) => {
    setGuess((prevState) => ({ ...prevState, [type]: value }));
  };

  const getMBTI = () => {
    return `${guess.EorI}${guess.NorS}${guess.TorF}${guess.JorP}`;
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-xl mb-5">Guess MBTI of</p>
      <p className="text-xl font-bold mb-5">{name}</p>
      <div className="flex justify-between mb-5">
        <div className="flex items-center ml-2">
          <input
            type="radio"
            id="EorI_E"
            name="EorI"
            className="hidden peer"
            onChange={() => handleGuess("EorI", "E")}
          />
          <label
            htmlFor="EorI_E"
            title="E (Extraversion): Energized by interaction and external stimuli, extroverts often seek social environments and are outgoing"
            className="peer-checked:bg-gray-100 w-10 h-10 text-center leading-8 cursor-pointer border border-gray-300 rounded px-2.5 mr-2.5"
          >
            E
          </label>
        </div>
        <div className="flex items-center ml-0.5">
          <input
            type="radio"
            id="EorI_I"
            name="EorI"
            className="hidden peer"
            onChange={() => handleGuess("EorI", "I")}
          />
          <label
            htmlFor="EorI_I"
            title="I (Introversion): Introverts tend to be introspective, preferring solitude or small group interactions and often engage in deep reflection"
            className="peer-checked:bg-gray-100 w-10 h-10 text-center leading-8 cursor-pointer border border-gray-300 rounded px-2.5 mr-2.5"
          >
            I
          </label>
        </div>
        <div className="flex items-center ml-2">
          <input
            type="radio"
            id="NorS_N"
            name="NorS"
            className="hidden peer"
            onChange={() => handleGuess("NorS", "N")}
          />
          <label
            htmlFor="NorS_N"
            title="N (Intuition): Intuitives focus on abstract concepts, possibilities, and the bigger picture, often thinking about the future."
            className="peer-checked:bg-gray-100 w-10 h-10 text-center leading-8 cursor-pointer border border-gray-300 rounded px-2.5 mr-2.5"
          >
            N
          </label>
        </div>
        <div className="flex items-center ml-0.5">
          <input
            type="radio"
            id="NorS_S"
            name="NorS"
            className="hidden peer"
            onChange={() => handleGuess("NorS", "S")}
          />
          <label
            htmlFor="NorS_S"
            title="S (Sensing): Sensing individuals rely on concrete facts, details, and experiences, often living in the present moment."
            className="peer-checked:bg-gray-100 w-10 h-10 text-center leading-8 cursor-pointer border border-gray-300 rounded px-2.5 mr-2.5"
          >
            S
          </label>
        </div>
      </div>
      <div className="flex justify-between mb-5">
        <div className="flex items-center ml-2">
          <input
            type="radio"
            id="TorF_T"
            name="TorF"
            className="hidden peer"
            onChange={() => handleGuess("TorF", "T")}
          />
          <label
            htmlFor="TorF_T"
            title="T (Thinking): Thinkers base decisions on logic, consistency, and objective analysis, often prioritizing the truth over emotions."
            className="peer-checked:bg-gray-100 w-10 h-10 text-center leading-8 cursor-pointer border border-gray-300 rounded px-2.5 mr-2.5"
          >
            T
          </label>
        </div>
        <div className="flex items-center ml-0.5">

          <input
            type="radio"
            id="TorF_F"
            name="TorF"
            className="hidden peer"
            style={{ marginRight: "50px" }}
            onChange={() => handleGuess("TorF", "F")}
          />
          <label
            htmlFor="TorF_F"
            title="F (Feeling): Feelers make decisions based on values, emotions, and harmony, often emphasizing human needs and relationships."
            className="peer-checked:bg-gray-100 w-10 h-10 text-center leading-8 cursor-pointer border border-gray-300 rounded px-2.5 mr-2.5"
          >
            F
          </label>
        </div>
        <div className="flex items-center ml-2">
          <input
            type="radio"
            id="JorP_J"
            name="JorP"
            className="hidden peer"
            onChange={() => handleGuess("JorP", "J")}
          />
          <label
            htmlFor="JorP_J"
            title="J (Judging): Judging types prefer structure, planning, and organization, often enjoying routines and clear expectations."
            className="peer-checked:bg-gray-100 w-10 h-10 text-center leading-8 cursor-pointer border border-gray-300 rounded px-2.5 mr-2.5"
          >
            J
          </label>
        </div>
        <div className="flex items-center ml-0.5">
          <input
            type="radio"
            id="JorP_P"
            name="JorP"
            className="hidden peer"
            onChange={() => handleGuess("JorP", "P")}
          />
          <label
            htmlFor="JorP_P"
            title="P (Perceiving): Perceiving individuals are adaptable, spontaneous, and open-ended, often resisting strict schedules or early final decisions."
            className="peer-checked:bg-gray-100 w-10 h-10 text-center leading-8 cursor-pointer border border-gray-300 rounded px-2.5 mr-2.5"
          >
            P
          </label>
        </div>
      </div>
      <div className="mb-2.5">
        Your Guess:
        {guess.EorI}
        {guess.NorS}
        {guess.TorF}
        {guess.JorP}
      </div>
      <button className="btn btn-primary tooltip tooltip-bottom w-30" onClick={onContinue}>
        Continue
      </button>
    </div>
  );
}

export default MBTIGuessComponent;

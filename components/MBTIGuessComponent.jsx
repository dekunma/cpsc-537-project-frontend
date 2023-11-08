import React from "react";

function MBTIGuessComponent({ name, guess, setGuess, onContinue }) {
  const handleGuess = (type, value) => {
    setGuess((prevState) => ({ ...prevState, [type]: value }));
  };

  const getMBTI = () => {
    return `${guess.EorI}${guess.NorS}${guess.TorF}${guess.JorP}`;
  };

  return (
    <div>
      <div className="radio-container">
        <p style={{ fontSize: "20px", marginBottom: "20px" }}>Guess MBTI of</p>
        <p style={{ fontSize: "20px", marginBottom: "20px" }}>{name}</p>
        <div class="btn-group">
          <div className="mbti-option" style={{ marginRight: "20px" }}>
            <input
              type="radio"
              id="EorI_E"
              name="EorI"
              className="radio radio-secondary"
              onChange={() => handleGuess("EorI", "E")}
            />
            <label
              htmlFor="EorI_E"
              title="E (Extraversion): Energized by interaction and external stimuli, extroverts often seek social environments and are outgoing"
            >
              E
            </label>

            <input
              type="radio"
              id="EorI_I"
              name="EorI"
              className="radio radio-secondary"
              onChange={() => handleGuess("EorI", "I")}
            />
            <label
              htmlFor="EorI_I"
              title="I (Introversion): Introverts tend to be introspective, preferring solitude or small group interactions and often engage in deep reflection"
            >
              I
            </label>
          </div>
          <div className="mbti-option">
            <input
              type="radio"
              id="NorS_N"
              name="NorS"
              className="radio radio-secondary"
              onChange={() => handleGuess("NorS", "N")}
            />
            <label
              htmlFor="NorS_N"
              title="N (Intuition): Intuitives focus on abstract concepts, possibilities, and the bigger picture, often thinking about the future."
            >
              N
            </label>

            <input
              type="radio"
              id="NorS_S"
              name="NorS"
              className="radio radio-secondary"
              onChange={() => handleGuess("NorS", "S")}
            />
            <label
              htmlFor="NorS_S"
              title="S (Sensing): Sensing individuals rely on concrete facts, details, and experiences, often living in the present moment."
            >
              S
            </label>
          </div>
        </div>
        <div class="btn-group">
          <div className="mbti-option" style={{ marginRight: "20px" }}>
            <input
              type="radio"
              id="TorF_T"
              name="TorF"
              className="radio radio-secondary"
              onChange={() => handleGuess("TorF", "T")}
            />
            <label
              htmlFor="TorF_T"
              title="T (Thinking): Thinkers base decisions on logic, consistency, and objective analysis, often prioritizing the truth over emotions."
            >
              T
            </label>

            <input
              type="radio"
              id="TorF_F"
              name="TorF"
              className="radio radio-secondary"
              style={{ marginRight: "50px" }}
              onChange={() => handleGuess("TorF", "F")}
            />
            <label
              htmlFor="TorF_F"
              title="F (Feeling): Feelers make decisions based on values, emotions, and harmony, often emphasizing human needs and relationships."
            >
              F
            </label>
          </div>
          <div className="mbti-option">
            <input
              type="radio"
              id="JorP_J"
              name="JorP"
              className="radio radio-secondary"
              onChange={() => handleGuess("JorP", "J")}
            />
            <label
              htmlFor="JorP_J"
              title="J (Judging): Judging types prefer structure, planning, and organization, often enjoying routines and clear expectations."
            >
              J
            </label>

            <input
              type="radio"
              id="JorP_P"
              name="JorP"
              className="radio radio-secondary"
              onChange={() => handleGuess("JorP", "P")}
            />
            <label
              htmlFor="JorP_P"
              title="P (Perceiving): Perceiving individuals are adaptable, spontaneous, and open-ended, often resisting strict schedules or early final decisions."
            >
              P
            </label>
          </div>
        </div>
        <div style={{ marginBottom: "10px" }}>
          Your Guess: {guess.EorI}
          {guess.NorS}
          {guess.TorF}
          {guess.JorP}
        </div>
        <button className="btn btn-active btn-neutral" onClick={onContinue}>
          Continue
        </button>
      </div>
      <style jsx>{`
        .btn {
          width: 200px;
          background-color: #6c757d;
          color: #ffffff;
        }
        .radio-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .mbti-option {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .btn-group {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .radio {
          display: none;
        }

        .radio + label {
          width: 40px;
          height: 40px;
          text-align: center;
          line-height: 30px;
          cursor: pointer;
          padding: 4px 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          display: inline-block;
          position: relative;
          margin-right: 10px;
        }

        .radio:checked + label {
          background-color: #007bff;
          color: #fff;
        }

        .radio-secondary + label {
          border-color: #6c757d;
        }

        .radio:checked.radio-secondary + label {
          background-color: #6c757d;
        }
      `}</style>
    </div>
  );
}

export default MBTIGuessComponent;

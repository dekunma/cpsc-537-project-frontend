import { useRequest } from "@src/service/useRequest";
import { getPersonByNameUsingGet } from "@src/service/apis/mbtiapp";
import React, { useState, useEffect } from 'react';

export default function ShowScore({ name, mbti, onClickGuess, onShowDetails }) {
    const [getPersonByName, person] = useRequest(getPersonByNameUsingGet);
    const [score, setScore] = useState(0);

    useEffect(() => {
        getPersonByName({ name: name });
    }, [name, getPersonByName]);

    useEffect(() => {
        if (person?.data?.data?.code && mbti) {
            const calculatedScore = calculateScore(person.data.data.code, mbti);
            setScore(calculatedScore);
        }
    }, [person, mbti]);

    const calculateScore = (realMBTI, guessedMBTIObject) => {
        const guessedMBTI = `${guessedMBTIObject.EorI}${guessedMBTIObject.NorS}${guessedMBTIObject.TorF}${guessedMBTIObject.JorP}`;

        let points = 0;

        if (realMBTI && guessedMBTI && realMBTI.length === guessedMBTI.length) {
            for (let i = 0; i < realMBTI.length; i++) {
                if (realMBTI[i] === guessedMBTI[i]) {
                    points += 1;
                }
            }
        }
        return points;
    };
    return (
        <div className="flex flex-col items-center justify-center overflow-hidden">
            <h1 className="text-2xl font-bold mt-4 mb-2">{name}</h1>
            <p className="mb-2">
                You guessed <strong>{mbti.EorI}{mbti.NorS}{mbti.TorF}{mbti.JorP}</strong>
            </p>
            <p className="mb-4">Your score is: <strong>{score}</strong> out of 4.</p>
            <div className="card-actions justify-center">
                <button
                    className="btn btn-primary tooltip tooltip-bottom w-30"
                    data-tip="Guess Again"
                    onClick={onClickGuess}
                >
                    Guess Again
                </button>
                <button
                    className="btn btn-ghost tooltip tooltip-bottom w-30"
                    data-tip="Show Answer"
                    onClick={onShowDetails}
                >
                    Show Answer
                </button>
            </div>
        </div>
    );
}

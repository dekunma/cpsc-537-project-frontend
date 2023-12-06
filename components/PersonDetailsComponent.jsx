import { useRequest } from "@src/service/useRequest";
import { getPersonByNameUsingGet } from "@src/service/apis/mbtiapp";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function PersonDetailsComponent({ name }) {
  const [getPersonByName, person] = useRequest(getPersonByNameUsingGet);
  useEffect(() => {
    getPersonByName({ name: name });
  }, [name, getPersonByName]);

  const firstVote = person?.data.data.firstLetterVotesPercentage
    ? parseInt(person?.data.data.firstLetterVotesPercentage, 10)
    : 0;
  const secondVote = person?.data.data.secondLetterVotesPercentage
    ? parseInt(person?.data.data.secondLetterVotesPercentage, 10)
    : 0;
  const thirdVote = person?.data.data.thirdLetterVotesPercentage
    ? parseInt(person?.data.data.thirdLetterVotesPercentage, 10)
    : 0;
  const fourthVote = person?.data.data.fourthLetterVotesPercentage
    ? parseInt(person?.data.data.fourthLetterVotesPercentage, 10)
    : 0;
  const imagePath = `/images/${person?.data.data.code.toLowerCase()}.png`;

  return (
    <div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="flex items-center ">
          <div className="image-container mr-5">
            <Image src={imagePath} width={300} height={400} />
          </div>
          <div>
            <h1 className="text-2xl font-bold mt-1 mb-1">{name}</h1>
            <p className="text-md mb-1">
              <span className="font-semibold">MBTI Type:</span>{" "}
              {person?.data.data.code} ({person?.data.data.label})
            </p>
            <p className="text-md mb-1">
              <span className="font-semibold">Description:</span>{" "}
              {person?.data.data.description}
            </p>
          </div>
        </div>
        <div className="mt-4 mb-4">
          <span className="font-semibold">Functions:</span>
          <ul className="list-disc list-inside">
            <li>First Function: {person?.data.data.firstFunction}</li>
            <li>Second Function: {person?.data.data.secondFunction}</li>
            <li>Third Function: {person?.data.data.thirdFunction}</li>
            <li>Fourth Function: {person?.data.data.fourthFunction}</li>
          </ul>
        </div>
        <div></div>
        {person?.data.data.movie != null && (
          <p className="text-md">
            <span className="font-semibold">Movie:</span>{" "}
            {person.data.data.movie}
          </p>
        )}
        {person?.data.data.totalVotes != null && (
          <div className="container mx-auto px-4 py-2">
            <p className="text-md">
              <span className="font-semibold">Total Votes:</span>{" "}
              {person.data.data.totalVotes}
            </p>
            <p className="text-md mt-1">Letters Votes Percentages:</p>
            <div className="flex flex-row">
              <div className="flex flex-col items-center mt-4 mr-2">
                <div
                  className="radial-progress bg-primary text-primary-content border-4 border-primary"
                  style={{ "--value": firstVote }}
                  role="progressbar"
                >
                  {firstVote}%
                </div>
                <p className="mt-2">
                  <span>{person.data.data.code[0]}</span>
                </p>
              </div>
              <div className="flex flex-col items-center mt-4 mr-2">
                <div
                  className="radial-progress bg-primary text-primary-content border-4 border-primary"
                  style={{ "--value": secondVote }}
                  role="progressbar"
                >
                  {secondVote}%
                </div>
                <p className="mt-2">
                  <span>{person.data.data.code[1]}</span>
                </p>
              </div>
              <div className="flex flex-col items-center mt-4 mr-2">
                <div
                  className="radial-progress bg-primary text-primary-content border-4 border-primary"
                  style={{ "--value": thirdVote }}
                  role="progressbar"
                >
                  {thirdVote}%
                </div>
                <p className="mt-2">
                  <span>{person.data.data.code[2]}</span>
                </p>
              </div>
              <div className="flex flex-col items-center mt-4 mr-2">
                <div
                  className="radial-progress bg-primary text-primary-content border-4 border-primary"
                  style={{ "--value": fourthVote }}
                  role="progressbar"
                >
                  {fourthVote}%
                </div>
                <p className="mt-2">
                  <span>{person.data.data.code[3]}</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import { useContextResult } from "../../context/Context";
import "./randomWords.css";
let firstRender = false;
const RandomWords = () => {
  const { randomWords, wordNumber } = useContextResult();
  useEffect(() => {
    // console.log(randomWords);
    if (firstRender) {
      firstRender = true;
    }
  }, [wordNumber.number, firstRender, randomWords]);
  return (
    <>
      <div className="randomWords">
        {randomWords?.map((each, i) => (
          <span key={i}>{each}</span>
        ))}
      </div>
    </>
  );
};

export default RandomWords;

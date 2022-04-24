import React, { useEffect, useState } from "react";
import "./appBar.css";
import { BsSearch } from "react-icons/bs";
import { useContextResult } from "../../context/Context";
const AppBar = () => {
  const {
    wordNumber,
    setWordNumber,
    error,
    setError,
    getRandomWords,
    randomWords,
  } = useContextResult();

  const checkInput = () => {
    console.log(wordNumber);
    const { number, status } = wordNumber;
    if (number) {
      if (number == Number(number)) {
        if (Number(number) >= 1 && Number(number) <= 6) {
          console.log("your are ok");
          setError("");
          setWordNumber({ ...wordNumber, status: true });
          getRandomWords();
          console.log(randomWords);
        } else {
          setError("Sorry! Number is not validate");
        }
      } else {
        setError("Sorry! This is not a number");
      }
    } else {
      setError("Sorry! No value found! ");
    }
  };
  useEffect(() => {
    // console.log(wordNumber.number);
  }, [wordNumber, randomWords]);
  return (
    <div className="appBar">
      <div className="logo">
        <h2>MusicBrainz Records</h2>
      </div>
      <div className="inputSection">
        <div className="input">
          <input
            type="text"
            title="number"
            placeholder="Type a number 1 to 6 !"
            autoComplete="off"
            value={wordNumber.number}
            onChange={(e) =>
              setWordNumber({ ...wordNumber, number: e.target.value })
            }
          />
          <button type="button" onClick={checkInput}>
            <BsSearch />
          </button>
        </div>
        <div className="error">{error && <small>{error}</small>}</div>
      </div>
    </div>
  );
};

export default AppBar;

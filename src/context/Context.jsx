import React, { createContext, useContext, useState, useEffect } from "react";
import XMLParser from "react-xml-parser";

const context = createContext();
const Context = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [wordNumber, setWordNumber] = useState({
    number: "",
    status: false,
  });
  const [error, setError] = useState("");
  const [randomWords, setRandomWords] = useState([]);
  const [records, setRecords] = useState([]);
  let [count, setCount] = useState(0);
  const getRandomWords = async () => {
    try {
      const response = await fetch("https://random-words-api.vercel.app/word");
      const data = await response.json();
      // console.log(data[0].word);
      const newWord = data[0].word;
      if (data) {
        // let isItInAlreadyWords = randomWords.find((word) => word === newWord);
        let isItInAlreadyWords = randomWords.includes(newWord);
        console.log(isItInAlreadyWords);
        if (!isItInAlreadyWords) {
          getRecords(newWord);
          randomWords.push(newWord);
        } else {
          getRandomWords();
        }
        if (randomWords.length <= wordNumber.number) {
          // console.log(randomWords);
          getRandomWords();
        } else {
          setWordNumber({ number: "", status: false });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getRecords = async (word) => {
    try {
      const response = await fetch(
        `https://musicbrainz.org/ws/2/recording?query=${word}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify(recording),
        }
      );
      const data = await response.text();
      var xml = new XMLParser().parseFromString(data);
      const { children } = xml;
      let eachRecord = children[0].children[0];
      // console.log(eachRecord);
      setCount(count++);
      if (eachRecord) {
        // setRecords(...records, eachRecord);
        console.log(children[0].children[0].children);
        const newRecord = children[0].children[0].children;
        const title = children[0].children[0].children[0].value;
        const artist =
          children[0].children[0].children[2].children[0].children[0].value;
        const newObject = {
          wordName: word,
          titleName: title,
          artistName: artist,
        };
        // console.log(newObject);
        // records.push(children[0].children[0]);
        records.push(newObject);

        // console.log(records);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <context.Provider
      value={{
        isLoading,
        wordNumber,
        setWordNumber,
        error,
        setError,
        getRandomWords,
        randomWords,
        records,
        count,
      }}
    >
      {children}
    </context.Provider>
  );
};
export default Context;
export const useContextResult = () => useContext(context);

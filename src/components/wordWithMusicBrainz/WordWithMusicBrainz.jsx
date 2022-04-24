import React, { useEffect } from "react";
import { useContextResult } from "../../context/Context";
import "./wordWithMusicBrainz.css";
const WordWithMusicBrainz = () => {
  const array = [1, 3, 4, 5, 3, 3, 3, 3, 3];
  const { records, wordNumber, randomWords, count } = useContextResult();
  useEffect(() => {
    // console.log(records);
    // console.log(count);
  }, [records]);
  useEffect(() => {
    // console.log(wordNumber.number);
    console.log(records);
    // console.log(count);
  }, [wordNumber, randomWords]);
  return (
    <>
      <div className="wordWithMusicBrainz">
        <h2>we got {records.length} results</h2>
        <div className="records">
          {records?.map((record, i) => {
            const { wordName, artistName, titleName } = record;
            return (
              <div className="eachRecord" key={i}>
                <span className="word">{wordName ? wordName : ""}</span>
                <div className="record">
                  <span className="title">
                    Title : {titleName ? titleName : ""}
                  </span>
                  <span className="artist">
                    Artist :{artistName ? artistName : ""}
                  </span>
                  {/* <span className="album">Album : osifosid lif lsn </span> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="wordWithMusicBrainz">
        {array?.map((each, i) => (
          <div className="eachRecord" key={i}>
            <span className="word">MusicBrain</span>
            <div className="record">
              <span className="title">Title : We Will Rock you</span>
              <span className="artist">Artist :Quean</span>
              <span className="album">Album : osifosid lif lsn </span>
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default WordWithMusicBrainz;

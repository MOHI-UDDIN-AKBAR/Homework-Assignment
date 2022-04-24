import React, { useEffect } from "react";
import AppBar from "./components/appBar/AppBar";
import RandomWords from "./components/randomWords/RandomWords";
import WordWithMusicBrainz from "./components/wordWithMusicBrainz/WordWithMusicBrainz";
import Footer from "./components/Footer/Footer";
import { useContextResult } from "./context/Context";
const App = () => {
  const { isLoading } = useContextResult();
  useEffect(() => {
    console.log(isLoading);
  });
  return (
    <React.Fragment>
      <AppBar />
      <RandomWords />
      <WordWithMusicBrainz />
      <Footer />
    </React.Fragment>
  );
};

export default App;

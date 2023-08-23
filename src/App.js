import React, { useState, Suspense, lazy } from "react";
import styles from "./App.module.css";
import CSVImporter from "./components/table/CSVImporter";
// import PreDefinedSQL from "./components/PreDefinedSQL";
import SQLeditor from "./components/editor/SQLeditor";
import dummyData from "./data/orders";
import arr from "./data/Randomarray";
import Header from "./components/Header";
const PreDefinedSQL = lazy(() => import("./components/PreDefinedSQL"));

function App() {
  const [randomOrders, setRandomOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [queryHistory, setQueryHistory] = useState([]);
  const [copiedText, setcopiedText] = useState("");

  const [colour, setColour] = useState({
    backgroundColor: "#f0f0f0",
    color: "grey",
  });
  const [colour2, setColour2] = useState({
    color: "#272829",
    backgroundColor: "#D8D9DA",
  });

  function renderarray(array) {
    return array?.map((index) => dummyData[index]);
  }

  const handleRunClick = () => {
    setIsLoading(true);
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const randomIndexes = Array.from({ length: randomNumber }, () =>
      Math.floor(Math.random() * dummyData?.length)
    );
    const selectedOrders = renderarray(randomIndexes);
    setTimeout(() => {
      setRandomOrders(selectedOrders);
      setIsLoading(false);
    }, 500);
  };

  const queryHistoryUpdateHandler = (newQuery) => {
    if (newQuery !== queryHistory[queryHistory.length - 1])
      setQueryHistory((prev) => [...prev, newQuery]);
  };

  const queryHistoryUpdateHandler2 = (upadtedHistory) => {
    setQueryHistory(upadtedHistory);
  };

  const callArray = (index) => {
    const selectedOrders = renderarray(arr[index]);
    setTimeout(() => {
      setRandomOrders(selectedOrders);
      setIsLoading(false);
    }, 500);
  };

  const copyText = (text) => {
    setcopiedText(text);
  };

  const handleColorChange = () => {
    if (colour.color === "grey")
      setColour({
        color: "white",
        backgroundColor: "#1D267D",
      });
    else
      setColour({
        backgroundColor: "#f0f0f0",
        color: "grey",
      });

    if (colour2.color === "#D8D9DA")
      setColour2({
        color: "#272829",
        backgroundColor: "#D8D9DA",
      });
    else
      setColour2({
        color: "#D8D9DA",
        backgroundColor: "#102C57",
      });
  };

  return (
    <div>
      <div className={styles.boxmain} style={colour2}>
        <Suspense fallback={<div>Please wait...</div>}>
          <div className={styles.box1} style={colour2}>
            <Header handleColorChange={handleColorChange} />
            <PreDefinedSQL
              callArray={callArray}
              queryHistory={queryHistory}
              setQueryHistory={queryHistoryUpdateHandler2}
              copyText={copyText}
            />
          </div>
        </Suspense>
        <div className={styles.box2} style={colour}>
          <div className={styles.editor} style={colour}>
            <SQLeditor
              handleRunClick={handleRunClick}
              isLoading={isLoading}
              updateQueryHistory={queryHistoryUpdateHandler}
              copy={copiedText}
              setCopy={setcopiedText}
            />
          </div>
          <div className={styles.tab}>
            <CSVImporter data={randomOrders} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

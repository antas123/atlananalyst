// import styles from "./App.module.css";
// import CSVImporter from "./components/CSVImporter";
// import PreDefinedSQL from "./components/PreDefinedSQL";
// import SQLeditor from "./components/editor/SQLeditor";
// import dummyData from "./data/orders";

// function App() {
//   return (
//     <div>
//       <div className={styles.boxmain}>
//         <div className={styles.box1}>
//           <PreDefinedSQL />
//         </div>
//         <div className={styles.box2}>
//           <div className={styles.editor}>
//             <SQLeditor />
//           </div>
//           <div className={styles.tab}>
//           <CSVImporter data={dummyData}/>
//           </div>
//         </div>
//       </div>
//       <div></div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import styles from './App.module.css';
import CSVImporter from './components/CSVImporter';
import PreDefinedSQL from './components/PreDefinedSQL';
import SQLeditor from './components/editor/SQLeditor';
import dummyData from './data/orders';
import arr from './data/Randomarray';

function App() {


  const [randomOrders, setRandomOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function renderarray(array){
    return array?.map((index) => dummyData[index]);
  }

  const handleRunClick = () => {
    setIsLoading(true);
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const randomIndexes = Array.from({ length: randomNumber }, () =>
      Math.floor(Math.random() * dummyData?.length)
    );
    const selectedOrders = renderarray(randomIndexes)
    // randomIndexes.map((index) => dummyData[index]);
    setTimeout(() => {
      setRandomOrders(selectedOrders);
      setIsLoading(false);
    }, 500);
  
  };

  const callArray=(index)=>{
       console.log(index);
       console.log(arr[index]);
       const selectedOrders = renderarray(arr[index])
       setTimeout(() => {
        setRandomOrders(selectedOrders);
        setIsLoading(false);
      }, 500);
  }

  console.log(randomOrders);

  return (
    <div>
      <div className={styles.boxmain}>
        <div className={styles.box1}>
          <PreDefinedSQL callArray={callArray}/>
        </div>
        <div className={styles.box2}>
          <div className={styles.editor}>
            <SQLeditor handleRunClick={handleRunClick} isLoading={isLoading}/>
          </div>
          <div className={styles.tab}>
            <CSVImporter data={randomOrders} isLoading={isLoading} />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;



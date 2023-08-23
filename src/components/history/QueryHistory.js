import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete'; 
import styles from "./Queryhistory.module.css"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const QueryHistory = ({ queryHistory, setQueryHistory }) => {
  const handleDeleteClick = (index) => {
    const updatedHistory = queryHistory.filter((data,i) => i !== index);
    setQueryHistory(updatedHistory);
  };

  const copyHistoryItem=(index)=>{
    if (queryHistory[index]) {
      navigator.clipboard.writeText(queryHistory[index]);
      alert('Copied to clipboard');
    } else {
      alert('Nothing to copy.');
    }
  }

  return (
    <div className={styles.queryHistoryContainer}>
      <h3 style={{color:"black"}}>Query History</h3>
      <div className={styles.queryHistoryList}>
        <ul>
          {queryHistory?.map((query, index) => (
            <li key={index} style={{color:"black"}}>
              {query}
              <div >
                <DeleteIcon style={{color:"red"}} onClick={() => handleDeleteClick(index)} />
                <ContentCopyIcon style={{color:"black"}} onClick={()=>copyHistoryItem(index)} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QueryHistory;


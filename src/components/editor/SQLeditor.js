import React, { useState, useEffect } from 'react';
import { TextareaAutosize } from '@mui/material';
import { Button } from '@mui/material';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import styles from './editor.module.css';

const SQLeditor = ({ handleRunClick, isLoading , updateQueryHistory, copy , setCopy}) => {
  const [query, setQuery] = useState('');
 
  useEffect(() => {
   setQuery(copy)
  }, [copy])
  

  const handleRunButtonClick = () => {
    if (query.trim() !== '') {
      handleRunClick();
      updateQueryHistory(query);
    } else {
      alert('Please enter an SQL query before running.');
    }
  };

  const handleClearButtonClick = () => {
    setQuery('');
    setCopy("")
  };

  const handleCopyButtonClick = () => {
    if (query.trim() !== '') {
      navigator.clipboard.writeText(query);
      alert('Copied to clipboard');
    } else {
      alert('Nothing to copy.');
    }
  };

  const handleDownloadTableClick = () => {
    const table = document.getElementById('result-table');
  
    if (table) {
      html2canvas(table).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('result-table.pdf');
      });
    }
  };
  


  return (
    <>
      <div>
        <h5>Write your SQL Query here</h5>
        <TextareaAutosize
          className={styles.editorarea}
          minRows={9}
          maxRows={10}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button style={{marginRight:"5px"}} variant="outlined" onClick={handleRunButtonClick} disabled={isLoading}>
          Run sql query
        </Button>
        <Button  style={{marginRight:"5px"}} variant="outlined" onClick={handleClearButtonClick}>Clear</Button>
        <Button  style={{marginRight:"5px"}} variant="outlined" onClick={handleCopyButtonClick}>Copy SQL Query</Button>
        <Button variant="outlined" onClick={handleDownloadTableClick}>Download Result table</Button>
      </div>
    </>
  );
};

export default SQLeditor;

// import React from 'react';
// import { TextareaAutosize } from '@mui/material';
// import { Button } from '@mui/material';

// import styles from './editor.module.css';

// const SQLeditor = () => {
//   return (
//     <>
//       <div>
//         <h5>Write your SQL Query here</h5>
//         <TextareaAutosize className={styles.editorarea} minRows={9} maxRows={10} />
//         <Button>Clear</Button>
//         <Button>Copy</Button>
//         <Button>Add as base query</Button>
//       </div>
//     </>
//   );
// };

// export default SQLeditor;

import React, { useState } from 'react';
import { TextareaAutosize } from '@mui/material';
import { Button } from '@mui/material';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import styles from './editor.module.css';

const SQLeditor = ({ handleRunClick, isLoading }) => {
  const [query, setQuery] = useState('');

  const handleRunButtonClick = () => {
    if (query.trim() !== '') {
      handleRunClick();
    } else {
      alert('Please enter an SQL query before running.');
    }
  };

  const handleClearButtonClick = () => {
    setQuery('');
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
        <Button onClick={handleRunButtonClick} disabled={isLoading}>
          Run
        </Button>
        <Button onClick={handleClearButtonClick}>Clear</Button>
        <Button onClick={handleCopyButtonClick}>Copy SQL Query</Button>
        <Button>Add as base query</Button>
        <Button onClick={handleDownloadTableClick}>Download Result table</Button>
      </div>
    </>
  );
};

export default SQLeditor;

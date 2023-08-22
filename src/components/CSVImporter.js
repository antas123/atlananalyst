// import React from 'react';
// import styles from './table.module.css'; // Import the CSS module

// const CSVImporter = ({ data }) => {
//   return (
//     <div className={styles.tablecontainer}>
//       <table className={styles.table}>
//         <thead>
//           <tr>
//             <th>Roll No</th>
//             <th>Name</th>
//             <th>Class</th>
//             <th>Age</th>
//             <th>Phone No</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data?.map((row, rowIndex) => (
//             <tr key={rowIndex}>
//               <td>{row.rollNo}</td>
//               <td>{row.name}</td>
//               <td>{row.class}</td>
//               <td>{row.age}</td>
//               <td>{row.phoneNo}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CSVImporter;

import React from 'react';
import styles from './table.module.css';

const CSVImporter = ({ data, isLoading }) => {
  return (
    <div className={styles.tablecontainer}>
      {isLoading ? (
        <div className={styles.loader}>Loading...</div>
      ) : (
        <table id="result-table" className={styles.table}>
         {data?.length ? (<thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>Class</th>
              <th>Age</th>
              <th>Phone No</th>
            </tr>
          </thead>): <h2> run some query to display data</h2>}
          <tbody>
            {data?.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>{row.rollNo}</td>
                <td>{row.name}</td>
                <td>{row.class}</td>
                <td>{row.age}</td>
                <td>{row.phoneNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CSVImporter;

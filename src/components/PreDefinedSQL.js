import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import { Button } from '@mui/material';
import dummyData from '../data/orders';
import arr from '../data/Randomarray';

const queries = [
  {
    query: "SELECT * FROM table_name;",
    description: "Select all records from the table."
  },
  {
    query: "SELECT DISTINCT Name FROM table_name;",
    description: "Select distinct names from the table."
  },
  {
    query: "SELECT * FROM table_name WHERE Age = 15;",
    description: "Select students who are aged 15."
  },
  {
    query: "SELECT Class, COUNT(*) AS StudentCount FROM table_name GROUP BY Class;",
    description: "Count the number of students in each class."
  },
  {
    query: "SELECT Name, COUNT(*) AS NameCount FROM table_name GROUP BY Name HAVING NameCount > 1;",
    description: "Select students who have the same name more than once."
  },
  {
    query: "UPDATE table_name SET `Phone No` = '555-123-4567' WHERE Roll No = 105;",
    description: "Update the phone number of a student."
  },
  {
    query: "DELETE FROM table_name WHERE Rowid NOT IN (SELECT MIN(Rowid) FROM table_name GROUP BY Roll No, Name, Class, Age, `Phone No`);",
    description: "Delete duplicate records from the table."
  },
  {
    query: "SELECT Roll No, Name, Age, Class FROM table_name;",
    description: "Select students with their age and class."
  },
  {
    query: "SELECT * FROM table_name ORDER BY Age DESC;",
    description: "Select and order students by age in descending order."
  },
  {
    query: "SELECT * FROM table_name WHERE `Phone No` IN (SELECT `Phone No` FROM table_name GROUP BY `Phone No` HAVING COUNT(*) > 1);",
    description: "Select students who have the same phone number."
  }
];

// export default queries;


export default function PreDefinedSQL({callArray}) {
  
  function renderRow(props) {
    const { index, style} = props; // Destructure the data prop here
    const query = queries[index];
  
    const handleShowTableClick = (index) => {
     callArray(index);
    };
  
    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
          <ListItemText primary={`${index + 1}. ${query.query}`} secondary={query.description} />
          <Button size="small" style={{ marginRight: '4px', fontSize: '10px', padding: '4px 8px' }}>
            Copy to textarea
          </Button>
          <Button
            size="small"
            onClick={()=>handleShowTableClick(index)} // Call the function when the button is clicked
            style={{ fontSize: '10px', padding: '4px 8px' }}
          >
            Show Table
          </Button>
        </ListItemButton>
      </ListItem>
    );
  }

  return (
    <Box
      sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
    >
      <h1>Atlan Analyser</h1>
      <div>
        <h3>Predefined Queries</h3>
        <FixedSizeList
          height={300}
          width={420}
          itemSize={150}
          itemCount={queries.length}
          overscanCount={5}
        >
          {renderRow}
        </FixedSizeList>
      </div>
    </Box>
  );
}

const queries = [
    {
      query: "SELECT * FROM table_name;",
      description: "Select all records from the table.",
    },
    {
      query:
        "SELECT * FROM table_name WHERE `Phone No` IN (SELECT `Phone No` FROM table_name GROUP BY `Phone No` HAVING COUNT(*) > 1);",
      description: "Select students who have the same phone number.",
    },
    {
      query: "SELECT DISTINCT Name FROM table_name;",
      description: "Select distinct names from the table.",
    },
    {
      query: "SELECT * FROM table_name WHERE Age = 15;",
      description: "Select students who are aged 15.",
    },
    {
      query:
        "SELECT Class, COUNT(*) AS StudentCount FROM table_name GROUP BY Class;",
      description: "Count the number of students in each class.",
    },
    {
      query:
        "SELECT Name, COUNT(*) AS NameCount FROM table_name GROUP BY Name HAVING NameCount > 1;",
      description: "Select students who have the same name more than once.",
    },
    {
      query:
        "UPDATE table_name SET `Phone No` = '555-123-4567' WHERE Roll No = 105;",
      description: "Update the phone number of a student.",
    },
    {
      query:
        "DELETE FROM table_name WHERE Rowid NOT IN (SELECT MIN(Rowid) FROM table_name GROUP BY Roll No, Name, Class, Age, `Phone No`);",
      description: "Delete duplicate records from the table.",
    },
    {
      query: "SELECT Roll No, Name, Age, Class FROM table_name;",
      description: "Select students with their age and class.",
    },
    {
      query: "SELECT * FROM table_name ORDER BY Age DESC;",
      description: "Select and order students by age in descending order.",
    },
  ];

  export default queries
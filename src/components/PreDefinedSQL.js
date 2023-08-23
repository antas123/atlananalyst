import * as React from "react";
import {ListItem,ListItemButton,ListItemText,Button } from "@mui/material";
import { FixedSizeList } from "react-window";
import QueryHistory from "./history/QueryHistory";
import queries from "../data/predefinedQuery";


export default function PreDefinedSQL({
  callArray,
  queryHistory,
  setQueryHistory,
  copyText,
}) {
  function renderRow(props) {
    const { index, style } = props; 
    const query = queries[index];

    const handleShowTableClick = (index) => {
      callArray(index);
    };

    const handleCopy = (e) => {
      copyText(e);
    };

    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
          <ListItemText
            primary={`${index + 1}. ${query.query}`}
            secondary={query.description}
          />
          <Button
            variant="outlined"
            onClick={() => handleCopy(query.query)}
            size="small"
            style={{ marginRight: "4px", fontSize: "10px", padding: "4px 8px" }}
          >
            Copy to textarea
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={() => handleShowTableClick(index)} 
            style={{ fontSize: "10px", padding: "4px 8px" }}
          >
            Show Table
          </Button>
        </ListItemButton>
      </ListItem>
    );
  }

  return (
    <div sx={{ width: "100%", height: 400, maxWidth: 360, marginLeft: "10px" }}>
      <h3>Predefined Queries</h3>
      <div style={{ marginLeft: "10px", border: "1px solid #FFF0F5" }}>
        <FixedSizeList
          height={360}
          width={450}
          itemSize={150}
          itemCount={queries.length}
          overscanCount={5}
        >
          {renderRow}
        </FixedSizeList>
      </div>
      <QueryHistory
        queryHistory={queryHistory}
        setQueryHistory={setQueryHistory}
      />
    </div>
  );
}

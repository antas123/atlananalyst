Basic overview of project
1) The project is basically a dummy SQL editor.
2) I have used hard coded data as dummy database.
3) there are many features in app
   1) you can copy the SQL query
   2) you can download result table in form of pdf
   3) there is query history section , where you can view hostory of all queries you have used in past.
   4) there are some predefined queries to reduce work load, you can copy them to textaraea, or directly view their result by clicking show table button.
   5) there are light and dark modes for user.
   6) button to run query and button to clear text

4) I have used ReactJS for building this app
   1) used html2canvas for downloading table.
   2) react-window for making virtualized list(MUI Component).
   3) used MUI for UI.

6) loading time summary:-
    1) 7 ms  Loading
    2) 376 ms  Scripting
    3) 17 ms  Rendering
    4) 14 ms  Painting
    5) 406 ms  System
    6) 1402 ms  Idle
    7) 2222 ms  Total,
   I used performance tab to measure time.

 7) though the application is not very heavy but I have used lazy loading to load the predefined SQL query section because among all the components I felt that component had the maximum code to be rendered and potentially more time consuming. 

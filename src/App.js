import React from 'react';
import NoteList from "./Component/NoteList/NoteList";

const Notes = [
    {title: "First Note", body: "", selected: true},
    {title: "Second Note", body: "", selected: false},
    {title: "Third Note", body: "", selected: false},
    {title: "Fourth Note", body: "", selected: false},
    {title: "Fifth Note", body: "", selected: false},
    {title: "Sixth Note", body: "", selected: false},
    {title: "Last Note", body: "", selected: false},
];

const App = () => {
    return (
        <div>
            <NoteList noteList={Notes}/>
        </div>
    );
};

export default App;

import React from 'react';
import NoteList from "./Component/NoteList/NoteList";
import NoteEditor from "./Component/NoteEditor/NoteEditor";
import './App.css';

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
        <div className="Container">
            <div className="List" >
                <NoteList noteList={Notes}/>
            </div>
            <div className="Editor" >
                <NoteEditor />
            </div>
        </div>
    );
};

export default App;

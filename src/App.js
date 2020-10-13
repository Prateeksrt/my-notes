import React, {useState} from 'react';
import NoteList from "./Component/NoteList/NoteList";
import NoteEditor from "./Component/NoteEditor/NoteEditor";
import './App.css';

const initialNotes = [
    {id:1, title: "First Note", body: "Some text of the first note", selected: true},
    {id:2, title: "Second Note", body: "Some random text in the second note", selected: false},
    {id:3, title: "Third Note", body: "", selected: false},
    {id:4, title: "Fourth Note", body: "", selected: false},
    {id:5, title: "Fifth Note", body: "", selected: false},
    {id:6, title: "Sixth Note", body: "", selected: false},
    {id:7, title: "Last Note", body: "", selected: false},
];

const App = () => {
    const [notes, setNotes] = useState(initialNotes);
    const selectedNote = notes.find(n => n.selected);

    const toggleNoteSelection = (id) => note => note.id === id
        ? {...note, selected: true}
        : {...note, selected: false};

    const updateNote = (id, title, body) => note => note.id === id
    ? {...note, title, body }
    : {...note}

    const handleNoteSelection = (selectedNoteId) => {
        setNotes(notes.map(toggleNoteSelection(selectedNoteId)));
    }

    const handleSave = (title, body) => {
        setNotes(notes.map(updateNote(selectedNote.id, title, body)));
    }

    return (
        <div className="Container">
            <div className="List" >
                <NoteList noteList={notes} onSelect={handleNoteSelection}/>
            </div>
            <div className="Editor" >
                <NoteEditor note={selectedNote} onSave={handleSave}/>
            </div>
        </div>
    );
};

export default App;

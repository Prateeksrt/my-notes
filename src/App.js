import React, {useState} from 'react';
import List from "./Component/List/List";
import Editor from "./Component/Editor/Editor";
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
    const [noteList, setNoteList] = useState(initialNotes);
    const selectedNote = noteList.find(n => n.selected);

    const selectNote = (id) => note => note.id === id
        ? {...note, selected: true}
        : {...note, selected: false};

    const updateNote = (id, title, body) => note => note.id === id
    ? {...note, title, body }
    : {...note}

    const changedSelectedNote = notes => id => notes.map(selectNote(id))

    const handleSelection = (selectedNoteId) => {
        setNoteList(changedSelectedNote(noteList)(selectedNoteId));
    }

    const handleSave = (title, body) => {
        setNoteList(noteList.map(updateNote(selectedNote.id, title, body)));
    }

    const handleCreation = () => {
        const newNote = { id: noteList.length + 1, title: "New note", body: "", selected: false };
        setNoteList(changedSelectedNote(noteList.concat(newNote))(newNote.id));
    }

    return (
        <div className="Container">
            <div className="List" >
                <List noteList={noteList} onSelect={handleSelection} onCreate={handleCreation}/>
            </div>
            <div className="Editor" >
                <Editor note={selectedNote} onSave={handleSave}/>
            </div>
        </div>
    );
};

export default App;

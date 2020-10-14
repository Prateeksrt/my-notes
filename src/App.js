import React, {useState} from 'react';
import SideMenu from "./Component/SideMenu/SideMenu";
import Editor from "./Component/Editor/Editor";
import './App.css';

const initialNotes = [
    {id:1, title: "First Note", body: "Some text of the first note", selected: false},
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

    const findAndSelect = (id) => note => note.id === id
        ? {...note, selected: true}
        : {...note, selected: false};

    const selectNew = () => findAndSelect(newId())

    const findAndUpdate = (id, title, body) => note => note.id === id
        ? {...note, title, body }
        : {...note};

    const newId = () => Math.max(...notes.map(n => parseInt(n.id))) + 1;

    const handleSelection = (id) => setNotes(notes.map(findAndSelect(id)));

    const handleSave = (title, body) => setNotes(notes.map(findAndUpdate(selectedNote.id, title, body)));

    const createNewNote = () => ({ id: newId(), title: "New note", body: "", selected: false });

    const handleCreation = () => setNotes(notes.concat(createNewNote()).map(selectNew()));

    const handleDelete = (id) => setNotes(notes.filter(n => n.id !== id))

    return (
        <div className="Container">
            <div className="SideMenu" >
                <SideMenu
                    noteList={notes}
                    onSelect={handleSelection}
                    onCreate={handleCreation}
                    onDelete={handleDelete}
                />
            </div>
            <div className="Editor" >
                <Editor note={selectedNote} onSave={handleSave}/>
            </div>
        </div>
    );
};

export default App;

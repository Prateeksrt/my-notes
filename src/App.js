import React, {useState} from 'react';
import SideMenu from "./Component/SideMenu/SideMenu";
import Editor from "./Component/Editor/Editor";
import './App.css';
import {nextId} from "./Utils/IdGenerator";
import {initialNotes} from "./Mocks/MockNotes";

const App = () => {
    const [notes, setNotes] = useState(initialNotes);
    const [selected, setSelected] = useState();
    const selectedNote = notes.find(n => n.id === selected);

    const withLastModified = (obj) => ({lastModified: new Date(), ...obj })

    const update = (id, title, body) => note => (
        { ...note, ...(note.id === id && withLastModified({title, body}))}
    );

    const newId = () => nextId(notes);

    const handleSelection = id => setSelected(id);

    const handleUpdate = (title, body) => setNotes(notes.map(update(selectedNote.id, title, body)));

    const createNewNote = () => withLastModified(({ id: newId(), title: "", body: ""}));

    const handleCreation = () => {
        setNotes(notes.concat(createNewNote()));
        setSelected(newId());
    }

    const handleDelete = id => setNotes(notes.filter(n => n.id !== id))

    return (
        <div className="ItemContainer">
            <div className="SideMenu">
                <SideMenu
                    noteList={notes}
                    selected={selected}
                    onSelect={handleSelection}
                    onCreate={handleCreation}
                    onDelete={handleDelete}
                />
            </div>
            <div className="Editor" >
                <Editor
                    note={selectedNote}
                    onSave={handleUpdate}
                />
            </div>
        </div>
    );
};

export default App;

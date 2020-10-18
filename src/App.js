import React, {useState} from 'react';
import SideMenu from "./Component/SideMenu/SideMenu";
import Editor from "./Component/Editor/Editor";
import './App.css';
import {nextId} from "./Utils/IdGenerator";
import {initialNotes} from "./Mocks/MockNotes";

const App = () => {
    const [notes, setNotes] = useState(initialNotes);
    const [selected, setSelected] = useState();
    const [editable, setEditable] = useState(false);
    const [searchResult, setSearchResult] = useState({isSearch: false});
    const containsQuery = query => note => note.body.indexOf(query) !== -1;
    const searchResultNote = query => notes.filter(containsQuery(query)).map(note => note.id)
    const handleSearch = search => setSearchResult({noteIds: searchResultNote(search.query), ...search});
    const selectedNote = notes.find(n => n.id === selected);

    const withLastModified = (obj) => ({lastModified: new Date(), ...obj })

    const update = (id, title, body) => note => (
        { ...note, ...(note.id === id && withLastModified({title, body}))}
    );

    const newId = () => nextId(notes);

    const handleSelection = id => {
        setSelected(id);
        setEditable(false);
    }

    const handleUpdate = (title, body) => setNotes(notes.map(update(selectedNote.id, title, body)));

    const createNewNote = () => withLastModified(({ id: newId(), title: "", body: ""}));

    const handleCreation = () => {
        setNotes(notes.concat(createNewNote()));
        setSelected(newId());
    }

    const handleDelete = id => setNotes(notes.filter(n => n.id !== id))

    const handleEditChange = (isEditable) => setEditable(isEditable);

    return (
        <div className="ItemContainer">
            <div className="SideMenu">
                <SideMenu
                    noteList={notes}
                    selected={selected}
                    onSelect={handleSelection}
                    onCreate={handleCreation}
                    onDelete={handleDelete}
                    searchResult={searchResult}
                    handleSearch={handleSearch}
                />
            </div>
            <div className="Editor" >
                <Editor
                    note={selectedNote}
                    onSave={handleUpdate}
                    onEditableChange={handleEditChange}
                    editable={editable}
                    searchResult={searchResult}
                />
            </div>
        </div>
    );
};

export default App;

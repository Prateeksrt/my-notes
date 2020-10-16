import React, {useState} from 'react';
import './SideMenu.css';
import NoteList from "./NoteList";
import CreateNewItem from "./CreateNewItem";

const SideMenu = ({noteList, onSelect, onCreate, onDelete}) => {
    const [query, setQuery] = useState("");
    const [doSearch, setDoSearch] = useState(false);
    const handleQueryChange = (e) => setQuery(e.target.value);
    const handleKeyDown = (event) => setDoSearch(event.key === 'Enter');
    const noteListWithResult = noteList.map(note => ({...note, hasResult: doSearch && note.body.indexOf(query)!==-1}))
    return (
        <div className="SideMenuContainer">
            <div className="SearchContainer">
                <input
                    type="text"
                    value={query}
                    className="SearchBox Body2"
                    onChange={handleQueryChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="NoteListContainer">
                <NoteList
                    onSelect={onSelect}
                    onDelete={onDelete}
                    noteList={noteListWithResult}
                />
            </div>
            <div className="CreateItemContainer">
                <div className="EmptySpace"/>
                <CreateNewItem title="Create new Item" onCreate={onCreate}/>
            </div>
        </div>
    )
};

export default SideMenu;

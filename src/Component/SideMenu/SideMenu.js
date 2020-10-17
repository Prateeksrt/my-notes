import React, {useEffect, useState} from 'react';
import './SideMenu.css';
import NoteList from "./NoteList";
import CreateNewItem from "./CreateNewItem";
import SearchBox from "../SearchBox/SearchBox";

const SideMenu = ({noteList, onSelect, onCreate, onDelete}) => {
    const [notesWithSearch, setNoteWithSearch] = useState(noteList);
    useEffect(() => setNoteWithSearch(noteList), [noteList]);
    const containsQuery = query => note => note.body.indexOf(query) !== -1;
    const setHasResult = query => note => ({...note, hasResult: containsQuery(query)(note)});
    const clearResult = note => ({...note, hasResult: false});
    const handleSearch = query => setNoteWithSearch(notesWithSearch.map(setHasResult(query)));
    const handleSearchClear = () => setNoteWithSearch(notesWithSearch.map(clearResult));
    return (
        <div className="SideMenuContainer">
            <div className="SearchContainer">
            <SearchBox onSearch={handleSearch} onClear={handleSearchClear}/>
            </div>
            <div className="NoteListContainer">
                <NoteList
                    onSelect={onSelect}
                    onDelete={onDelete}
                    noteList={notesWithSearch}
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

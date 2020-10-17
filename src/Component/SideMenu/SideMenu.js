import React, {useState} from 'react';
import './SideMenu.css';
import NoteList from "./NoteList";
import CreateNewItem from "./CreateNewItem";
import SearchBox from "../SearchBox/SearchBox";

const SideMenu = ({noteList, onSelect, onCreate, onDelete, selected}) => {
    const [searchResult, setSearchResult] = useState({isSearch: false});
    const containsQuery = query => note => note.body.indexOf(query) !== -1;
    const searchResultNote = query => noteList.filter(containsQuery(query)).map(note => note.id)
    const handleSearch = query => setSearchResult({noteIds: searchResultNote(query), query: query, isSearch: true});
    const handleSearchClear = () => setSearchResult({isSearch: false});
    return (
        <div className="SideMenuContainer">
            <div className="SearchContainer">
            <SearchBox onSearch={handleSearch} onClear={handleSearchClear}/>
            </div>
            <div className="NoteListContainer">
                <NoteList
                    onSelect={onSelect}
                    onDelete={onDelete}
                    noteList={noteList}
                    selected={selected}
                    searchResult={searchResult}
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

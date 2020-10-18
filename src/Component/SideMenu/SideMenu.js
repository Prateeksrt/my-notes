import React from 'react';
import './SideMenu.css';
import NoteList from "./NoteList";
import CreateNewItem from "./CreateNewItem";
import SearchBox from "../SearchBox/SearchBox";

const SideMenu = ({noteList, onSelect, onCreate, onDelete, selected, handleSearch, searchResult}) => {
    return (
        <div className="SideMenuContainer">
            <div className="SearchContainer">
            <SearchBox onSearch={handleSearch}/>
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

import React from 'react';
import './SideMenu.css';
import NoteList from "./NoteList";
import CreateNewItem from "./CreateNewItem";

const SideMenu = ({noteList, onSelect, onCreate, onDelete}) => (
    <div className="SideMenuContainer">
        <div className="NoteListContainer">
            <NoteList noteList={noteList} onSelect={onSelect} onDelete={onDelete}/>
        </div>
        <div className="CreateItemContainer">
            <div className="EmptySpace" />
            <CreateNewItem title="Create new Item" onCreate={onCreate} />
        </div>
    </div>
);

export default SideMenu;

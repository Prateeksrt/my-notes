import React from 'react';
import './SideMenu.css';

const SideMenu = ({noteList, onSelect, onCreate}) => {
    const NoteItems = noteList.map(item => (
            <NoteItem
                title={`${item.id} ${item.title}`}
                onClick={() => onSelect(item.id)}
                key={item.id}
                isSelected={item.selected}
            />
        )
    );
    return (
        <div className="SideMenuContainer">
            <div className="NoteListContainer">
                { NoteItems }
            </div>
            <div className="CreateItemContainer">
                <div className="EmptySpace" />
                <CreateNewItem title="+  Create new Item" onCreate={onCreate} />
            </div>
        </div>
    );
};

const NoteItem = ({title, onClick, isSelected}) => {
    const classNames = `NoteItem${isSelected ? " Selected" : ""}`
    return <div className={classNames} onClick={onClick}>
        {title}
    </div>
};

const CreateNewItem = ({title, onCreate}) => (
    <div className="CreateNewItem NoteItem" onClick={onCreate}>
        {title}
    </div>
);

export default SideMenu;

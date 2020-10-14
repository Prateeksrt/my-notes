import React from 'react';
import './SideMenu.css';

const SideMenu = ({noteList, onSelect, onCreate, onDelete}) => {
    const NoteItems = noteList.map(item => (
            <NoteItem
                title={`${item.id} ${item.title}`}
                onClick={() => onSelect(item.id)}
                key={item.id}
                isSelected={item.selected}
                onDelete={() => onDelete(item.id)}
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

const NoteItem = ({title, onClick, isSelected, onDelete}) => {
    const classNames = `NoteItem${isSelected ? " Selected" : ""}`
    return <div className={classNames} >
        <div className="NoteTitle" onClick={onClick}>{title}</div>
        <div className="DeleteButton" onClick={onDelete}>x</div>
    </div>
};

const CreateNewItem = ({title, onCreate}) => (
    <div className="CreateNewItem NoteItem" onClick={onCreate}>
        {title}
    </div>
);

export default SideMenu;

import React from 'react';
import './List.css';

const List = ({noteList, onSelect, onCreate}) => {
    const NoteItems = noteList.map(item => (
            <NoteItem
                title={`${item.id} ${item.title}`}
                onClick={() => onSelect(item.id)}
                key={item.id}
            />
        )
    );
    return (
        <div className="NoteListContainer">
            <NoteItem title="+  Create new Item" onClick={onCreate} />
            { NoteItems }
        </div>
    );
};

const NoteItem = ({title, onClick}) => (
    <div className="NoteItem" onClick={onClick}>
        {title}
    </div>
);

export default List;

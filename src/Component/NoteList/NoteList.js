import React from 'react';
import './NoteList.css';

const NoteList = ({noteList, onSelect}) => {
    const NoteItems = noteList.map(item => (
            <NoteItem
                title={item.title}
                onClick={() => onSelect(item.id)}
                key={item.id}
            />
        )
    );
    return (
        <div className="NoteListContainer">
            { NoteItems }
        </div>
    );
};

const NoteItem = ({title, onClick}) => (
    <div className="NoteItem" onClick={onClick}>
        {title}
    </div>
);

export default NoteList;

import React from 'react';
import './NoteItem.css';

const NoteItem = ({title, onClick, isHighlighted, onDelete}) => {
    const classNames = `NoteTitle${isHighlighted ? " Selected" : ""}`
    return <div className="NoteItem" >
        <div className={classNames} onClick={onClick}>{title}</div>
        <div className="DeleteButton" onClick={onDelete}>x</div>
    </div>
};

export default NoteItem;

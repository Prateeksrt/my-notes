import React from 'react';
import NoteItem from "./NoteItem";

const NoteList = ({noteList, onSelect, onDelete}) => noteList.map(item =>
            <NoteItem
                title={`${item.id} ${item.title}`}
                onClick={() => onSelect(item.id)}
                key={item.id}
                isHighlighted={item.selected}
                onDelete={() => onDelete(item.id)}
            />)

export default NoteList;

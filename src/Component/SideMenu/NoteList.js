import React from 'react';
import NoteInfoCard from "./NoteInfoCard";

const NoteList = ({noteList, onSelect, onDelete, selected}) => noteList.map(item =>
            <NoteInfoCard
                note={item}
                onClick={onSelect}
                onClose={onDelete}
                key={item.id}
                selected={item.id === selected}
            />)

export default NoteList;

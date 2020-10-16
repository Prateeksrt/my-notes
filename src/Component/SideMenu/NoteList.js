import React from 'react';
import NoteInfoCard from "./NoteInfoCard";

const NoteList = ({noteList, onSelect, onDelete}) => noteList.map(item =>
            <NoteInfoCard
                note={item}
                onClick={onSelect}
                onClose={onDelete}
                key={item.id}
            />)

export default NoteList;

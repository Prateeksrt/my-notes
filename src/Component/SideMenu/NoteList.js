import React from 'react';
import NoteInfoCard from "./NoteInfoCard";

const NoteList = ({noteList, onSelect, onDelete, selected, searchResult}) => noteList.map(item =>
            <NoteInfoCard
                note={item}
                onClick={onSelect}
                onClose={onDelete}
                key={item.id}
                selected={item.id === selected}
                searchResult={searchResult}
            />)

export default NoteList;

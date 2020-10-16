import React from 'react';
import SideMenuItem from "./SideMenuItem";

const NoteList = ({noteList, onSelect, onDelete}) => noteList.map(item =>
            <SideMenuItem
                text={`${!!item.title ? item.title : "unknown"}`}
                onClick={() => onSelect(item.id)}
                key={item.id}
                highlighted={item.selected}
                onClose={() => onDelete(item.id)}
            />)

export default NoteList;

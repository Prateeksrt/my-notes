import React from 'react';
import './Editor.css';
import TitleEditor from "./TitleEditor/TitleEditor";
import BodyEditor from "./BodyEditor/BodyEditor";


const Editor = ({note, onSave}) => {
    const handleTitleChange = (e) => {
        onSave(e.target.value, note.body);
    }
    const handleBodyChange = (e) => {
        onSave(note.title, e.target.value);
    }

    const NoteEditor = <>
        <TitleEditor value={note?.title} handleChange={handleTitleChange}/>
        <hr className="Separator"/>
        <BodyEditor value={note?.body} onChange={handleBodyChange}/>
    </>;

    return (
        <div className="CreateNoteContainer">
            { note ? NoteEditor : null }
        </div>
    );
};

export default Editor;

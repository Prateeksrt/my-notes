import React from 'react';
import './NoteEditor.css';


const NoteEditor = ({note}) => {
    return (
        <div className="CreateNoteContainer">
            <div className="TitleContainer">
                <input
                    className="Title"
                    type="text"
                    placeholder="Title"
                    value={note.title}
                />
            </div>
            <hr className="Separator"/>
            <div className="NoteAreaContainer">
                <textarea
                    value={note.body}
                    rows="25"
                    className="NoteArea"
                    placeholder="Enter the notes here"
                />
            </div>
        </div>
    );
};

export default NoteEditor;

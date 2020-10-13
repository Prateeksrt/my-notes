import React from 'react';
import './CreateNote.css';


const CreateNote = () => {
    return (
        <div className="CreateNoteContainer">
            <div className="TitleContainer">
                <input
                    className="Title"
                    type="text"
                    placeholder="Title"
                />
            </div>
            <hr className="Separator"/>
            <div className="NoteAreaContainer">
                <textarea

                    rows="25"
                    className="NoteArea"
                    placeholder="Enter the notes here"
                />
            </div>
        </div>
    );
};

export default CreateNote;

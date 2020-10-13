import React, {useEffect, useState} from 'react';
import './NoteEditor.css';


const NoteEditor = ({note}) => {
    const [title, setTitle] = useState(note.title);
    const [body, setBody] = useState(note.body);

    useEffect(() => setTitle(note.title), [note.title]);
    useEffect(() => setBody(note.body), [note.body]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleBodyChange = (e) => {
        setBody(e.target.value);
    }
    return (
        <div className="CreateNoteContainer">
            <div className="TitleContainer">
                <input
                    className="Title"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={handleTitleChange}
                />
            </div>
            <hr className="Separator"/>
            <div className="NoteAreaContainer">
                <textarea
                    value={body}
                    rows="25"
                    className="NoteArea"
                    placeholder="Enter the notes here"
                    onChange={handleBodyChange}
                />
            </div>
        </div>
    );
};

export default NoteEditor;

import React, {useEffect, useState} from 'react';
import './Editor.css';


const Editor = ({note, onSave}) => {
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
    const handleSave = () => {
        onSave(title, body);
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
                <button className="SaveButton" onClick={handleSave}>
                    Save
                </button>
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

export default Editor;

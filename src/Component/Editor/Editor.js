import React, {useEffect, useState} from 'react';
import './Editor.css';
import TitleEditor from "./TitleEditor/TitleEditor";
import BodyEditor from "./BodyEditor/BodyEditor";


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
            <TitleEditor
                value={title}
                handleChange={handleTitleChange}
                onSave={handleSave}
            />
            <hr className="Separator"/>
            <BodyEditor value={body} onChange={handleBodyChange}/>
        </div>
    );
};

export default Editor;

import React from 'react';
import './BodyEditor.css';
import ReactMarkdown from 'react-markdown';

const BodyEditor = ({value, onChange, onEditableChange, editable, searchResult}) => {
    const handleEditorClick = (e) => {
        e.target.tagName !== 'A' && !editable && onEditableChange(true);
    }

    const handleEditorFocusLose = (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            editable && onEditableChange(false);
        }
    }

    return (
        <div className="NoteAreaContainer" onClick={handleEditorClick}>
            {
                editable
                ? <textarea
                        value={value}
                        className="NoteArea Body1 Text"
                        placeholder="Enter the notes here"
                        onChange={onChange}
                        onBlur={handleEditorFocusLose}
                    />
                : <ReactMarkdown linkTarget="_blank" className="Markdown" children={value}/>
            }

        </div>
    );
};

export default BodyEditor;

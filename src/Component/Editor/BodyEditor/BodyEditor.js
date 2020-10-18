import React from 'react';
import './BodyEditor.css';
import ReactMarkdown from 'react-markdown'

const BodyEditor = ({value, onChange, onEditableChange, editable, searchResult}) => {
    const handleEditorClick = () => !editable && onEditableChange(true);

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
                : <ReactMarkdown className="Markdown">{value}</ReactMarkdown>
            }

        </div>
    );
};

export default BodyEditor;

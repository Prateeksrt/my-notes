import React from 'react';
import './BodyEditor.css';

const BodyEditor = ({value, onChange}) => {
    return (
        <div className="NoteAreaContainer">
                <textarea
                    value={value}
                    rows="25"
                    className="NoteArea"
                    placeholder="Enter the notes here"
                    onChange={onChange}
                />
        </div>
    );
};

export default BodyEditor;

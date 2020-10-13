import React from 'react';
import './TitleEditor.css';

const TitleEditor = ({value, handleChange, onSave}) => {
    return (
        <div className="TitleContainer">
            <input
                className="Title"
                type="text"
                placeholder="Title"
                value={value}
                onChange={handleChange}
            />
            <button className="SaveButton" onClick={onSave}>
                Save
            </button>
        </div>
    );
};

export default TitleEditor;

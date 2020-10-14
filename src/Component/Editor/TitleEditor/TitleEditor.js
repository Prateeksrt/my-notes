import React from 'react';
import './TitleEditor.css';

const TitleEditor = ({value, handleChange}) => {
    return (
        <div className="TitleContainer">
            <input
                className="Title"
                type="text"
                placeholder="Title"
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};

export default TitleEditor;

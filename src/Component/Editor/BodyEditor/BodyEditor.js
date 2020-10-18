import React from 'react';
import './BodyEditor.css';
import Text from "../../Basic/Text/Text";

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
                :
                    <div style={{height: '99%', borderStyle: 'none'}}>
                        <Text text={value} highlight={searchResult.query} type="body-1"/>
                    </div>
            }

        </div>
    );
};

export default BodyEditor;

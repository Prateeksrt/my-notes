import React from 'react';
import './CreateNewItem.css';

const CreateNewItem = ({title, onCreate}) => (
    <div className="CreateNewItem NoteItem" onClick={onCreate}>
        {title}
    </div>
);

export default CreateNewItem;

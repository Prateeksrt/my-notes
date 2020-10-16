import React from 'react';
import './CreateNewItem.css';

const CreateNewItem = ({title, onCreate}) => (
    <div className="CreateNewItemContainer" onClick={onCreate}>
        <span className="CreateNewItemText">{title}</span>
    </div>
);

export default CreateNewItem;

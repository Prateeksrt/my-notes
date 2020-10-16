import React from 'react';
import './CreateNewItem.css';
import Text from "../Basic/Text/Text";

const CreateNewItem = ({title, onCreate}) => (
    <div className="CreateNewItemContainer" onClick={onCreate}>
        <Text text={title} type="button" />
    </div>
);

export default CreateNewItem;

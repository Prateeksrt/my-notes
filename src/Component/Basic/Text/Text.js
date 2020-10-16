import React from 'react';
import './Text.css';

const Text = ({text, type}) => {
    const classForType = typeToClass[type.toLowerCase()]
    const classNames = `Text ${classForType ?? "Body1"}`
    return (
        <span className={classNames}>{text}</span>
    );
};

const typeToClass = {
    "subtitle-1": "SubTitle1",
    "subtitle-2": "SubTitle2",
    "body-1": "Body1",
    "body-2": "Body2",
}

export default Text;

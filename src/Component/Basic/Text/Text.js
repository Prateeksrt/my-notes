import React from 'react';
import './Text.css';

const Text = ({text, type, charLimit = null}) => {
    const classForType = typeToClass[type.toLowerCase()]
    const classNames = `Text ${classForType ?? "Body1"}`
    return (
        <span className={classNames}>{format(text, charLimit)}</span>
    );
};

const shouldTrim = (text, length) => length && text.length > length;

const trim = (text, length) => `${text.substring(0, length)}.....`;

const format = (text, length) => shouldTrim(text,length) ? trim(text, length) : text;

const typeToClass = {
    "subtitle-1": "SubTitle1",
    "subtitle-2": "SubTitle2",
    "body-1": "Body1",
    "body-2": "Body2",
}

export default Text;

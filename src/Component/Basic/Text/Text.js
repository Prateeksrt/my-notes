import React from 'react';
import './Text.css';

const Text = ({text, type, highlight, charLimit = null}) => {
    const classForType = typeToClass[type.toLowerCase()]
    const classNames = `Text ${classForType ?? "Body1"}`
    return formatText(text,charLimit, highlight, classNames);
};

const shouldHighLight = (text, highlight) => text && text.length > 0 && highlight;

const rePositionForHighLight = (text, highLight, charLimit) => {
    if (!shouldHighLight(text,highLight)) return text;
    const indexOf = text.indexOf(highLight);
    if(charLimit && indexOf + highLight.length > charLimit) {
        return `....${text.substring(indexOf - charLimit * .5)}`;
    }
    return text;
}

const shouldTrim = (text, charLimit) => text && charLimit && text.length > charLimit;

const trim = (text, charLimit) => `${text.substring(0, charLimit)}.....`;

const trimText = (text, charLimit) => shouldTrim(text,charLimit) ? trim(text, charLimit) : text;

const formatText = (text, charLimit, highLight, classNames) => {
    const rePositionedText = rePositionForHighLight(text,highLight,charLimit);
    const trimmedText = trimText(rePositionedText, charLimit);
    const tokens = trimmedText.split(highLight);
    return tokens.flatMap((token, index) => {
        const result = [<span className={classNames}>{token}</span>];
        return index < tokens.length - 1
            ? result.concat(<span className={`${classNames} HighLightedText`}>{highLight}</span> )
            : result;
    })
}

const typeToClass = {
    "subtitle-1": "SubTitle1",
    "subtitle-2": "SubTitle2",
    "body-1": "Body1",
    "body-2": "Body2",
    "caption": "Caption",
    "button": "Button"
}

export default Text;

import React, {useState} from 'react';
import './NoteInfoCard.css';
import Text from "../Basic/Text/Text";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en';

TimeAgo.addDefaultLocale(en)

const timeAgo = new TimeAgo('en-US')

const NoteInfoCard = ({note, onClick, onClose}) => {
    const [showClose, setShowClose] = useState(false);
    const handleMouseEnter = () => setShowClose(true);
    const handleMouseLeave = () => setShowClose(false);
    return (
        <div
            className="NoteInfoCardContainer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="NoteInfoCardHeader">
                <NoteTitle text={note.title} onClick={() => onClick(note.id)}/>
                <CloseButton onClose={() => onClose(note.id)} show={showClose}/>
            </div>
            <div className="NoteInfoCardContent" onClick={() => onClick(note.id)}>
                <Text text={note.body} type="body-2" charLimit={80}/>
                <br/>
                <Text text={timeAgo.format(note.lastModified,'twitter-minute-now')} type="caption"/>
            </div>
        </div>
    );
};

const CloseButton = ({onClose, show}) => <>
    {show && <div className="NoteInfoCardClose" onClick={onClose}>×</div>}
</>

const NoteTitle = ({text, onClick}) => <div className="NoteInfoCardTitle" onClick={onClick} >
    <Text text={text} type="subtitle-1" charLimit={20}/>
</div>

export default NoteInfoCard;

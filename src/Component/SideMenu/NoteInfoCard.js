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
            className={`NoteInfoCardContainer ${note.selected ? "SelectedNote" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="NoteInfoCardHeader">
                <NoteTitle text={note.title} onClick={() => onClick(note.id)}/>
                <CloseButton onClose={() => onClose(note.id)} show={showClose || note.selected}/>
            </div>
            <div className="NoteInfoCardContent" onClick={() => onClick(note.id)}>
                <Text text={note.body} type="body-2" charLimit={80}/>
            </div>
            <div className="NoteInfoCardFooter">
                <LastModified time={note.lastModified}/>
            </div>
        </div>
    );
};

const CloseButton = ({onClose, show}) => <>
    {show && <div className="NoteInfoCardClose" onClick={onClose}>×</div>}
</>

const NoteTitle = ({text, onClick}) => <div className="NoteInfoCardTitle" onClick={onClick} >
    <Text text={text ? text : "New note"} type="subtitle-1" charLimit={20}/>
</div>

const LastModified = ({time}) => <Text
    text={timeAgo.format(time,'twitter-minute-now')}
    type="caption"
/>

export default NoteInfoCard;

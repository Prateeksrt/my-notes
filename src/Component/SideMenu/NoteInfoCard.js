import React, {useState} from 'react';
import './NoteInfoCard.css';
import Text from "../Basic/Text/Text";

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
            </div>
        </div>
    );
};

const CloseButton = ({onClose, show}) => <>
    {show && <div className="NoteInfoCardClose" onClick={onClose}>×</div>}
</>

const NoteTitle = ({text, onClick}) => <div className="NoteInfoCardTitle" onClick={onClick} >
    <Text text={text} type="subtitle-1"/>
</div>

export default NoteInfoCard;

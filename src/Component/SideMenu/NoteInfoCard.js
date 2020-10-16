import React, {useState} from 'react';
import './NoteInfoCard.css';
import Text from "../Basic/Text/Text";

const NoteInfoCard = ({note, onClick, onClose}) => {
    const [showClose, setShowClose] = useState(false);
    const handleMouseEnter = () => setShowClose(true);
    const handleMouseLeave = () => setShowClose(false);
    return (
        <div
            className={`SideMenuItemContainer`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="SideMenuItemHeader">
                <div className="SideMenuItemText" onClick={() => onClick(note.id)} >
                    <Text text={note.title} type="subtitle-2"/>
                </div>
                {showClose && <div className="SideMenuItemClose" onClick={() => onClose(note.id)}>×</div>}
            </div>
        </div>
    );
};

export default NoteInfoCard;

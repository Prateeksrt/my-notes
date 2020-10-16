import React, {useState} from 'react';
import './SideMenuItem.css';

const SideMenuItem = ({text, highlighted, onClick, onClose}) => {
    const [showClose, setShowClose] = useState(false);
    const handleMouseEnter = () => setShowClose(true);
    const handleMouseLeave = () => setShowClose(false);
    return (
        <div
            className={`Container ${highlighted ? "Highlighted" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="TextContainer">
                <span className="Text" onClick={onClick}>{text}</span>
            </div>
            {showClose && <div className="Close" onClick={onClose}>×</div>}
        </div>
    );
};

export default SideMenuItem;

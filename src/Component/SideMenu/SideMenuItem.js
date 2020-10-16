import React, {useState} from 'react';
import './SideMenuItem.css';
import Text from "../Basic/Text/Text";

const SideMenuItem = ({text, highlighted, onClick, onClose}) => {
    const [showClose, setShowClose] = useState(false);
    const handleMouseEnter = () => setShowClose(true);
    const handleMouseLeave = () => setShowClose(false);
    return (
        <div
            className={`SideMenuItemContainer ${highlighted ? "Highlighted" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="SideMenuItemHeader">
                <div className="TextContainer">
                    <Text text={text} onClick={onClick} type="subtitle-2"/>
                </div>
                {showClose && <div className="Close" onClick={onClose}>×</div>}
            </div>
        </div>
    );
};

export default SideMenuItem;

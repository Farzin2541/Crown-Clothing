import React from "react";
import './menu-item.styles.css';

const MenuItem = ({title, imageUrl, size}) => (
    <div className={`${size} menu-item`}>
        <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className='content'>
            <div className='title'>{title.toUpperCase()}</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;
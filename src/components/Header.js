import React, { useState } from 'react';
import headerData from '../data/headerData.json';

const Header = () => {
    const [zoom, setZoom] = useState(1);

    const handleMouseEnter = () => setZoom(2);
    const handleMouseLeave = () => setZoom(1);

    return (
        <header>
            <div className='header-info'>
                <div className='header-info-name'>
                    <h1>{headerData.data.name}</h1>
                </div>
                <div className='header-info-title'>
                    <h2>{headerData.data.position}</h2>
                </div>
                <div className='header-info-contact-details'>
                    <h3>+91 {headerData.data.phone}</h3>
                    <span className='separator'>|</span>
                    <h3>{headerData.data.email}</h3>
                    <span className='separator'>|</span>
                    <a href={headerData.data.linkedInUrl} target="_blank" rel='noopener noreferrer'>
                        <h3>LinkedIn</h3>
                    </a>
                </div>
            </div>
            <div className='header-pic' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img
                    src={`${process.env.PUBLIC_URL}/logo.jpeg`}
                    alt='pic'
                    style={{ transform: `scale(${zoom})`, transition: 'transform 0.5s ease' }}
                />
            </div>
        </header>
    )
}

export default Header;
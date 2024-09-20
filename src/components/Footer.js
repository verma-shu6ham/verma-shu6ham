import React from 'react';
import footerData from '../data/footerData.json';

const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <h3>{footerData.data.name} © 2024 - All rights reserved</h3>
                <a href={footerData.data.website} target='_blank' rel='noopener noreferrer'>
                    <h5>{footerData.data.website}</h5>
                </a>
            </div>
        </footer>
    )
}

export default Footer;

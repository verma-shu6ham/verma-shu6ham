import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <h3>{process.env.REACT_APP_PERSON_NAME} © 2024 - All rights reserved</h3>
                <a href={process.env.REACT_APP_URL} target='_blank' rel='noopener noreferrer'>
                    <h5>{process.env.REACT_APP_URL}</h5>
                </a>
            </div>
        </footer>
    )
}

export default Footer;

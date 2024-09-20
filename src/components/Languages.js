import React from 'react';
import languagesData from '../data/languagesData.json';

const Languages = () => {
    return (
        <>
            <ul>
                {languagesData.data?.map((language, index) => (
                    <li key={index}>
                        <div className='body-languages-li'>
                            <p>{language}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Languages;
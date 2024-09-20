import React from 'react';
import passionsData from '../data/passionsData.json';

const Passions = () => {
    return (
        <>
            <ul>
                {passionsData.data?.map((passion, index) => (
                    <li key={index}>
                        <div className='body-passion-li'>
                            <p>{passion}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Passions;
import React from 'react';
import certificationsData from '../data/certifications.json'

const Certifications = () => {
    return (
        <>
            <ul className='certifications-ul'>
                {certificationsData.data?.map((certification, index) => (
                    <li key={index} className='certification-li'>
                        <div className='certification'>
                            <div className='certification-details'>
                                <h4>{certification.courseName}</h4>
                                <span className='separator'>
                                    (
                                    <a href={certification.certificateUrl} target='_blank' rel='noopener noreferrer'>
                                        {certification.platform}
                                    </a>
                                    )
                                </span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Certifications;
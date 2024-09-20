import React from 'react';
import educationData from '../data/educationData.json';

const Education = () => {
    return (
        <>
            <ul className='educations-ul'>
                {educationData.data?.map((education, index) => (
                    <li key={index} className='education-li'>
                        <div className='education'>
                            <div className='college'>
                                <h3>{education.college}</h3>
                                <span className='separator'>|</span>
                                <h3>{education.start} - {education.end ? education.end : 'Pursuing'}</h3>
                            </div>
                            <div >
                                <p>{education.degree}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Education;
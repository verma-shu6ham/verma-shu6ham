import React from 'react';
import technicalSkillsData from '../data/technicalSkills.json';

const TechnicalSkills = () => {
    return (
        <>
            <ul className='technicalSkills-ul'>
                {Object.entries(technicalSkillsData.data)?.map(([skillCategory, skills], index) => (
                    <li className='technicalSkill-li' key={index} >
                        <div className='technicalSkill'>
                            <h4>{
                                skillCategory
                                    .replace(/([A-Z])/g, ' $1')
                                    .trim()
                                    .replace(/^./, (str) => str.toUpperCase()) + ': '
                            }</h4><p className='separator'>{skills.join(', ')}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TechnicalSkills;
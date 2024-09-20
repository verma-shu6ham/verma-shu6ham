import React from 'react';
import experienceData from '../data/experienceData.json'

const Experience = () => {
    return (
        <>
            <ul className='experiences-ul'>
                {experienceData.data?.map((experience, index) => (
                    <li className='experience-company-li' key={index} >
                        <div className='body-experience-company-jobTitle-duration'>
                            <h3>{experience.company}</h3>
                            <span className='separator'>|</span>
                            <h3>{experience.jobTitle}</h3>
                            <span className='separator'>|</span>
                            <h3>{experience.start} - {experience.end ? experience.end : 'Present'}</h3>
                        </div>
                        <ul className='experience-company-projects-ul'>
                            {experience.projects.map((project, index) => (
                                <li className='experience-company-project-li' key={index} >
                                    <h4>{project.name}</h4>
                                    <ul className='experience-company-project-responsibilities-ul'>
                                        {project.responsibilities.map((responsibility, index) => (
                                            <li key={index} className='experience-company-project-responsibility-li'>
                                                <p>{responsibility}</p>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className='body-experience-team-link-tech'>
                                        <div className='experience-team'>
                                            <h4>Team: </h4><p className='separator'>{project.teamSize}</p>
                                        </div>
                                        {project.link ? <div className='experience-link'>
                                            <h4>Link: </h4>
                                            <a href={project.link} target='_blank' rel='noopener noreferrer'>
                                                <p className='separator'>{project.link}</p>
                                            </a>
                                        </div> : <></>}
                                        <div className='experience-tech'>
                                            <h4>Technology: </h4><p className='separator'>{project.techStack.join(', ')}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Experience;
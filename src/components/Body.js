import React from "react";
import Experience from "./Experience";
import TechnicalSkills from "./TechnicalSkills";
import Certifications from "./Certifications";
import Education from "./Education";
import Languages from "./Languages";
import Passions from "./Passions";

const Body = () => {
    return (
        <>
            <div className="body-experience">
                <h2>Experience</h2>
                <div className="divider"></div>
                <Experience />
            </div>
            <div className="body-skill">
                <h2>Technical Skills</h2>
                <div className="divider"></div>
                <TechnicalSkills />
            </div>
            <div className="body-certification">
                <h2>Certifications</h2>
                <div className="divider"></div>
                <Certifications />
            </div>
            <div className="body-education">
                <h2>Education</h2>
                <div className="divider"></div>
                <Education />
            </div>
            <div className="body-language">
                <h2>Languages</h2>
                <div className="divider"></div>
                <Languages />
            </div>
            <div className="body-passion">
                <h2>Passions</h2>
                <div className="divider"></div>
                <Passions />
            </div>
        </>
    )
}

export default Body;
import React from 'react'
import '../App.css';
import { LARGE_DESKTOP_SIZE } from '../constants/screenSizes';
import { softwareSkills, financeSkills, personalSkills } from '../constants/skills';


export default function Skills(props) {
    const { screenWidth } = props;

    function getSkillTableData(skills) {
        const isSmallScreen = screenWidth < LARGE_DESKTOP_SIZE;

        return skills.map((skill) => {
            const { id, skill1, numStars1, skill2, numStars2 } = skill
            const bulletPoint = <i className="fa fa-circle"></i>;

            return (
                <tr key={id}>
                    
                    <td className="skill">
                        {isSmallScreen && bulletPoint}
                        {skill1}
                    </td>
                    
                    {!isSmallScreen && <td className="d-none d-xl-block text-nowrap">{getStars(numStars1)}</td>}
                    
                    <td className="skill">
                        {isSmallScreen && bulletPoint}
                        {skill2}
                    </td>
                    
                    {!isSmallScreen && <td className="d-none d-xl-block text-nowrap">{getStars(numStars2)}</td>}
                </tr>
            )
        })
    }

    function getStars(numStars) {
        let stars = [];

        for (let i = 0; i < 5; i++) {
            if (i < numStars) {
                stars.push(<i key={i} className="fas fa-star"></i>);
            } else {
                stars.push(<i key={i} className="far fa-star"></i>);
            }
        }

        return stars;
    }

    return (
        <section id="skills">
            <h1>Skills</h1>
            <table className="skills">
                <tbody>
                    <tr>
                        <td className="skills-heading" id="personal-skills">Personal Skills</td>
                    </tr>
                    {getSkillTableData(personalSkills)}
                    <tr>
                        <td className="skills-heading">Software Skills</td>
                    </tr>
                    {getSkillTableData(softwareSkills)}
                    <tr>
                        <td className="skills-heading">Finance Skills</td>
                    </tr>
                    {getSkillTableData(financeSkills)}
                </tbody>
            </table>
        </section>
    )
}

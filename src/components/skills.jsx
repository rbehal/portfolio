import React, { Component } from 'react'
import '../App.css';



export default class skills extends Component {
    constructor(props) {
        super(props) 
        this.state = { 
           softwareSkills: [
              {id:  1, skill1: "Java", numStars1: 5, skill2:  "Python", numStars2: 5},
              {id:  2, skill1: "Javascript", numStars1: 5, skill2:  "HTML/CSS/Bootstrap", numStars2: 5},
              {id:  3, skill1: "React.JS", numStars1: 4, skill2:  "Vue.JS", numStars2: 5},
              {id:  4, skill1: "Build Systems: Gradle", numStars1: 4, skill2:  "Agile Methodology", numStars2: 5},
              {id:  5, skill1: "Continuous Integration: Travis CI", numStars1: 5, skill2:  "Version Control: Git", numStars2: 5},
              {id:  6, skill1: "SQL", numStars1: 3, skill2: "Data Analysis & ML Models (Python, R)", numStars2: 5},
              {id:  7, skill1: "MATLAB", numStars1: 3, skill2:  "VBA", numStars2: 4},
           ],
           financeSkills: [
            {id:  1, skill1: "Algorithmic Trading (MQL, R)", numStars1: 4, skill2:  "Accretion/Dilution Analysis", numStars2: 4},
            {id:  2, skill1: "LBO Modelling", numStars1: 4, skill2:  "DCF Modelling", numStars2: 5},
            {id:  3, skill1: "Experience with Brokers/Exchanges", numStars1: 5, skill2: "Technical Analysis/Price Action", numStars2: 5},
            {id:  4, skill1: "Forex Trading", numStars1: 5, skill2:  "Stock Trading", numStars2: 4},
            {id:  5, skill1: "Options Trading", numStars1: 5, skill2:  "Commodity CFD Trading", numStars2: 3}
           ],
           personalSkills: [
            {id:  1, skill1: "Communication", numStars1: 5, skill2:  "Organization", numStars2: 5},
            {id:  2, skill1: "Time Management", numStars1: 5, skill2:  "Teamwork", numStars2: 5},
            {id:  3, skill1: "Critical Thinking", numStars1: 5, skill2: "Leadership", numStars2: 5},
            {id:  4, skill1: "French", numStars1: 3, skill2:  "Spanish", numStars2: 2},
           ]
        }
     }

    renderTableData(skills) {
        return skills.map((skill) => {
            const { id, skill1, numStars1, skill2, numStars2 } = skill 
            return (
                <tr key={id}>
                    <td className="skills-label">{skill1}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                    <td style={{paddingRight: "5vmin", fontSize: "1.5vmin"}}>{this.stars(numStars1)}</td>
                    <td style={{paddingLeft: "5vmin"}} className="skills-label">{skill2}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                    <td style={{fontSize: "1.5vmin"}}>{this.stars(numStars2)}</td>
                </tr>
            )
        })
    }

    stars(numStars) {
        let stars = [];

        for (let i = 0;i < 5; i++) {
            if (i < numStars) {
                stars.push(<i class="fas fa-star"></i>);
            } else {
                stars.push(<i class="far fa-star"></i>);
            }
        }

        return stars;
    }

    render() {
        return (
            <div id="skills">
                <h1>Skills</h1> 
                <table className="skills">
                    <tbody>
                        <td className="skills-heading" id="personal-skills">Personal Skills</td>
                        {this.renderTableData(this.state.personalSkills)}
                        <td className="skills-heading">Software Skills</td>
                        {this.renderTableData(this.state.softwareSkills)}
                        <td className="skills-heading">Finance Skills</td>
                        {this.renderTableData(this.state.financeSkills)}
                    </tbody>
                </table> 
            </div>
        )
    }
}

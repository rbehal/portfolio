import React, { Component } from 'react'
import '../App.css';
import { LARGE_DESKTOP_SIZE } from '../constants/screenSizes';



export default class skills extends Component {
    constructor(props) {
        super(props)
        this.state = {
            softwareSkills: [
                { id: 1, skill1: "Java", numStars1: 5, skill2: "Python", numStars2: 5 },
                { id: 2, skill1: "Javascript", numStars1: 5, skill2: "HTML/CSS/Bootstrap", numStars2: 5 },
                { id: 3, skill1: "React.JS", numStars1: 4, skill2: "Vue.JS", numStars2: 5 },
                { id: 4, skill1: "Build Systems: Maven/Gradle", numStars1: 4, skill2: "Agile Methodology", numStars2: 5 },
                { id: 5, skill1: "CI/CD: Jenkins, Travis CI", numStars1: 5, skill2: "Version Control: Git", numStars2: 5 },
                { id: 6, skill1: "SQL", numStars1: 3, skill2: "Data Analysis & ML Models (Python, R)", numStars2: 5 },
                { id: 7, skill1: "MATLAB", numStars1: 3, skill2: "VBA", numStars2: 4 },
            ],
            financeSkills: [
                { id: 1, skill1: "Algorithmic Trading (MQL, R)", numStars1: 4, skill2: "Accretion/Dilution Analysis", numStars2: 4 },
                { id: 2, skill1: "LBO Modelling", numStars1: 4, skill2: "DCF Modelling", numStars2: 5 },
                { id: 3, skill1: "Experience with Brokers/Exchanges", numStars1: 5, skill2: "Technical Analysis/Price Action", numStars2: 5 },
                { id: 4, skill1: "Forex Trading", numStars1: 5, skill2: "Stock Trading", numStars2: 4 },
                { id: 5, skill1: "Options Trading", numStars1: 5, skill2: "Commodity CFD Trading", numStars2: 3 }
            ],
            personalSkills: [
                { id: 1, skill1: "Communication", numStars1: 5, skill2: "Organization", numStars2: 5 },
                { id: 2, skill1: "Time Management", numStars1: 5, skill2: "Teamwork", numStars2: 5 },
                { id: 3, skill1: "Critical Thinking", numStars1: 5, skill2: "Leadership", numStars2: 5 },
                { id: 4, skill1: "French", numStars1: 3, skill2: "Spanish", numStars2: 2 },
            ],
            isSmallScreen: false
        }
        this.update = this.update.bind(this);
    }
    componentDidMount() {
        this.update();
        window.addEventListener("resize", this.update);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.update)
    }
    update() {
        this.setState({ isSmallScreen: window.innerWidth < LARGE_DESKTOP_SIZE })
    }

    renderTableData(skills) {
        const isSmallScreen = this.state.isSmallScreen;

        return skills.map((skill) => {
            const { id, skill1, numStars1, skill2, numStars2 } = skill
            const bulletPoint = <i className="fa fa-circle"></i>;

            return (
                <tr key={id}>
                    
                    <td className="skill">
                        {isSmallScreen && bulletPoint}
                        {skill1}
                    </td>
                    
                    {!isSmallScreen && <td className="d-none d-xl-block text-nowrap">{this.stars(numStars1)}</td>}
                    
                    <td className="skill">
                        {isSmallScreen && bulletPoint}
                        {skill2}
                    </td>
                    
                    {!isSmallScreen && <td className="d-none d-xl-block text-nowrap">{this.stars(numStars2)}</td>}
                </tr>
            )
        })
    }

    stars(numStars) {
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

    render() {
        return (
            <section id="skills">
                <h1>Skills</h1>
                <table className="skills">
                    <tbody>
                        <tr>
                            <td className="skills-heading" id="personal-skills">Personal Skills</td>
                        </tr>
                        {this.renderTableData(this.state.personalSkills)}
                        <tr>
                            <td className="skills-heading">Software Skills</td>
                        </tr>
                        {this.renderTableData(this.state.softwareSkills)}
                        <tr>
                            <td className="skills-heading">Finance Skills</td>
                        </tr>
                        {this.renderTableData(this.state.financeSkills)}
                    </tbody>
                </table>
            </section>
        )
    }
}

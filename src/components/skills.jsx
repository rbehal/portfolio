import React, { Component } from 'react'
import '../App.css';

export default class skills extends Component {
    constructor(props) {
        super(props) 
        this.state = { 
           skills: [
              {id:  1, skill1: "Python", numStars1: 1, skill2:  "Vue.JS", numStars2: 5},
              {id:  2, skill1: "Java", numStars1: 2, skill2:  "SQL", numStars2: 2},
              {id:  3, skill1: "Javascript", numStars1: 3, skill2: "Gradle", numStars2: 5},
              {id:  4, skill1: "HTML/CSS", numStars1: 4, skill2:  "Model View Controller", numStars2: 4},
              {id:  5, skill1: "React.JS", numStars1: 5, skill2:  "WHMIS Certification", numStars2: 5}
           ]
        }
     }

    renderTableData() {
        return this.state.skills.map((skill) => {
            const { id, skill1, numStars1, skill2, numStars2 } = skill 
            return (
                <tr key={id}>
                    <td>{skill1}</td>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                    <td>{this.stars(numStars1)}</td>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <td>{skill2}</td>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                    <td>{this.stars(numStars2)}</td>
                </tr>
            )
        })
    }

    stars(numStars) {
        let stars = [];

        for (let i = 0;i < 5; i++) {
            if (i < numStars - 1) {
                stars.push(<i class="fas fa-star"></i>);
            } else {
                stars.push(<i class="far fa-star"></i>);
            }
        }

        return stars;
    }

    render() {
        return (
            <div>
                <h1>Skills</h1> 
                <table className="skills">
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table> 
            </div>
        )
    }
}

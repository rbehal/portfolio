import React, { useState, useEffect } from 'react';
import '../App.css';

import Image from 'react-bootstrap/Image';
import img1 from '../assets/Sidebar/headshot.png';

export default function Sidebar() {
    const [activeLink, setActiveLink] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            const homeHeight = document.querySelector('#home').offsetHeight;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            if (scrollTop + windowHeight === documentHeight) {
                setActiveLink('contact');
            } else {          
                for (let i = 0; i < sections.length; i++) {
                    const section = sections[i];
                    const sectionTop = section.getAttribute('id') === 'home' ? section.offsetTop : section.offsetTop + homeHeight;
                    const sectionBottom = sectionTop + section.offsetHeight;

                    if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
                        const activeLink = section.getAttribute('id');
                        setActiveLink(activeLink);
                        break;
                    }
                }
            }
          };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e, id) => {
        e.preventDefault();

        const section = document.querySelector(`#${id}`);
        const homeHeight = (id == "home") ? 0 : document.querySelector('#home').offsetHeight;
        window.scrollTo({
            top: section.offsetTop + homeHeight,
            behavior: 'smooth'
        });
        setTimeout(() => setActiveLink(id), 400);
    };    

    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Image className="headshot" src={img1} roundedCircle />
                </li>

                <li>
                    <h1 className="sidebar-name">Rahul Behal</h1>
                </li>

                <li>
                    <p>
                        <i className="fas fa-envelope"></i>&nbsp;RahulBehal01@hotmail.com
                    </p>
                </li>

                <div className="quick-links">
                    <ul>
                        <li>
                            <a
                                className={activeLink === 'home' ? 'active' : ''}
                                href="#home"
                                onClick={(e) => handleClick(e, 'home')}
                            >
                                Introduction
                            </a>
                        </li>
                        <li>
                            <a
                                className={activeLink === 'about' ? 'active' : ''}
                                href="#about"
                                onClick={(e) => handleClick(e, 'about')}
                            >
                                About Me
                            </a>
                        </li>
                        <li>
                            <a
                                className={activeLink === 'skills' ? 'active' : ''}
                                href="#skills"
                                onClick={(e) => handleClick(e, 'skills')}
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                className={activeLink === 'projects' ? 'active' : ''}
                                href="#projects"
                                onClick={(e) => handleClick(e, 'projects')}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                className={activeLink === 'work' ? 'active' : ''}
                                href="#work"
                                onClick={(e) => handleClick(e, 'work')}
                            >
                                Work Experience
                            </a>
                        </li>
                        <li>
                            <a
                                className={activeLink === 'contact' ? 'active' : ''}
                                href="#contact"
                                onClick={(e) => handleClick(e, 'contact')}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="icons">
                    <li>
                        <a
                            href="https://www.linkedin.com/in/rbehal01/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/rbehal/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                    </li>
                </div>
            </ul>
        </div>
    );
}

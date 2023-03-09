import React, { useState, useEffect } from 'react'
import '../App.css';

import HomeMobile from './homeMobile'

import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import img1 from '../assets/Home/CQI3.jpg'
import img2 from '../assets/Home/ConnUHacks.jpg'
import img3 from '../assets/Home/AgnicoEagle.jpg'

import { LAPTOP_SIZE } from '../constants/screenSizes';

export default function Home() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      function handleResize() {
        setScreenWidth(window.innerWidth);
      }
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }, []);

    const handleClick = (e, id) => {
        e.preventDefault();

        const section = document.querySelector(`#${id}`);
        const homeHeight = (id == "home") ? 0 : document.querySelector('#home').offsetHeight;
        window.scrollTo({
            top: section.offsetTop + homeHeight,
            behavior: 'smooth'
        });
    };    

    if (screenWidth >= LAPTOP_SIZE) {
        return (
            <section id="home">
                <Carousel controls={false} touch={false}>
                    <Carousel.Item>
                        <Image className="slide" src={img1} fluid />

                        <Carousel.Caption className="d-none d-sm-block">
                            <h2><i>Hi I'm</i></h2>
                            <h1 className="slide-name">Rahul Behal</h1>
                            
                            <Button className="view" variant="light" href="https://1drv.ms/b/s!Aoz-Vqsx3JMGi6NQQqiYHHulevFjBg?e=D4xRvx" target="_blank">
                                View CV&nbsp;&nbsp;
                                <i className="fas fa-download"></i>
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Image className="slide" src={img2} fluid />
                            
                        <Carousel.Caption className="d-none d-sm-block">
                            <h1 className="intro">
                                Checkout what I've worked on!&nbsp;&nbsp;     
                            </h1>

                            <Button className="view" onClick={(e) => handleClick(e, 'projects')} variant="light" href="#projects">
                                View Projects&nbsp;&nbsp;
                                <i className="fas fa-database"></i>
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Image className="slide" src={img3} fluid />

                        <Carousel.Caption className="d-none d-sm-block">
                            <h1 className="intro">I'm always seeking exciting opportunities!&nbsp;&nbsp;</h1>
                            <Button className="view" onClick={(e) => handleClick(e, 'work')} variant="light" href="#work">
                                View Work Experience&nbsp;&nbsp;
                                <i className="fas fa-briefcase"></i>
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
        )
    } else {
        return (
            <section id="home">
                <HomeMobile />
            </section>
        )
    }   
}

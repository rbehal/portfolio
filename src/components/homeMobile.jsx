import React from 'react'
import '../App.css';

import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import img1 from '../assets/Home/mobile.jpg'

export default function HomeMobile() {
    return (
        <section id="homeMobile">
            <Image className="slide" src={img1} fluid />
            <div className="home-mobile-display">
                <h2 className="slide-name"><i>Hi I'm</i></h2>
                <h1>Rahul Behal</h1>
                <Button className="view" variant="light" href="https://1drv.ms/b/s!Aoz-Vqsx3JMGi6NQQqiYHHulevFjBg?e=D4xRvx" target="_blank">
                    View CV&nbsp;&nbsp;
                    <i className="fas fa-download"></i>
                </Button>
            </div>                
        </section>
    )
}

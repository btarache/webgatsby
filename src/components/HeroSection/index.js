import React from 'react';
import { Button } from '../ButtonElements';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Travel More</h1>
            <p>Plan Your Next Trip today</p>
            <div className="Hero-btns">
                <Button fontBig big primary>Get Started</Button>
            </div>
        </div>
    )
};

export default HeroSection;

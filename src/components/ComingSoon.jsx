"use client";
import React from 'react';
import CountDownTimer from './CountDownTimer';
import '../static/styles/ComingSoon.scss';
import '../app/globals.scss';
import Hourglass from './Hourglass';

const ComingSoon = () => {
    return (
        <div className="coming-soon">
            <video autoPlay loop muted className="background-video">
                <source src="/hero_intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content">
                <div className="logo-container">
                    <img src="/xp2.webp" alt="Website Logo" className="logo" />
                    <div className="logo-text">
                        <span className="main-text">XtraPace</span>
                        <span className="tagline">Game on Get Fit!</span>
                    </div>
                </div>
                <div className="timer-container">
                    <h1>Website Coming Soon!</h1>
                    <Hourglass />
                </div>
                <p>We are working hard to give you a better experience. Stay tuned!</p>
                <CountDownTimer days={10} hours={0} minutes={0} seconds={0} />
                <div className="email-content">
                    <p>Subscribe now to get the latest updates!</p>
                    <div className="input-box">
                        <input type="email" placeholder="Enter your email..." />
                        <button>Notify Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
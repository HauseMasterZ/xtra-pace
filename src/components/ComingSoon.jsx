"use client";
import React, { useState, useEffect } from 'react';
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import CountDownTimer from './CountDownTimer';
import '../static/styles/ComingSoon.scss';
const ComingSoon = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [timerTime, setTimerTime] = useState({ days: 30, hours: 0, minutes: 0, seconds: 0 });

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const fetchTimerTime = async () => {
        const timerDoc = doc(db, "timer", "countdown");
        const docSnap = await getDoc(timerDoc);

        if (docSnap.exists()) {
            const data = docSnap.data();
            setTimerTime({
                days: data.days,
                hours: data.hours,
                minutes: data.minutes,
                seconds: data.seconds
            });
        } else {
            console.log("No such document!");
        }
    };

    useEffect(() => {
        fetchTimerTime();
    }, []);



    const handleEmailSubmit = async () => {
        if (!email.includes('@')) {
            alert('Please include @ in the email address.');
            return;
        }

        try {
            await addDoc(collection(db, "emails"), {
                email: email,
                timestamp: new Date()
            });
            setMessage('Thank you for subscribing!');
            alert('Thank you for subscribing!');
            setEmail('');
        } catch (e) {
            console.error("Error adding document: ", e);
            setMessage('Error subscribing. Please try again.');
        }
    };

    return (
        <div className="container">
            <div className="left">
                <div className="coming-soon">
                    <video autoPlay loop muted className="background-video">
                        <source src="/background_video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="logo-container">
                        <div className="logo-text">
                            {/* <img src="/bw.png" alt="Website Logo" className="logo" /> */}
                            <span className='hero-text'>XtraPace</span>
                            <span className="tagline">Game on Get Fit!</span>
                        </div>
                    </div>
                    <div className="timer-container">
                        <h1>Website Coming Soon!</h1>
                    </div>
                    <p>Get notified when we launch</p>
                    {/* <CountDownTimer
                        days={timerTime.days}
                        hours={timerTime.hours}
                        minutes={timerTime.minutes}
                        seconds={timerTime.seconds}
                    /> */}
                    <div className="email-content">
                        <div className="input-box">
                            <input
                                type="email"
                                placeholder="Enter your email..."
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <button onClick={handleEmailSubmit}>Notify Me</button>
                        </div>
                        <p>*Don't worry we will not spam you</p>
                        {message && <p>{message}</p>}
                    </div>
                </div>
                <div className="right">
                    <div className="image-container">
                        <img src={"/prototype.webp"} alt="Product" className='product' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
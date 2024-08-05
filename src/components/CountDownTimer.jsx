import React, { useState, useEffect } from 'react';
import '../static/styles/CountDownTimer.scss';
import Hourglass from './Hourglass';
const CountDownTimer = ({ days, hours, minutes, seconds }) => {
    const [totalSeconds, setTotalSeconds] = useState(days * 86400 + hours * 3600 + minutes * 60 + seconds);

    useEffect(() => {
        const timer = setInterval(() => {
            setTotalSeconds(prevTotalSeconds => {
                if (prevTotalSeconds <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTotalSeconds - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (totalSeconds) => {
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return { days, hours, minutes, seconds };
    };

    const timeLeft = formatTime(totalSeconds);

    return (
        <div className="time-content">
            <div className="time days">
                <span className="number">{timeLeft.days}</span>
                <span className="text">days</span>
            </div>
            <div className="time hours">
                <span className="number">{timeLeft.hours}</span>
                <span className="text">hours</span>
            </div>
            <div className="time minutes">
                <span className="number">{timeLeft.minutes}</span>
                <span className="text">minutes</span>
            </div>
            <div className="time seconds">
                <span className="number">{timeLeft.seconds}</span>
                <span className="text">seconds</span>
            </div>
        </div>
    );
};

export default CountDownTimer;
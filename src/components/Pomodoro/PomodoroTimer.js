import React, { useState, useEffect } from 'react';
import './PomodoroTimer.css';
import Extra from '../Extra';

const PomodoroTimer = () => {
  const [timer, setTimer] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsBreak(!isBreak);
      setTimer(isBreak ? 25 * 60 : 5 * 60);
    }

    return () => clearInterval(interval);
  }, [isRunning, timer, isBreak]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsBreak(false);
    setTimer(25 * 60);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <>
    <div className="pomodoro-timer">
      <h1>Pomodoro Timer</h1>
      <div className="timer">{formatTime(timer)}</div>
      <div className="buttons">
        {!isRunning && <button onClick={startTimer}>Start</button>}
        {isRunning && <button onClick={stopTimer}>Stop</button>}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
    <Extra></Extra>
    
    
    </>
    
  );
};

export default PomodoroTimer;

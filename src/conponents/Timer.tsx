import { useState, useEffect } from 'react';

const Timer = () => {
  // State to keep track of time in seconds
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    // If time reaches zero, stop the timer
    if (seconds <= 0) return;

    // Set up an interval to decrease the seconds every second
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    // Clean up the interval on component unmount or when seconds change
    return () => clearInterval(intervalId);
  }, [seconds]);

  return (
    <div>
      <h1 style={{color:"red", fontSize:"16px", textAlign:"center", fontWeight:"500"}}>Wait for Resend: {seconds} seconds</h1>
    </div>
  );
};

export default Timer;

import React, { useEffect, useState } from "react";
import "./style.css";

const Year = () => {
  const [seconds, setSeconds] = useState(new Date().getSeconds());
 var today = new Date(),
    hours = today.getHours(),
    minutes = '' + today.getMinutes();

  useEffect( () => {
    const interval = setInterval(() => {
      setSeconds(() => new Date().getSeconds());
    }, 1000);
     return () => clearInterval(interval);
  }, []);

  function minute() {
      if( minutes.length <= 1 )
      {
   return minutes = '0' + minutes
  }
  else{
      return minutes;
  }
}
  return (
    <>
      <div className="homin">
        <div className="hours">{hours}</div>
        <div className="minutes">{minute().toString()}</div>
      </div>
      <div className="seconds">{seconds}</div>
    </>
  );
};

export default Year;

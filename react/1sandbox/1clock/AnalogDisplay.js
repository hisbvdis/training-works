import React from "react";

const AnalogDisplay = ({time}) => {
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();

  const secondHandStyle = {
    transform: `rotate(${(seconds / 60) * 360 - 90}deg)`
  }

  const minuteHandStyle = {
    transform: `rotate(${(minutes / 60) * 360 - 90}deg)`,
  }

  const hourHandStyle = {
    transform: `rotate(${(minutes / 60) * 360 - 90}deg)`,
  }

  return (
    <figure className="circle">
      <span className="hand  hourHand" style={hourHandStyle}></span>
      <span className="hand  minuteHand" style={minuteHandStyle}></span>
      <span className="hand  secondHand" style={secondHandStyle}></span>
    </figure>
  )
}

export default AnalogDisplay;
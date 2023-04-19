import React from "react";

const DigitalDisplay = ({time}) => (
  <h1>{time.toLocaleTimeString()}</h1>
)

export default DigitalDisplay;
import { useEffect, useState } from "react";

const getLocalStorageValue = () => {
  const value = localStorage.getItem("value");
  return value ? +value : 0;
}

const App = () => {
  const [value, setValue] = useState(getLocalStorageValue);
  const [timer, setTimer] = useState(null);

  // Запустить таймер
  const startTimer = () => {
    if (timer) return;
    const id = setInterval(() => setValue(prev => prev + 1), 1000);
    setTimer(id);
  }
  
  // Остановить таймер
  const stopTimer = () => {
    clearInterval(timer);
    setTimer(null);
  }

  // Сбросить таймер
  const resetTimer = () => {
    setValue(0);
  }

  // ComponentDidUpdate
  useEffect(() => {
    localStorage.setItem("value", value);
  }, [value])


  // ComponentDidMount
  useEffect(() => {
    startTimer();
    
    // ComponentWillUnmount
    return () => stopTimer();
  }, [])

  
  return (<>
    <h1>{value}</h1>
    <button type="button" onClick={startTimer}>Start</button>
    <button type="button" onClick={stopTimer}>Stop</button>
    <button type="button" onClick={resetTimer}>Reset</button>
  </>)
}

export default App;
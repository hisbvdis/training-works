import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isLaunched: false,
      timerId: null,
    }
  }

  componentDidMount = () => {
    if (localStorage.getItem("count")) {
      this.setState({count: Number(localStorage.getItem("count"))});
    }
    if (localStorage.getItem("isLaunched") === "true") {
      this.startTimer();
    }
  }

  componentDidUpdate = () => {
    localStorage.setItem("count", String(this.state.count));
  }

  componentWillUnmount = () => {
    this.stopTimer();
  }

  // Запустить таймер
  startTimer = () => {
    const timerId = setInterval(() => {
      this.setState({count: this.state.count + 1});
    }, 1000)

    this.setState({isLaunched: true});
    this.setState({timerId});

    localStorage.setItem("isLaunched", "true");
  }

  
  // Остановить таймер
  stopTimer = () => {
    clearInterval(this.state.timerId);

    this.setState({isLaunched: false});
    localStorage.setItem("isLaunched", "false");
  }


  // Сбросить таймер
  resetTimer = () => {
    this.setState({count: 0});
    this.stopTimer();
  }

  render() {
    return (<>
      <h1>{value}</h1>
      <button type="button" onClick={startTimer}>Start</button>
      <button type="button" onClick={stopTimer}>Stop</button>
      <button type="button" onClick={resetTimer}>Reset</button>
    </>)
  }
}

export default App;
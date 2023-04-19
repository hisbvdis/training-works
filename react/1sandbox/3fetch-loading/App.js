import React from "react";

class App extends React.Component {
  // 1. Поля класса (вместо конструктора)
  state = {
    // 1.1. По умолчанию статус "загрузка" равен "false"
    loading: false,
    // 1.2. Подготовка объекта для подстановки данных
    user: {}
  };

  // 2. Когда компонент добавлен на страницу
  componentDidMount() {
    // 2.1. Выполнить метод загрузки данных
    this.loadUserData();
  }

  // 3. Метод загрузки данных
  loadUserData = () => {
    // 3.1. Поставить статус загрузки равным "true"
    this.setState({loading: true})

    // 3.2. Эмуляция задержки загрузки с помощью таймера
    setTimeout(
      () => {
        // 3.3. Fetch-запрос данных
        fetch("https://jsonplaceholder.typicode.com/users/1")
          .then(response => response.json())
          // 3.4. По окончании загрузки
          .then(data => this.setState({
            // Подставить данные пользователя..
            user: data,
            // Изменить данные статуса загрузки на "false"
            loading: false
          }))
      },
      1000
    )
  }

  // 4. Рендеринг
  render() {
    // 4.1. Если происходит загрузка, отображать "loading...",
    // .... иначе — загруженный текст
    const text = this.state.loading ? "Loading..." : this.state.user.name;
    
    return (
      <p>{text}</p>
    )
  }
}

export default App;
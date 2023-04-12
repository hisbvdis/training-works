import "./assets/styles/style.scss";
import Header from "./layouts/Header/Header";
import Hero from "./layouts/Hero/Hero";
import Users from "./layouts/Users/Users";
import Form from "./layouts/Form/Form";


const App = () => {
  return (<>
    <Header/>
    <main>
      <Hero/>
      <Users/>
      <Form/>
    </main>
  </>)
}

export default App;
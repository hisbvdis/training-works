import "./style/base/reset.scss";
import "./style/base/base.scss";
import "./style/base/fonts.scss";
import "./style/base/variables.scss";
import "./style/blocks/srOnly.scss";
import "./style/blocks/btn.scss";
import "./style/blocks/main.scss";
import "./App.scss";
import Header from "./components/Header/Header.js";
import Promo from "./components/Promo/Promo.js";
import Chars from "./components/Chars/Chars.js";
import CharInfo from "./components/CharInfo/CharInfo.js";
import { useState } from "react";

const App = () => {
  const [char, setChar] = useState({});
  
  const showChar = (evt, char) => {
    if (evt) evt.preventDefault();
    setChar(char);
  }
  
  return (<>
    <div className="app">
      <Header className="app_header"/>
      <Promo className="app__promo"/>
      <Chars showChar={showChar}/>
      <CharInfo className="app__charInfo" char={char}/>
    </div>
  </>)
}

export default App;
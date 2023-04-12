import logo from "../../assets/img/logo.svg";
import "./Logo.scss";

const Logo = ({className}) => {
  return (<>
    <div className={`logo  ${className}`}>
      <a className="logo__link" href="#">
        <img className="logo__img" src={logo} width="104" height="26" alt="TestTask"/>
      </a>
    </div>
  </>)
}

export default Logo;
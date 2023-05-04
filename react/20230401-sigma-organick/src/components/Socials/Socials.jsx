import clsx from "clsx";
import "./Socials.scss";

const Socials = ({className}) => {
  return (<>
    <ul className={clsx("socials", className)}>
      <li className="socials__item">
        <a className="socials__link" href="#">
          <span className="socials__icon  socials__icon--instagram"></span>
          <span className="srOnly">Instagram</span>
        </a>
      </li>
      <li className="socials__item">
        <a className="socials__link" href="#">
          <span className="socials__icon  socials__icon--facebook"></span>
          <span className="srOnly">Facebook</span>
        </a>
      </li>
      <li className="socials__item">
        <a className="socials__link" href="#">
          <span className="socials__icon  socials__icon--twitter"></span>
          <span className="srOnly">Twitter</span>
        </a>
      </li>
      <li className="socials__item">
        <a className="socials__link" href="#">
          <span className="socials__icon  socials__icon--pinterest"></span>
          <span className="srOnly">Pinterest</span>
        </a>
      </li>
    </ul>
  </>)
}

export default Socials;

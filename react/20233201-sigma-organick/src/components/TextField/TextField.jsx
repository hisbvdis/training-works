import { createElement, useId } from "react";
import clsx from "clsx";
import "./TextField.scss";

const TextField = (props) => {
  let { className, type, name, placeholder, errorMsg, rows, label, theme, showlabel=false, textarea, onChange, value, isValid=true } = props;
  let tag = textarea ? "textarea" : "input";
  let id = useId();
  
  let inputProps = {className: clsx("textField__input", !isValid && "textField__input--invalid"), id, type, name, placeholder, rows, onChange, value};

  return (
    <div className={clsx("textField", className, theme && `textField--${theme}`)}>
      <label className={clsx("textField__label", !showlabel && "textField__label--srOnly")} htmlFor={id}>
        {label}
      </label>
      <p className="textField__inner">
        {createElement(tag, inputProps)}
      </p>
      <span className="textField__errorMsg" aria-live="polite">
        {errorMsg}
      </span>
    </div>
  );
}

export default TextField;

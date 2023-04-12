import "./Button.scss";

const Button = ({className="", children, link, href, type, disabled, onClick}) => {
  const Btn = () => {
    return (<>
      <button
        className={`btn  ${className}`}
        type={type || "button"}
        disabled={disabled ? true : false}
        onClick={onClick}
        >{children}</button>
    </>)
  }

  const Link = () => {
    return (<>
      <a className={`btn  ${className}`} href={href}>{children}</a>
    </>)
  }

  const Tag = link ? Link : Btn;

  return (<>
    <Tag>{children}</Tag>
  </>)
}


export default Button;
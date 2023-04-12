import "./TableBtn.scss";

const TableBtn = ({clickHandler, children, img}) => {
  return (<>
    <button className="tableBtn" type="button" onClick={clickHandler}>
      <span className="srOnly">{children}</span>
      <img className="tableBtn__icon" src={`./img/${img}`} width="21" height="21" aria-hidden="true"/>
    </button>
  </>)
}

export default TableBtn;
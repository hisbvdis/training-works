const ModalOpener = ({targetID, link, manual, href, children, clickHandler}) => {
  const openModal = manual ? false : true;

  const Link = () => {
    return (<>
      <a href={href || ""} data-open-modal={openModal}  data-target-modal-id={targetID} onClick={clickHandler}>
        {children}
      </a>
    </>)
  }

  const Button = () => {
    return (<>
      <button type="button" data-open-modal={openModal}  data-target-modal-id={targetID} aria-haspopup="true" onClick={clickHandler}>
        {children}
      </button>
    </>)
  }

  const Tag = link ? Link : Button;
  
  return (<>
    <Tag>{children}</Tag>
  </>)
}

export default ModalOpener;
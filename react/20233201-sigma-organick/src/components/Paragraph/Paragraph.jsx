import clsx from "clsx";
import "./Paragraph.scss";

const Paragraph = (props) => {
  const { className, size, children } = props;
  
  return (
    <>
      <p className={clsx("paragraph", className, size && `paragraph--${size}`)}>
        {children}
      </p>
    </>
  );
}

export default Paragraph;

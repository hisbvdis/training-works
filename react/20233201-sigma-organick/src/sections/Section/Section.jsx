import clsx from "clsx";
import "./Section.scss";

const Section = (props) => {
  const { id, children } = props;
  
  return (<>
    <section
      className={clsx("section", id)}
      id={id}
      aria-labelledby={`${id}-heading`}
    >
      {children}
    </section>
  </>);
}

export default Section;

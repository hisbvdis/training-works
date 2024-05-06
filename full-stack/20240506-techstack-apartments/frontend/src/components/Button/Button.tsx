import clsx from "clsx";
import styles from "./styles.module.css";

export default function Button(props:Props) {
  const { children, className, color="#23ba99", onClick } = props;

  return (
    <button
      className={clsx(className, styles["button"])}
      style={{backgroundColor: color}}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

interface Props {
  children?: React.ReactNode;
  className?: string;
  color?: string;
  onClick?:React.MouseEventHandler;
}
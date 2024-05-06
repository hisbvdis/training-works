import styles from "./styles.module.css";

export default function Card(props:Props) {
  const { children, style } = props;

  return (
    <div className={styles.card} style={style}>
      {children}
    </div>
  )
}

interface Props {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
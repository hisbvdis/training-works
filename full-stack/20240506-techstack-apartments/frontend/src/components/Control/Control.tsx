import styles from "./styles.module.css";

export default function Control(props:Props) {
  const { label, children } = props;

  return (
    <label className={styles["control"]}>
      <span>{label}</span>
      {children}
    </label>
  )
}

interface Props {
  label?: string;
  children: React.ReactNode;
}
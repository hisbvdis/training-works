import Button from "../Button/Button.tsx";
import styles from "./styles.module.css";

export default function Rent(props:Props) {
  const { id, name, rooms, price, description, is_rented, handleDeleteRent,handleChangeRent } = props;

  return (
    <div className={styles["rent"]}>
      <p className={styles["rent__info"]}>
        <span className={styles["rent__infoItem"]}>{name}</span>
        <span className={styles["rent__infoDivider"]}>/</span>
        <span className={styles["rent__infoItem"]}>{rooms}</span>
        <span className={styles["rent__infoDivider"]}>/</span>
        <span className={styles["rent__infoItem"]}>{price}</span>
        <span className={styles["rent__infoDivider"]}>/</span>
        <span className={styles["rent__infoItem"]}>{description.slice(0, 20)}...</span>
      </p>
      <p className={styles["rent__buttons"]}>
        {is_rented ? null : <Button className={styles["rent__button"]} color="#374fc7" onClick={() => handleChangeRent(id)}>Rent</Button>}
        {is_rented ? null : <Button className={styles["rent__button"]} color="#f2323f" onClick={() => handleDeleteRent(id)}>Delete</Button>}
        {is_rented ? <Button className={styles["rent__button"]} color="#f2323f" onClick={() => handleChangeRent(id)}>Cancel rent</Button> : null}
      </p>
    </div>
  )
}

interface Props {
  id:string;
  name:string;
  rooms:number;
  price:number;
  description:string;
  is_rented?: boolean;
  handleDeleteRent:(id:string)=>Promise<void>;
  handleChangeRent:(id:string)=>Promise<void>;
}
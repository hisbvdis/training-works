import { useEffect, useState } from "react";
import FortniteService from "../../services/Fortnite.service";
import Good from "../Good/Good";
import Container from "../../layouts/Container/Container";
import "./Goods.css";

const Goods = () => {
  // Состояние для списка товаров
  const [goods, setGoods] = useState([]);
  // Получить функционал из "сервиса" Fortnite
  const { getGoods, isLoading } = FortniteService();
  // Загрузить список товаров
  useEffect(() => {
    getGoods().then(setGoods);
  }, [])

  return (<>
    <section className="goods">
      <Container className="goods__container">
        <ul className="goods__list">
          {isLoading
            ? "Загрузка"
            : goods
                .slice(0, 10)
                .map(item => <Good key={item.id} {...item}/>)}
        </ul>
      </Container>
    </section>
  </>)
}

export default Goods;
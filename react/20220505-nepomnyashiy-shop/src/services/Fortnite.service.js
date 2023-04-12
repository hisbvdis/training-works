import useHttp from "../hooks/useHttp.hook";

// Основа адреса для краткости
const baseURL = "https://fortniteapi.io/v2/shop?lang=ru";
// Ключ доступа к API
const apiKey = "f03b31cf-7af7e6d3-1d237cce-c2fe154e";

const FortniteService = () => {
  const { request, isLoading } = useHttp();

  // Функция получения списка товаров магазина (с помощью "заготовки")
  const getGoods = async () => {
    const data = await request(baseURL, {headers: {Authorization: apiKey}});
    return data.shop.map(simplifyGoodFormat);
  }

  // Функция, которая упрощает названия ключей объекта каждого товара
  const simplifyGoodFormat = (item) => ({
    id: item.mainId,
    name: item.displayName,
    desc: item.displayDescription,
    price: item.price.finalPrice,
    icon: item.granted[0].images.icon,
  })

  return { getGoods, isLoading };
}

export default FortniteService;
// =====================================================================
// СОЗДАНИЕ ХУКА
// =====================================================================
import { useCallback, useState } from "react"


const useHttp = () => {
  // 1. Состояние хука
  // 1.1. Статус загрузки
  const [isLoading, setLoading] = useState(false);
  // 1.2. Статус ошибки
  const [error, setError] = useState("");


  // 2. Функционал хука
  // 2.1. Функция, которая отправляет HTTP-запрос
  // — чтобы не делать лишние запросы, функция мемоизируется (useCallback)
  // — функция асинхронная, так как нужно будет ждать ответы fetch-запросов
  const request = useCallback(async (url, method="GET", body=null, headers={}) => {

    // Перед отправкой запроса установить статус загрузки в "true"
    setLoading(true);
    // Обработать ошибки в случае неудачного запроса
    try {
      const response = await fetch(url, {method, body, headers});
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }
      const data = await response.json();
      // Если данные успешно загрузились, установить статус загрузки в "false"
      setLoading(false);
      return data;
    }
    catch (err) {
      // Если при загрузке возникла ошибка
      // - установить статус загрузки в "false"
      setLoading(false);
      // - установить ошибку
      setError(err.message);
      // - прекратить выполенние кода, выбросив ошибку, полученную через параметр
      throw err;
    }
  }, [])

  // 2.2. Функция, которая очищает ошибку
  const clearError = useCallback(() => {
    setError("");
  }, [])


  // 3. Вернуть интерфейс хука
  // 3.1. request — функция выполнения запроса
  // 3.2. loading — статус загрузки
  // 3.3. error — наличие ошибки
  // 3.4. clearError — функция сброса статуса ошибки
  return {request, isLoading, error, clearError};
}

export default useHttp;
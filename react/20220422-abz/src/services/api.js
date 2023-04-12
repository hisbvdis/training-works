const baseURL = "https://gateway.marvel.com:443/v1/public/";
const apiKey = "apikey=fa048bd5ea2cf04c794f49fdb2d0415a";

export const getUsers = async (count, offset=0) => {
  const response = await fetch(`${baseURL}characters?limit=${count}&offset=${offset}&${apiKey}`);
  const data = response.json();
  return data;
}
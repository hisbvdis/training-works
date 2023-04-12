const baseURL = "https://gateway.marvel.com:443/v1/public/";
const apiKey = "apikey=fa048bd5ea2cf04c794f49fdb2d0415a";

const getData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Could not fetch ${url}, status: ${response.status}`);
  }
  return await response.json();
}

export const getAllCharacters = async (offset) => {
  const response = await getData(`${baseURL}characters?limit=9&offset=${offset}&${apiKey}`);
  return response.data.results.map(cleanCharacterData);
}

export const getCharacter = async (id) => {
  const response = await getData(`${baseURL}characters/${id}?${apiKey}`)
  return cleanCharacterData(response.data.results[0]);
}

const cleanCharacterData = (char) => {
  return {
    id: char.id,
    name: char.name,
    desc: char.description,
    imgSrc: char.thumbnail.path + "." + char.thumbnail.extension,
    homeLink: char.urls[0].url,
    wikiLink: char.urls[1].url,
    comics: char.comics.items,
  }
}
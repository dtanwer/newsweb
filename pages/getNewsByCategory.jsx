import fetch from 'isomorphic-unfetch';
import api from './api/api.json'

async function getNewsByCategory(category) {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=382ef23b3b284c54ad2b65d15e6e2e1c`);
  const data = await res.json();
  // const data =api;
  return data.articles;
}

export default getNewsByCategory;

import fetch from 'isomorphic-unfetch';
import api from './api/api.json'

async function getNewsbySearch(search) {
  const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=382ef23b3b284c54ad2b65d15e6e2e1c`);
  const data = await res.json();
  return data;
}

export default getNewsbySearch;
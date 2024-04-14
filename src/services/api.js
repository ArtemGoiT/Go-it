import axios from 'axios';
// библиотека _)))
export const dummyAPI = axios.create({
  baseURL: 'https://dummyjson.com',
});
// идем на бекенд искать )) чудеса),
// можно тут слешь или в другом месте его поставить

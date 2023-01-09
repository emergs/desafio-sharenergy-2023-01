import axios from 'axios';

const apiDog = axios.create({
  baseURL: 'https://random.dog/',
  timeout: 3000
});

const apiCat = axios.create({
  baseURL: 'https://http.cat',
  timeout: 3000,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

const apiCrud = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 3000
})

const apiUsers = axios.create({
  baseURL: 'https://randomuser.me/api/',
  timeout: 3000
})

export { apiDog, apiCat, apiCrud, apiUsers };
import { dummyAPI } from '../services/api';


// Задача 1

export async function getAllProducts() {
  return await dummyAPI.get('/products');
}


// задачаа 2

export async function getProductById(id) {
  return await dummyAPI.get(`/products/${id}`)
}



import { dummyAPI } from '../services/api';

// Задача 1

export async function getAllProducts() {
  return await dummyAPI.get('/products');
}

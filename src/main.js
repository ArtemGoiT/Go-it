// импорт функций с products c продукта)
import { getAllProducts } from './requests/products';
// импорт шаблонных карточек_))
import { markupAllProducts } from './services/markupService';

// элементы html

const allProducts = document.querySelector('#allProducts');

// Задача 1

getAllProducts().then(({ data: { products } }) => {
  console.log(products);
  const markupCards = markupAllProducts(products);
  allProducts.insertAdjacentHTML('beforebegin', markupCards);
});

//

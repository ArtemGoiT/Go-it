// импорт функций с products c продукта)
import { getAllProducts, getProductById } from './requests/products';

// импорт шаблонных карточек_))
import { markupAllProducts, markupProductById } from './services/markupService';

// элементы html

// const allProducts = document.querySelector('#allProducts');
const singleProductForm = document.querySelector('#singleProductForm');
const singleProduct = document.querySelector('#singleProduct');
// Задача 1

// getAllProducts().then(({ data: { products } }) => {
//   console.log(products);
//   const markupCards = markupAllProducts(products);
//   allProducts.insertAdjacentHTML('beforebegin', markupCards);
// });

//

// задача 2

singleProductForm.addEventListener('submit', handelFindProduct);
function handelFindProduct(event) {
  event.preventDefault()
  const id = event.target.elements.id.value
  // getProductById(id).then(console.log)

  getProductById(id).then(({ data }) => {

    const markupCard = markupProductById(data)
    singleProduct.innerHTML = markupCard
    singleProductForm.reset()
  })
}




//  Задача 1

export const markupAllProducts = products => {
  return products
    .map(({ id, title, description, brand, price, images }) => 
    `<li data-id="${id}">
      <img src="${images[0]}" alt="${title}">
      <h3>Brand:${brand}</h3>
      <h4>model:${title}</h4>
      <p>description:${description}</p>
      <p>price:${price}</p>
    </li>`
)
.join('');
};


// задача 2


export const markupProductById = ({ id, title, description, brand, price, images }) => {
  return `<div data-id="${id}">
      <img src="${images[0]}" alt="${title}">
      <h3>Brand:${brand}</h3>
      <h4>model:${title}</h4>
      <p>description:${description}</p>
      <p>price:${price}</p>
    </div>`
}


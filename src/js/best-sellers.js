// Предполагаем, что у вас есть products.json в папке src
fetch('../json/products.json')
  .then(response => response.json())
  .then(data => {
    // Теперь переменная `data` содержит массив с товарами.
    // Вы можете перебрать его и создать HTML-элементы для каждого товара.
    const productList = document.getElementById('best-sellers');
    data.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      productCard.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">$${product.price}</p>
        ${product.oldPrice ? `<p class="old-price">$${product.oldPrice}</p>` : ''}
        `;
      productList.appendChild(productCard);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
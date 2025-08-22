document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products');


    fetch('../json/products.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network error: ' + response.statusText);
            }
            return response.json();
        })
        .then(products => {
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');


                let statusTag = '';
                if (product.isSellingFast) {
                    statusTag = '<div class="status-tag selling-fast">SELLING FAST</div>';
                } else if (product.isSoldOut) {
                    statusTag = '<div class="status-tag sold-out">SOLD OUT</div>';
                }


                let oldPriceHtml = '';
                let priceClass = '';
                let discountTag = '';
                if (product.oldPrice) {
                    oldPriceHtml = `<span class="old-price">$${product.oldPrice}</span>`;
                    priceClass = 'has-old-price';
                    discountTag = '<div class="discount-tag">20% OFF</div>';
                }


                productCard.innerHTML = `
                    <div class="product-image-wrapper">
                        <img src="${product.imageUrl}" alt="${product.name}">
                        ${statusTag}
                        ${discountTag}
                    </div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">
                        <span class="current-price ${priceClass}">$${product.price}</span>
                        ${oldPriceHtml}
                    </div>
                    <button class="add-to-cart-btn">
                        <svg width="16" height="24" class="add-to-cart-icon">
                            <use href="./img/symbol-defs.svg#icon-cart"></use>
                        </svg>
                    </button>
                `;


                productsContainer.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error while receiving goods:', error));
});


// --- Код для прокрутки при клике на "View all" ---
    const viewAllLink = document.querySelector('.view-all-link');


    if (viewAllLink) { // Проверяем, что ссылка найдена
        viewAllLink.addEventListener('click', (event) => {
            event.preventDefault(); // Отменяем стандартное поведение ссылки (переход по URL)


            // Прокручиваем до контейнера с карточками товаров
            productsContainer.scrollIntoView({
                behavior: 'smooth', // Делаем прокрутку плавной
                block: 'start'      // Выравниваем верхний край контейнера по верху видимой области
            });
        });
    }

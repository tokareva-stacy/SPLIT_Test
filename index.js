(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();(()=>{const n=document.querySelector("[data-menu]"),t=document.querySelector("[data-menu-open]"),o=document.querySelector("[data-menu-close]"),r=document.body;if(n&&t&&o){const e=()=>{n.classList.toggle("is-open"),r.classList.toggle("is-menu-open")};t.addEventListener("click",e),o.addEventListener("click",e)}})();document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("products");fetch("../json/products.json").then(t=>{if(!t.ok)throw new Error("Network error: "+t.statusText);return t.json()}).then(t=>{t.forEach(o=>{const r=document.createElement("div");r.classList.add("product-card");let e="";o.isSellingFast?e='<div class="status-tag selling-fast">SELLING FAST</div>':o.isSoldOut&&(e='<div class="status-tag sold-out">SOLD OUT</div>');let s="",c="",i="";o.oldPrice&&(s=`<span class="old-price">$${o.oldPrice}</span>`,c="has-old-price",i='<div class="discount-tag">20% OFF</div>'),r.innerHTML=`
                    <div class="product-image-wrapper">
                        <img src="${o.imageUrl}" alt="${o.name}">
                        ${e}
                        ${i}
                    </div>
                    <h3 class="product-name">${o.name}</h3>
                    <div class="product-price">
                        <span class="current-price ${c}">$${o.price}</span>
                        ${s}
                    </div>
                    <button class="add-to-cart-btn">
                        <svg width="16" height="24" class="add-to-cart-icon">
                            <use href="./img/symbol-defs.svg#icon-cart"></use>
                        </svg>
                    </button>
                `,n.appendChild(r)})}).catch(t=>console.error("Error while receiving goods:",t))});const l=document.querySelector(".view-all-link");l&&l.addEventListener("click",n=>{n.preventDefault(),productsContainer.scrollIntoView({behavior:"smooth",block:"start"})});
//# sourceMappingURL=index.js.map

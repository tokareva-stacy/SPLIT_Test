(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();(()=>{const r=document.querySelector("[data-menu]"),n=document.querySelector("[data-menu-open]"),s=document.querySelector("[data-menu-close]"),c=document.body;if(r&&n&&s){const e=()=>{r.classList.toggle("is-open"),c.classList.toggle("is-menu-open")};n.addEventListener("click",e),s.addEventListener("click",e)}})();document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("products");fetch("../json/products.json").then(n=>{if(!n.ok)throw new Error("Network error: "+n.statusText);return n.json()}).then(n=>{n.forEach(s=>{const c=document.createElement("div");c.classList.add("product-card");let e="";s.isSellingFast?e='<div class="status-tag selling-fast">SELLING FAST</div>':s.isSoldOut&&(e='<div class="status-tag sold-out">SOLD OUT</div>');let t="",i="",d="";s.oldPrice&&(t=`<span class="old-price">$${s.oldPrice}</span>`,i="has-old-price",d='<div class="discount-tag">20% OFF</div>'),c.innerHTML=`
                    <div class="product-image-wrapper">
                        <img src="${s.imageUrl}" alt="${s.name}">
                        ${e}
                        ${d}
                    </div>
                    <h3 class="product-name">${s.name}</h3>
                    <div class="product-price">
                        <span class="current-price ${i}">$${s.price}</span>
                        ${t}
                    </div>
                    <button class="add-to-cart-btn">
                        <svg width="16" height="24" class="add-to-cart-icon">
                            <use href="./img/symbol-defs.svg#icon-cart"></use>
                        </svg>
                    </button>
                `,r.appendChild(c)})}).catch(n=>console.error("Error while receiving goods:",n))});const f=document.querySelector(".view-all-link");f&&f.addEventListener("click",r=>{r.preventDefault(),productsContainer.scrollIntoView({behavior:"smooth",block:"start"})});document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector(".img-wrapper"),n=r.querySelector(".before-wrapper"),s=r.querySelector(".after-wrapper"),c=r.querySelector(".slider-handle");let e=!1;function t(o){const a=r.getBoundingClientRect(),l=Math.max(0,Math.min(o-a.left,a.width))/a.width*100;n.style.clipPath=`inset(0 ${100-l}% 0 0)`,s.style.clipPath=`inset(0 0 0 ${l}%)`,c.style.left=`${l}%`}const i=o=>{e=!0,t(o.touches?o.touches[0].clientX:o.clientX),o.preventDefault()},d=o=>{e&&(o.touches&&o.preventDefault(),t(o.touches?o.touches[0].clientX:o.clientX))},u=()=>e=!1;c.addEventListener("mousedown",i),c.addEventListener("touchstart",i,{passive:!1}),document.addEventListener("mousemove",d),document.addEventListener("touchmove",d,{passive:!1}),document.addEventListener("mouseup",u),document.addEventListener("touchend",u),r.addEventListener("click",o=>t(o.clientX))});
//# sourceMappingURL=index.js.map

(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();(()=>{const s=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),l=document.querySelector(".js-close-menu"),t=()=>{const e=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!e),s.classList.toggle("is-open")};n.addEventListener("click",t),l.addEventListener("click",t),window.matchMedia("(min-width: 1440px)").addEventListener("change",e=>{e.matches&&(s.classList.remove("is-open"),n.setAttribute("aria-expanded",!1))})})();$(".main-restaurant-slider").slick({dots:!1,infinite:!1,speed:1300,variableWidth:!0,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:1440,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:375,settings:{slidesToShow:1,slidesToScroll:1}}]});$(".page-hero-slider").slick({dots:!1,infinite:!1,speed:1300,variableWidth:!0,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:1440,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:375,settings:{slidesToShow:1,slidesToScroll:1}}]});$(".menu-page-slider").slick({dots:!1,infinite:!1,speed:1300,variableWidth:!0,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:1440,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:375,settings:{slidesToShow:1,slidesToScroll:1}}]});(()=>{const s=[{openModalBtns:document.querySelectorAll("[data-price-open]"),closeModalBtns:document.querySelectorAll("[data-price-close]"),modal:document.querySelector("[data-price]")},{openModalBtns:document.querySelectorAll("[data-room-open]"),closeModalBtns:document.querySelectorAll("[data-room-close]"),modal:document.querySelector("[data-room]")},{openModalBtns:document.querySelectorAll("[data-table-open]"),closeModalBtns:document.querySelectorAll("[data-table-close]"),modal:document.querySelector("[data-table]")}];function n(t){if(!t.openModalBtns.length||!t.closeModalBtns.length||!t.modal)return;t.openModalBtns.forEach(o=>{o.addEventListener("click",l.bind(null,t))}),t.closeModalBtns.forEach(o=>{o.addEventListener("click",l.bind(null,t))});const e=t.modal.querySelector('[type="submit"]');e&&e.addEventListener("click",l.bind(null,t))}function l(t){t.modal.classList.toggle("is-hidden")}s.forEach(t=>{n(t)})})();var r=document.getElementsByClassName("nav-link");for(var i=0;i<r.length;i++)r[i].href==window.location.href&&((window.location.pathname=="/"||window.location.pathname.endsWith("/index.html"))&&window.location.pathname!=="/room.html"?r[i].classList.add("current-index"):r[i].classList.add("current-other"));window.addEventListener("load",function(){const s=document.getElementById("price-number-nights"),n=document.getElementById("price-currency-nights"),l=10;if(!(!s||!n)){for(let t=1;t<=l;t++){const e=document.createElement("option");e.value=t,e.textContent=t,s.appendChild(e)}s.value="1",n.value="1000",s.addEventListener("change",function(){const e=parseInt(this.value)*1e3;n.value=e})}});
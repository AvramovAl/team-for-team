(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function l(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=l(e);fetch(e.href,n)}})();(()=>{const s=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),l=document.querySelector(".js-close-menu"),t=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),s.classList.toggle("is-open")};o.addEventListener("click",t),l.addEventListener("click",t),window.matchMedia("(min-width: 1440px)").addEventListener("change",e=>{e.matches&&(s.classList.remove("is-open"),o.setAttribute("aria-expanded",!1))})})();".main-restaurant-slider".slick({dots:!1,infinite:!1,speed:1300,variableWidth:!0,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:1440,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:375,settings:{slidesToShow:1,slidesToScroll:1}}]});$(".page-hero-slider").slick({dots:!1,infinite:!1,speed:1300,variableWidth:!0,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:1440,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:375,settings:{slidesToShow:1,slidesToScroll:1}}]});$(".menu-page-slider").slick({dots:!1,infinite:!1,speed:1300,variableWidth:!0,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:1440,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:375,settings:{slidesToShow:1,slidesToScroll:1}}]});(()=>{const s=[{openModalBtns:document.querySelectorAll("[data-price-open]"),closeModalBtns:document.querySelectorAll("[data-price-close]"),modal:document.querySelector("[data-price]")},{openModalBtns:document.querySelectorAll("[data-room-open]"),closeModalBtns:document.querySelectorAll("[data-room-close]"),modal:document.querySelector("[data-room]")},{openModalBtns:document.querySelectorAll("[data-table-open]"),closeModalBtns:document.querySelectorAll("[data-table-close]"),modal:document.querySelector("[data-table]")}];function o(t){!t.openModalBtns.length||!t.closeModalBtns.length||!t.modal||(t.openModalBtns.forEach(e=>{e.addEventListener("click",l.bind(null,t))}),t.closeModalBtns.forEach(e=>{e.addEventListener("click",l.bind(null,t))}))}function l(t){t.modal.classList.toggle("is-hidden")}s.forEach(t=>{o(t)})})();var r=document.getElementsByClassName("nav-link");for(var i=0;i<r.length;i++)r[i].href==window.location.href&&(window.location.pathname=="/"||window.location.pathname.endsWith("/index.html")?r[i].classList.add("current-index"):r[i].classList.add("current-other"));window.addEventListener("load",function(){const s=document.getElementById("price-number-nights"),o=document.getElementById("price-currency-nights"),l=10;for(let t=1;t<=l;t++){const e=document.createElement("option");e.value=t,e.textContent=t,s.appendChild(e)}s.value="1",o.value="1000",s.addEventListener("change",function(){const e=parseInt(this.value)*1e3;o.value=e})});

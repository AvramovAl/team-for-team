(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();var a=document.querySelectorAll(".open-modal-price"),r=document.querySelector(".backdrop-price"),u=document.querySelector(".close-modal-price");a.forEach(function(t){t.addEventListener("click",function(){r.classList.remove("is-hidden")})});u.addEventListener("click",function(){r.classList.add("is-hidden")});var f=document.querySelectorAll(".open-modal-room"),d=document.querySelector(".backdrop-room"),m=document.querySelector(".close-modal-room");f.forEach(function(t){t.addEventListener("click",function(){d.classList.remove("is-hidden")})});m.addEventListener("click",function(){d.classList.add("is-hidden")});var p=document.querySelectorAll(".open-modal-table"),c=document.querySelector(".backdrop-table"),S=document.querySelector(".close-modal-table");p.forEach(function(t){t.addEventListener("click",function(){c.classList.remove("is-hidden")})});S.addEventListener("click",function(){c.classList.add("is-hidden")});(()=>{const t=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),l=document.querySelector(".js-close-menu"),i=()=>{const e=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!e),t.classList.toggle("is-open");const o=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[o](document.body)};s.addEventListener("click",i),l.addEventListener("click",i),window.matchMedia("(min-width: 1440px)").addEventListener("change",e=>{e.matches&&(t.classList.remove("is-open"),s.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();$(".main-restaurant-slider").slick({dots:!1,infinite:!1,speed:1300,variablewidth:!1,slidesToShow:4,slidesToScroll:2,responsive:[{breakpoint:1440,settings:{slidesToShow:2,slidesToScroll:2,infinite:!1,dots:!1,variablewidth:!1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:375,settings:{slidesToShow:2,slidesToScroll:1}}]});$(".room-hero-slider").slick({dots:!1,infinite:!1,speed:1300,variablewidth:!0,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:1440,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:375,settings:{slidesToShow:2,slidesToScroll:1}}]});$(".responsive").slick({dots:!1,infinite:!1,speed:1300,variablewidth:!0,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]});
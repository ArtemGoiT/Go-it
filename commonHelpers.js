import{a as d}from"./assets/vendor-34f890c2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=d.create({baseURL:"https://dummyjson.com"});async function l(o){return await u.get(`/products/${o}`)}const a=({id:o,title:r,description:s,brand:n,price:e,images:t})=>`<div data-id="${o}">
      <img src="${t[0]}" alt="${r}">
      <h3>Brand:${n}</h3>
      <h4>model:${r}</h4>
      <p>description:${s}</p>
      <p>price:${e}</p>
    </div>`,i=document.querySelector("#singleProductForm"),f=document.querySelector("#singleProduct");i.addEventListener("submit",m);function m(o){o.preventDefault();const r=o.target.elements.id.value;l(r).then(({data:s})=>{const n=a(s);f.innerHTML=n,i.reset()})}
//# sourceMappingURL=commonHelpers.js.map

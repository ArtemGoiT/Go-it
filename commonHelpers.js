import{a as i}from"./assets/vendor-34f890c2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const l=i.create({baseURL:"https://dummyjson.com"});async function u(){return await l.get("/products")}const a=o=>o.map(({id:r,title:n,description:c,brand:e,price:t,images:s})=>`    <li data-id="${r}">
      <img src="${s[0]}" alt="${n}">
      <h3>Brand:${e}</h3>
      <h4>model:${n}</h4>
      <p>description:${c}</p>
      <p>price:${t}</p>
      
    </li>`).join(),d=document.querySelector("#allProducts");u().then(({data:{products:o}})=>{console.log(o);const r=a(o);d.insertAdjacentHTML("beforebegin",r)});
//# sourceMappingURL=commonHelpers.js.map

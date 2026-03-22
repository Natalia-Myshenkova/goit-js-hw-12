/* empty css                      */import{a as S,S as q,i as n}from"./assets/vendor-BLkLXWwN.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=e(t);fetch(t.href,i)}})();const B="55065937-212aaf594fb16882d72e56cb6",P="https://pixabay.com/api/";async function p(r,o){try{return(await S.get(P,{params:{key:B,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}})).data}catch(e){return console.error("Помилка запиту:",e),null}}const h=document.querySelector(".gallery"),y=document.querySelector(".load-more"),$=new q(".gallery a",{captionsData:"alt",captionDelay:250}),g=document.querySelector(".loader");function v(r){const o=r.map(e=>`<li> 
    <a class="small-image" href="${e.largeImageURL}">
      <img class="modal-image" src="${e.webformatURL}" alt="${e.tags}">
      <div class="image-info">
        <div class="info-item">
          <p class="info-title">Likes</p>
          <p class="info-number">${e.likes}</p>
        </div>
        <div class="info-item">
          <p class="info-title">Views</p>
          <p class="info-number">${e.views}</p>
        </div>
        <div class="info-item">
          <p class="info-title">Comments</p>
          <p class="info-number">${e.comments}</p>
        </div>
        <div class="info-item">
          <p class="info-title">Downloads</p>
          <p class="info-number">${e.downloads}</p>
        </div>
      </div>
    </a>
  </li>`).join("");h.insertAdjacentHTML("beforeend",o),$.refresh()}function E(){h.innerHTML=""}function b(){g.classList.add("visible")}function L(){g.classList.remove("visible")}function M(){y.classList.add("visible")}function m(){y.classList.remove("visible")}const u=document.querySelector(".form"),I=document.querySelector(".load-more");let d="",a=1,f=0,l=0;function w(){l>=f?(m(),n.info({message:"We're sorry, but you've reached the end of search results."})):M()}u.addEventListener("submit",async r=>{r.preventDefault();const e=u.querySelector('input[name="search-text"]').value.trim();if(!e){n.error({title:"Error",message:"Please enter a search term!"});return}d=e,a=1,l=0,f=0,E(),b(),m();try{const s=await p(d,a);if(!s||s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}f=s.totalHits,l=s.hits.length,v(s.hits),w(),u.reset()}catch(s){console.error(s),n.error({message:"Помилка при запиті!"})}finally{L()}});I.addEventListener("click",async()=>{a+=1,b(),m();try{const r=await p(d,a);if(!r||r.hits.length===0){n.info({message:"We're sorry, but you've reached the end of search results."});return}l+=r.hits.length,v(r.hits),w();const o=document.querySelectorAll(".gallery li");if(o.length){const e=o[o.length-r.hits.length],{height:s}=e.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}}catch(r){console.error(r),n.error({message:"Помилка при завантаженні додаткових зображень!"})}finally{L()}});
//# sourceMappingURL=index.js.map

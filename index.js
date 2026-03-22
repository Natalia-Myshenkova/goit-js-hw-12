/* empty css                      */import{a as w,S,i as n}from"./assets/vendor-BkC4bTqC.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const q="55065937-212aaf594fb16882d72e56cb6",B="https://pixabay.com/api/";async function p(r,o){try{return(await w.get(B,{params:{key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}})).data}catch(e){return console.error("Помилка запиту:",e),null}}const h=document.querySelector(".gallery"),y=document.querySelector(".load-more"),E=new S(".gallery a",{captionsData:"alt",captionDelay:250}),g=document.querySelector(".loader");function v(r){const o=r.map(e=>`<li> 
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
  </li>`).join("");h.insertAdjacentHTML("beforeend",o),E.refresh()}function P(){h.innerHTML=""}function F(){g.classList.add("visible")}function b(){g.classList.remove("visible")}function $(){y.classList.add("visible")}function m(){y.classList.remove("visible")}const u=document.querySelector(".form"),M=document.querySelector(".load-more");let d="",a=1,f=0,c=0;function L(){c>=f?(m(),n.info({message:"We're sorry, but you've reached the end of search results."})):$()}u.addEventListener("submit",async r=>{r.preventDefault();const e=u.querySelector('input[name="search-text"]').value.trim();if(!e){n.error({title:"Error",message:"Please enter a search term!"});return}d=e,a=1,c=0,f=0,P(),F(),m();try{const i=await p(d,a);if(!i||i.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF",iconColor:"#FFFFFF",color:"#FFFFFF"});return}f=i.totalHits,c=i.hits.length,v(i.hits),L(),u.reset()}catch(i){console.error(i),n.error({message:"Помилка при запиті!"})}finally{b()}});M.addEventListener("click",async()=>{a+=1,F();try{const r=await p(d,a);if(!r||r.hits.length===0){m(),n.info({message:"We're sorry, but you've reached the end of search results."});return}c+=r.hits.length,v(r.hits),L();const o=document.querySelector(".gallery li");if(o){const e=o.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}}catch(r){console.error(r),n.error({message:"Помилка при завантаженні додаткових зображень!"})}finally{b()}});
//# sourceMappingURL=index.js.map

/* empty css                      */import{a as b,S as w,i as n}from"./assets/vendor-BkC4bTqC.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const S="55065937-212aaf594fb16882d72e56cb6",q="https://pixabay.com/api/";async function m(o,s){try{return(await b.get(q,{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}})).data}catch(e){return console.error("Помилка запиту:",e),null}}const p=document.querySelector(".gallery"),y=document.querySelector(".load-more"),B=new w(".gallery a",{captionsData:"alt",captionDelay:250}),h=document.querySelector(".loader");function g(o){const s=o.map(e=>`<li> 
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
  </li>`).join("");p.insertAdjacentHTML("beforeend",s),B.refresh()}function $(){p.innerHTML=""}function v(){h.classList.add("visible")}function L(){h.classList.remove("visible")}function E(){y.classList.add("visible")}function f(){y.classList.remove("visible")}const l=document.querySelector(".form"),M=document.querySelector(".load-more");f();let u="",a=1,d=0;l.addEventListener("submit",async o=>{o.preventDefault();const e=l.querySelector('input[name="search-text"]').value.trim();if(!e){n.error({message:"Please enter a search term!"});return}u=e,a=1,$(),f(),v();try{const i=await m(u,a);if(!i||i.hits.length===0){n.error({message:"Sorry, there are no images matching your search query."});return}d=i.totalHits,g(i.hits),a*15<d&&E(),l.reset()}catch{n.error({message:"Error fetching images!"})}finally{L()}});M.addEventListener("click",async()=>{a+=1,v();try{const o=await m(u,a);g(o.hits);const e=document.querySelector(".gallery li:last-child").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"}),a*15>=d&&(f(),n.info({message:"We're sorry, but you've reached the end of search results."}))}catch{n.error({message:"Error fetching images!"})}finally{L()}});
//# sourceMappingURL=index.js.map

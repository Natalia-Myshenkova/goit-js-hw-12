// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const imageList = document.querySelector('.gallery');

const loadMoreBtn = document.querySelector('.load-more');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const loader = document.querySelector('.loader');

export function createGallery(images) {
  const markup = images.map(image => 
    `<li> 
    <a class="small-image" href="${image.largeImageURL}">
      <img class="modal-image" src="${image.webformatURL}" alt="${image.tags}">
      <div class="image-info">
        <div class="info-item">
          <p class="info-title">Likes</p>
          <p class="info-number">${image.likes}</p>
        </div>
        <div class="info-item">
          <p class="info-title">Views</p>
          <p class="info-number">${image.views}</p>
        </div>
        <div class="info-item">
          <p class="info-title">Comments</p>
          <p class="info-number">${image.comments}</p>
        </div>
        <div class="info-item">
          <p class="info-title">Downloads</p>
          <p class="info-number">${image.downloads}</p>
        </div>
      </div>
    </a>
  </li>`
  ).join('');
  imageList.insertAdjacentHTML('beforeend', markup)
  lightbox.refresh();
}

export function clearGallery() {
  imageList.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('visible');
}

export function hideLoader() {
  loader.classList.remove('visible');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.add('visible');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.remove('visible');
}

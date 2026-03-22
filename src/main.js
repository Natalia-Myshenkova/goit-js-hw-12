import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const submit = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;       
let loadedImages = 0;  

function checkEnd() {
  if (loadedImages >= totalHits) {
    hideLoadMoreButton();
    iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
  } else {
    showLoadMoreButton();
  }
}

submit.addEventListener('submit', async (e) => {
  e.preventDefault();

  const input = submit.querySelector('input[name="search-text"]');
  const query = input.value.trim();

  if (!query) {
    iziToast.error({ title: 'Error', message: 'Please enter a search term!' });
    return;
  }

  currentQuery = query;
  currentPage = 1;
  loadedImages = 0;
  totalHits = 0;

  clearGallery();
  showLoader();
  hideLoadMoreButton();
  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    if (!data || data.hits.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: "topRight",
        backgroundColor: '#EF4040',
        titleColor: '#FFFFFF',
        messageColor: '#FFFFFF',
        iconColor: '#FFFFFF',
        color: '#FFFFFF',
      });
      return;
    }

    totalHits = data.totalHits;
    loadedImages = data.hits.length;

    createGallery(data.hits);
    checkEnd();

    submit.reset(); 
  } catch (error) {
    console.error(error);
    iziToast.error({ message: 'Помилка при запиті!' });
  } finally {
    hideLoader();
  }
});


loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    if (!data || data.hits.length === 0) {
      hideLoadMoreButton();
      iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
      return;
    }

    loadedImages += data.hits.length;
    createGallery(data.hits);
    checkEnd();

    const card = document.querySelector('.gallery li');
    if (card) {
      const height = card.getBoundingClientRect().height;
      window.scrollBy({ top: height * 2, behavior: 'smooth' });
    }
  } catch (error) {
    console.error(error);
    iziToast.error({ message: 'Помилка при завантаженні додаткових зображень!' });
  } finally {
    hideLoader();
  }
});
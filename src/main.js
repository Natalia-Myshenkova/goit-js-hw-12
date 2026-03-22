import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');
hideLoadMoreButton();
let currentQuery = '';
let currentPage = 1;
let totalHits = 0;

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const input = form.querySelector('input[name="search-text"]');
  const query = input.value.trim();

  if (!query) {
    iziToast.error({ message: 'Please enter a search term!' });
    return;
  }

  currentQuery = query;
  currentPage = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    if (!data || data.hits.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query.',
      });
      return;
    }

    totalHits = data.totalHits;

    createGallery(data.hits);

    if (currentPage * 15 < totalHits) {
      showLoadMoreButton();
    }

    form.reset();

  } catch (error) {
    iziToast.error({ message: 'Error fetching images!' });
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;

  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    createGallery(data.hits);

    const card = document.querySelector('.gallery li:last-child');
    const height = card.getBoundingClientRect().height;

    window.scrollBy({
      top: height * 2,
      behavior: 'smooth',
    });
    if (currentPage * 15 >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }

  } catch (error) {
    iziToast.error({ message: 'Error fetching images!' });
  } finally {
    hideLoader();
  }
});
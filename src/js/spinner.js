import { Loading } from 'notiflix/build/notiflix-loading-aio';

export const addSpinner = function addSpinner() {
  Loading.custom('Loading your movies...', {
    // svgColor: '$color-accent',
    // backgroundColor: '$color-overlay-modal',
    svgSize: '100px',
  });
};

export const removeSpinner = function removeSpinner() {
  Loading.remove();
};
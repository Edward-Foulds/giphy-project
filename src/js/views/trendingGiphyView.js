import View from "./View.js";

class TrendingGiphyView extends View {
  _parentElement = document.querySelector(".trending-giphys");
  _pics;
  _errorMessage =
    "No trending GIPHY's found. Please check your connection and try again.";

  // Markup includes lazy images and density switching
  _generateMarkup() {
    return this._data.results
      .map((res, index) => {
        return `<picture class="trending-giphys__item trending-giphys__item--${
          index + 1
        } lazy-img">
  <source
    srcset="${res.preview.url}"
    type="image/webp"
    data-srcset="${res.fixedWidth.webp}"
  />
  <source
    srcset="${res.preview.url}"
    type="image/mp4"
    data-srcset="${res.fixedWidth.mp4}"
  />
  <img
    src="${res.preview.url}"
    alt="${res.title}"
    class="trending-giphys__img"
    data-src="${res.fixedWidth.url}"
  /> </picture
>`;
      })
      .join("");
  }
}

export default new TrendingGiphyView();

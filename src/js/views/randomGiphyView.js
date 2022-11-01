import View from "./View.js";

class RandomView extends View {
  _parentElement = document.querySelector(".random-giphy");
  _pics;
  _errorMessage =
    "No random GIPHY found. Please check your connection and try again!";

  // Lazy image markup with density switching
  _generateMarkup() {
    console.log("WORKIGN");
    return `<picture class="random-giphy__item lazy-img">
  <source
    srcset="${this._data.preview.url}"
    media="(max-width: 37.5em)"
    data-srcset="${this._data.fixedWidth.webp}"
  />
  <source
    srcset="${this._data.preview.url}"
    type="image/webp"
    data-srcset="${this._data.original.webp}"
  />
  <source
    srcset="${this._data.preview.url}"
    type="image/mp4"
    data-srcset="${this._data.original.mp4}"
  />
  <img
    src="${this._data.preview.url}"
    alt="${this._data.title}"
    class="random-giphy__img"
    data-src="${this._data.original.url}"
  /> </picture
>`;
  }

  // Manages the click of the next button to generate a new random image
  addHandlerNewRandomImage(handler) {
    this._parentElement
      .closest(".section-random")
      .addEventListener("click", function (e) {
        const btn = e.target.closest(".random-btn");
        if (!btn) return;
        handler();
      });
  }
}

export default new RandomView();

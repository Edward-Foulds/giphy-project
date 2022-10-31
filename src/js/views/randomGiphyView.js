import View from "./View.js";

class RandomView extends View {
  _parentElement = document.querySelector(".random-giphy");
  _imgs;
  _errorMessage =
    "No random GIPHY found. Please check your connection and try again!";

  _generateMarkup() {
    return `<picture class="random-giphy__item">
            <img src="${this._data.preview.url}" alt="${this._data.title}" class="random-giphy__img lazy-img" data-src="${this._data.original.webp}"/>
          </picture>`;
  }

  //  `<picture class="random-giphy__item">
  //           <source srcset="${this._data.fixedWidth.webp}" media="(max-width: 47em)" />
  //           <source srcset="${this._data.original.webp}" type="image/webp" />
  //           <source srcset="${this._data.original.mp4}" type="image/mp4" />
  //           <img src="${this._data.original.url}" alt="${this._data.title}" class="random-giphy__img" data-src="${this._data.preview.url}"/>
  //         </picture>`;

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

import View from "./View.js";

class ResultsView extends View {
  _parentElement = document.querySelector(".gallery");

  _generateMarkup() {
    return this._data.results
      .map((res, index) => {
        return `<figure class="gallery__item gallery__item--1">
            <img src="${res.highRes.webp}" alt="" class="gallery__image" />
          </figure>`;
      })
      .join("");
  }
}

export default new ResultsView();

import View from "./View.js";

class ResultsView extends View {
  _parentElement = document.querySelector(".gallery");
  _errorMessage =
    "No GIPHY's found matching your search. Please try a different search.";

  _generateMarkup() {
    return this._data.results
      .map((res, index) => {
        return `<picture class="gallery__item gallery__item--${index + 1}">
        <source srcset="${res.fixedWidth.webp}" type="image/webp" />
            <source srcset="${res.fixedWidth.mp4}" type="image/mp4" />
            <img src="${res.fixedWidth.url}" alt="${
          res.title
        }" class="gallery__image" />
          </picture>`;
      })
      .join("");
  }
}

export default new ResultsView();

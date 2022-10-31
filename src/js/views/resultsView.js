import View from "./View.js";

class ResultsView extends View {
  _parentElement = document.querySelector(".gallery-grid");
  _errorMessage =
    "No GIPHY's found matching your search. Please try a different search.";

  _generateMarkup() {
    return this._data.results
      .map((res, index) => {
        return `<picture class="gallery-grid__item gallery-grid__item--${
          index + 1
        }">
        <source srcset="${res.fixedWidth.webp}" type="image/webp" />
            <source srcset="${res.fixedWidth.mp4}" type="image/mp4" />
            <img src="${res.fixedWidth.url}" alt="${
          res.title
        }" class="gallery-grid__image" />
          </picture>`;
      })
      .join("");
  }

  // New clear function needed for results view, to ensure any message is removed which is
  // placed as a sibling element to the gallery
  _clear() {
    this._parentElement.innerHTML = "";
    if (this._parentElement.previousElementSibling)
      this._parentElement.previousElementSibling.remove();
  }
}

export default new ResultsView();

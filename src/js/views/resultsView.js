import View from "./View.js";

class ResultsView extends View {
  _parentElement = document.querySelector(".gallery-grid");
  _pics;
  _errorMessage =
    "No GIPHY's found matching your search. Please try a different search.";

  // Markup includes lazy images and density switching
  _generateMarkup() {
    return this._data.results
      .map((res, index) => {
        return `<picture class="gallery-grid__item gallery-grid__item--${
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
    class="gallery-grid__image"
    data-src="${res.fixedWidth.url}"
  /> </picture
>`;
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

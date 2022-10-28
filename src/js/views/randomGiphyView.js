import View from "./View.js";

class RandomView extends View {
  _parentElement = document.querySelector(".random-giphy");
  _errorMessage =
    "No random GIPHY found. Please check your connection and try again!";

  _generateMarkup() {
    return `
         <figure class="random-giphy__item">
           <img
             src="${this._data.highRes.webp}"
             alt=""
             class="random-giphy__img"
           />
         </figure>`;
  }

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

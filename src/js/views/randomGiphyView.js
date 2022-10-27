import View from "./View.js";

class RandomView extends View {
  _parentElement = document.querySelector(".random-giphy");

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
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".random-giphy__btn");
      if (!btn) return;

      handler();
    });
  }
}

export default new RandomView();

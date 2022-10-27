import View from "./View.js";

class TrendingGiphyView extends View {
  _parentElement = document.querySelector(".trending-giphys");

  _generateMarkup() {
    return this._data.results
      .map((res, index) => {
        return `<figure class="trending-giphys__item trending-giphys__item--1">
            <img
              src="${res.highRes.webp}"
              alt=""
              class="trending-giphys__img"
            />
          </figure>`;
      })
      .join("");
  }
}

export default new TrendingGiphyView();

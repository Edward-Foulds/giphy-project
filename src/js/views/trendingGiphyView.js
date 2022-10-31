import View from "./View.js";

class TrendingGiphyView extends View {
  _parentElement = document.querySelector(".trending-giphys");
  _imgs;
  _errorMessage =
    "No trending GIPHY's found. Please check your connection and try again.";

  _generateMarkup() {
    return this._data.results
      .map((res, index) => {
        return `<picture class="trending-giphys__item trending-giphys__item--${
          index + 1
        }">
        
            <img
              src="${res.preview.url}"
              alt="${res.title}"
              class="trending-giphys__img trending-giphys__img--${
                index + 1
              } lazy-img"
              data-src="${res.fixedWidth.webp}"
            />
          </picture>`;
      })
      .join("");
  }
}

export default new TrendingGiphyView();

// `<picture class="trending-giphys__item trending-giphys__item--1">
//         <source srcset="${res.fixedWidth.webp}" type="image/webp" />
//             <source srcset="${res.fixedWidth.mp4}" type="image/mp4" />
//             <img
//               src="${res.fixedWidth.url}"
//               alt="${res.title}"
//               class="trending-giphys__img"
//             />
//           </picture>`;

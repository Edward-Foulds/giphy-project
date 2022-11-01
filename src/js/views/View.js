import icons from "url:../../img/sprite.svg";

export default class View {
  _data;
  _imgObserver = new IntersectionObserver(this.loadImg, {
    root: null,
    threshhold: 0.25,
    rootMargin: "200px",
  });

  // Lazy image handler. Iterates over each image and observe functionality added
  addHandleLazyImage() {
    console.log("Here", this._pics);
    this._pics.forEach((pic) => this._imgObserver.observe(pic));
  }

  // Manages the change from blurred lazy image to unblurred clear image when image in viewport
  loadImg(entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const img = entry.target.querySelector("img");
      const sources = entry.target.querySelectorAll("source");

      sources.forEach((source) => {
        source.srcset = source.dataset.srcset;
        source.removeAttribute("data-srcset");
      });

      img.src = img.dataset.src;
      img.removeAttribute("data-src");

      img.addEventListener("load", function () {
        entry.target.classList.remove("lazy-img");
      });
      observer.unobserve(entry.target);
    });
  }

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();

    this._parentElement.insertAdjacentHTML("afterbegin", markup);

    // Picture elements selected ready for lazy image load
    this._pics = this._parentElement.querySelectorAll(".lazy-img");
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  // Takes a location paremeter to define where to render on the screen.
  // (This is required to ensure the resultsView renders the loading centrally and not
  // in a gallery-grid square)
  renderLoading(loc = "afterbegin") {
    const markup = `<div class="message--loading">
        <svg>
          <use href="${icons}#icon-circular-graph"></use>
        </svg>
        <p> Giphy's will be here in a jiffy... </p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML(loc, markup);
  }

  // Takes a location paremeter to define where to render on the screen.
  // (This is required to ensure the resultsView renders the error centrally and not
  // in a gallery-grid square)
  renderError(message = this._errorMessage, loc = "afterbegin") {
    const markup = `<div class="message--error">
          <svg>
            <use href="${icons}#icon-warning"></use>
          </svg>
          <p>${message}</p>
        </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML(loc, markup);
  }
}

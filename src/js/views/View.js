import icons from "url:../../img/sprite.svg";

export default class View {
  _data;
  _imgObserver = new IntersectionObserver(this.loadImg, {
    root: null,
    threshhold: 0,
    rootMargin: "800px",
  });

  addHandleLazyImage() {
    console.log(this._imgs);
    this._imgs.forEach((img) =>
      img.addEventListener("load", this.handleImageOberserver.bind(this, img))
    );

    // document.addEventListener("DOMContentLoaded", this._handleImageOberserver);
  }

  handleImageOberserver(img) {
    this._imgs.forEach((img) => this._imgObserver.observe(img));
  }

  loadImg(entries, observer) {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) return;

    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener("load", function () {
      entry.target.classList.remove("lazy-img");
    });
    observer.unobserve(entry.target);
  }

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();

    this._parentElement.insertAdjacentHTML("afterbegin", markup);
    this._imgs = this._parentElement.querySelectorAll("img");
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

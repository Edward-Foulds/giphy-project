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

  renderLoading() {
    const markup = `<div class="loading">
        <svg>
          <use href="${icons}#icon-circular-graph"></use>
        </svg>
        <p> Giphy's will be here in a jiffy... </p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `<div class="error">
          <svg>
            <use href="${icons}#icon-warning"></use>
          </svg>
          <p>${message}</p>
        </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}

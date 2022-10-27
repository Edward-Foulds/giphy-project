import icons from "url:../../img/sprite.svg";

export default class View {
  _data;

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();

    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    const x = (this._parentElement.previousSibling.innerHTML = "");
    console.log("Previous sibling:", x);
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

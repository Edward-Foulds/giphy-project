class SearchView {
  _parentElement = document.querySelector(".search-form");

  getQuery() {
    const query = this._parentElement.querySelector(
      ".search-form__input"
    ).value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentElement.querySelector(".search-form__input").value = "";
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();

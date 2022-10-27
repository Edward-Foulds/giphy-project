class SearchView {
  _parentElement = document.querySelector(".search-form");

  getQuery() {
    return this._parentElement.querySelector(".search-form__input").value;
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();

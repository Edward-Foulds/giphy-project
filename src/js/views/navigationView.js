class NavigationView {
  _parentElement = document.querySelector(".navigation");

  addHandlerNavClick() {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".navigation__btn");
      if (!btn) return;
    });
  }
}

export default new NavigationView();

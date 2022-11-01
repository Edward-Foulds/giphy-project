class NavigationView {
  _parentElement = document.querySelector(".navigation");
  _scrollBtn = document.querySelector(".totop-btn");

  constructor() {
    this._addHandlerNavClick();
    window.onscroll = this._scrollFunctionality.bind(this);
    this._scrollBtn.addEventListener("click", this._addHandlerScrollTop);
  }

  _addHandlerNavClick() {
    this._parentElement.addEventListener("click", function (e) {
      const btnId = e.target.closest(".navigation__btn").dataset.id;
      if (!btnId) return;
      const navBtns = document.querySelectorAll(".navigation__btn");
      const sections = document.querySelectorAll('[class*="section"');

      // Remove active class from all buttons, before adding it to the selected button
      navBtns.forEach((btn) => {
        btn.classList.remove("navigation__btn--active");
        if (btn.dataset.id === btnId)
          btn.classList.add("navigation__btn--active");
      });

      // Hiding all sections, before unhiding selected sections
      sections.forEach((section) => {
        section.classList.add("hidden");
        if (section.dataset.id === btnId) section.classList.remove("hidden");
      });
    });
  }

  _scrollFunctionality() {
    this._scrollBtn.style.display =
      document.documentElement.scrollTop > 30 ? "block" : "none";
  }

  _addHandlerScrollTop() {
    document.documentElement.scrollTop = 0;
  }
}

export default new NavigationView();

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
      navBtns.forEach((btn) => {
        btn.classList.remove("navigation__btn--active");
        if (btn.dataset.id === btnId)
          btn.classList.add("navigation__btn--active");
      });
      sections.forEach((section) => {
        section.classList.add("hidden");
        if (section.dataset.id === btnId) section.classList.remove("hidden");
      });
      // console.log(btn);
      console.log(navBtns);
    });
  }

  _scrollFunctionality() {
    this._scrollBtn.style.display =
      document.documentElement.scrollTop > 30 ? "block" : "none";
  }

  _addHandlerScrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

export default new NavigationView();

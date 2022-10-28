class NavigationView {
  _parentElement = document.querySelector(".navigation");

  addHandlerNavClick() {
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
}

export default new NavigationView();

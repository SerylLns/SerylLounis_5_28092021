export default class ScrollButton {
  displayButton() {
    window.addEventListener("scroll", (e) => {
      const button = document.querySelector("#main-photographers-link");
      let y = window.scrollY;

      if (y >= 130) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    });
  }
}

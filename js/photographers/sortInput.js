import GalleryFactory from "../factory/galeryFactory.js";
import { getPhotographerName } from "../utils.js";

export default class SortInput {
  displayFilter(data) {
    const button = document.querySelector(".sort-btn");
    const filter = document.querySelector(".hidden-sort");
    const closeArrow = document.querySelector(".arrow-up-close");

    if (closeArrow) {
      closeArrow.addEventListener("click", (e) => {
        filter.style.display = "none";
      });
    }
    if (button) {
      button.addEventListener("click", (e) => {
        filter.style.display = "block";
      });
      this.sortPhoto(data)
    }
  }
  // Sorting Galery
  sortPhoto(data) {
    let sortingData = [];
    let media = data.media;
    let button = document.querySelector(".sort-btn");
    let filter = document.querySelector(".hidden-sort");
    let sortBtns = document.querySelectorAll(".sort");

    sortBtns.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        filter.style.display = "none";
        button.innerHTML = `${e.target.innerText}`;
        // remove start and end space 
        switch (e.target.innerText.trim()) {
          case "Popularité":
            sortingData = media.sort((a, b) => {
              return b.likes - a.likes;
            });
            break;
          case "Date":
            sortingData = media.sort((a, b) => {
              return Number(new Date(a.date)) - Number(new Date(b.date));
            });
            break;
          case "Titre":
            sortingData = media.sort((a, b) => {
              return a.photoName.localeCompare(b.photoName);
            });
            break;
          default:
            break;
        }
        this.display(sortingData);
      })
    );
  }
  display(sortingData) {
    // DISPLAY PHOTOGRAPHERS WORKS WITH SORT
    document.getElementById("ph-works").innerHTML = "";
    new GalleryFactory().builder(sortingData);
  }
}
import GalleryFactory from "../factory/galeryFactory.js";
import Likes from "./likes.js";

export default class MediaBuilder {
  // call the GalleryFactory to create the media section with 'Like' function and the box
  photographersMedias(data) {
    let media = data.media;
    const id = window.location.search.split("id=")[1];
    let photographer = data.photographers.filter((photographer) => photographer.id == id);
    let galery = new GalleryFactory().builder(media, photographer[0].name);
    this.photoLikes(galery.totalLike, data.photographers);
    new Likes();
  }

  photoLikes(totalLike, photographers) {
    const id = window.location.search.split("id=")[1];

    photographers.forEach((element) => {
      if (id == element.id) {
        let box = document.getElementById("box");
        let boxTemplate = `
                <span id="total-likes">${totalLike}</span>
                <i class="fas fa-heart" aria-label='likes'></i>
                <span>${element.price} €/ jour</span>
                `;
        box.innerHTML = boxTemplate;
      }
    });
  }
}
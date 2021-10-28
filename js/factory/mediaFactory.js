import ImgFactory from "./imgFactory.js";
import VideoFactory from "./videoFactory.js";

export default class MediaFactory {
  // Check if item is an image or a video
  displayMedia(elem) {
    let factory = null;
    if (elem.hasOwnProperty("image")) {
      factory = new ImgFactory();
    } else if (elem.hasOwnProperty("video")) {
      factory = new VideoFactory();
    }
    return factory.createElement(elem);
  }
}
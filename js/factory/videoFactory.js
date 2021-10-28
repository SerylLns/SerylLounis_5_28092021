export default class VideoFactory {
  createElement(elem) {
    let video = document.createElement("video");
    video.setAttribute("controls", "controls");
    video.setAttribute("src", `${elem.video}`);
    video.setAttribute("role", "button");
    video.className = "photo-media";

    return video;
  }
}
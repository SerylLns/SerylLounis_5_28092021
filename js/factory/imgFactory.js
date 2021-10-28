export default class ImgFactory {
  createElement(elem) {
    let img = document.createElement("img");
    img.setAttribute("src", `${elem.image}`);
    img.setAttribute("alt", elem.alt);
    img.setAttribute("role", "button");
    img.className = "photo-media";
    return img;
  }
}
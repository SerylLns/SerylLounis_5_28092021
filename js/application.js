import ApiFishEye from "./apiFishEye.js";
import HomePageBuilder from "./home/home.js";
import MediaBuilder from "./photographers/mediabuilder.js";
import PhotographerProfil from "./photographers/photographerProfil.js";
import SortInput from "./photographers/sortInput.js";

(function appDispatch() {
  new ApiFishEye().getDataFishEye().then((data) => {
    if (window.location.pathname.includes("photographers")) { 
      new PhotographerProfil().displayPhotographerProfil(data);
      
       new SortInput().displayFilter(data);

      new MediaBuilder().photographersMedias(data);

      return

    } else {
      new HomePageBuilder().displayPhotographers(data);
    }
  })
})();

document.addEventListener("keydown", (key) => {
  if (key.code == "Enter") {
    console.log(key.target.children[0].click());
  }
 })

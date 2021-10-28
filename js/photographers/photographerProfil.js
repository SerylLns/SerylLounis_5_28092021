import Form from "./form.js";
import ModalContact from "./modalContact.js";

export default class PhotographerProfil {
  
  displayPhotographerProfil(data) {
    const photographerData = data.photographers;
    const id = window.location.search.split("id=")[1];
    let photographer = photographerData;
    // SI id n'est pas null trouver le photographe qui a l'id demandé
    if (id) {
      photographer = photographerData.filter(
        (photographer) => photographer.id == id
      );
    }
    document.querySelector("title").innerText = photographer[0].name;
    const sectionPhotoProfil = document.querySelector("#photo_profil__header");
    const templatePhotographerProfil = `
            <article aria-label="Photographer Profil" class="photo_profil">
                <div class='photo_infos'>
                    <h2>${photographer[0].name}</h2>
                    <p class="photo_city">${photographer[0].city}, ${
                      photographer[0].country
                    }</p>
                    <p class="photo_tagline">${photographer[0].tagline}</p>
                    <p >${photographer[0].tags
                      .map(
                        (tag) =>
                          `<a class="tag" href="index.html">#${tag}</a>`
                      )
                      .join(" ")}</p>
                </div>
                <button id="photo_contact" class="btn_primary" title='Contact Me'>Contactez-moi</button>
                <a href='#' title='${
                  photographer[0].alt
                }'><img src="${
                  photographer[0].portrait
                }" alt="${photographer[0].alt}"></a>
            </article>
            `;
    
    sectionPhotoProfil.innerHTML = templatePhotographerProfil;
    new ModalContact(photographer[0].name).displayModal();
    new Form().validationForm();
  }
}

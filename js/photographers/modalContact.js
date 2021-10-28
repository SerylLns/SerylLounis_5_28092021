export default class ModalContact {
  constructor(photographerName) {
    this.photographerName = photographerName;
  }
  displayModal() {
    // affiche le nom du photographe dans le <h1> du form
    const photographer = document.querySelector("#modal-photograph-name");
    photographer.innerText = this.photographerName;
    // ouvre le formulaire
    const buttonContact = document.querySelector("#photo_contact");
    buttonContact.addEventListener("click", this.modalOpen);
  }


  modalOpen() {
    const modalContact = document.querySelector(".contact-modal");
    const close = document.querySelector("#close");
    modalContact.style.display = "flex";
    // close modal on miss click
    modalContact.addEventListener("click", (e) => {
      if (e.target === modalContact) {
        modalContact.style.display = "none";
      }
    });
    // close modal on click to cross
    close.addEventListener(
      "click",
      (e) => (modalContact.style.display = "none")
    );
  }

}

export default class Form {
  constructor() {
    this.first_name = document.getElementById("first_name");
    this.last_name = document.getElementById("last_name");
    this.email = document.getElementById("email");
    this.message = document.getElementById("message");
  }
  
  validationForm() {
    // on form is submit
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.validate()) {
        form.parentElement.style.display = "none";
        console.group("Message de contact :");
        console.log("Prénom : " + this.first_name.value);
        console.log("Nom : " + this.last_name.value);
        console.log("Email : " + this.email.value);
        console.log("Message : " + this.message.value);
        console.groupEnd();
      }
    });
  }

  validate() {
    let isValid = false;
    let validFirstName = this.checkName(this.first_name);
    let validLastName = this.checkName(this.last_name);
    let validEmail = this.checkEmail(this.email);
    let validMessage = this.checkMessage(this.message);
    if (validFirstName && validLastName && validEmail && validMessage) {
      isValid = true;
    }
    return isValid;
  }

  checkName(element) {
    // check and display errors for name & first_name
    const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
    if (element.value.trim().length < 2 || !element.value.match(regex)) {
      element.parentElement.setAttribute("data-error-visible", "true");
      element.style.border = "3px solid #ce1a1a";
      return false;
    } else {
      element.parentElement.setAttribute("data-error-visible", "false");
      element.style.border = "none";
      return true;
    }
  }
  checkEmail(element) {
    // check email is valid
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (element.value.trim().match(regex)) {
      element.parentElement.setAttribute("data-error-visible", "false");
      element.style.border = "none";
      return true;
    }
    element.parentElement.setAttribute("data-error-visible", "true");
    element.style.border = "3px solid #ce1a1a";
    return false;
  }

  checkMessage(element) {
    // check message is not empty
    if (element.value.trim() === "" || element.value.trim() == null) {
      element.parentElement.setAttribute("data-error-visible", "true");
      element.style.border = "2px solid #e54858";
      return false;
    }
    element.parentElement.setAttribute("data-error-visible", "false");
    element.style.border = "solid #279e7a 0.19rem";
    return true;
  }
}

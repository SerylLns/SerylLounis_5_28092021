export default class Likes {
  constructor() {
    let likes = document.querySelectorAll(".heart-btn");

    likes.forEach((like) => {
      like.addEventListener("click", (e) => {
        let photographTotalLikes = parseInt(
          document.getElementById("total-likes").innerText
        );
        let photoLike = parseInt(
          like.parentElement.querySelector(".like-counter").innerText
        );
        // return if heart is like
        let isFill = like.classList.contains("fas");
        if (!isFill) {
          like.classList.replace("far", "fas");
          like.parentElement.querySelector(".like-counter").innerText =
            ++photoLike;
          document.getElementById("total-likes").innerText =
            ++photographTotalLikes;
        } else {
          like.classList.replace("fas", "far");
          like.parentElement.querySelector(".like-counter").innerText =
            --photoLike;
          document.getElementById("total-likes").innerText =
            --photographTotalLikes;
        }
      });
    });
    
  }
}

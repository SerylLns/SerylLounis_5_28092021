export default class filterTags{
  init() {
    // get all tags and all articles 
    let articles = document.querySelectorAll(".photographer-profil");
    let tags = document.querySelectorAll(".tag");
    tags.forEach((tag) => {
      // if tag is clicked toggle class actived
      tag.addEventListener("click", (e) => {
        let tagsSelect = [];
        tags.forEach((t) => { if (t.dataset.filter == tag.dataset.filter) tagsSelect.push(t); });
        tagsSelect.forEach((tagSelect) => {
          if (tagSelect.classList.contains("actived")) {
            tagSelect.classList.remove('actived');
          } else {
            tagSelect.classList.add("actived");
          }
        })
        this.displayArticle(articles);
      });
    })

  }

  findActiveFilter() {
    // find tag active
    let currentFilter = document.querySelectorAll('ul li.actived');
    let filterSelected = [];
    currentFilter.forEach((filter) => {
      filterSelected.push(filter.dataset.filter);
    });
    return filterSelected;
  }

  checkArticle(article) {
    // check if article contain tags
    let filters = this.findActiveFilter();
    let classes = article.classList.value.split(" ");
    let result = [];
    filters.forEach((tag) => {
      classes.forEach((className) => {
        if(className == tag) result.push(className);
      })
    })
    return filters.length == result.length;
  }

  displayArticle(articles) {
    // hide or display articles with correct tags
    articles.forEach((article) => {
      if (this.checkArticle(article)) {
        article.style.display = "flex";
      } else {
        article.style.display = "none";
      }
    });
  }

}
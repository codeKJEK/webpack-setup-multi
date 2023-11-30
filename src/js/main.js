import "../styles/main.scss";
function init() {
  const pageNames = ["index", "about", "service", "review", "contact", "faq"];
  const pageTitles = ["Home", "About", "Services", "Reviews", "Contact", "FAQ"];
  const items = pageNames.map((pageName, index) => {
    return `<li><a href="${pageName}.html">${pageTitles[index]}</a></li>`;
  });
  const list = `<ul>${items.join("")}</ul>`;
  document.getElementById("banner").innerHTML = list;
}

window.addEventListener("DOMContentLoaded", init);

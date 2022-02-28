const navLists = document.querySelectorAll(".nav-item");
const navList = document.querySelectorAll(".nav-header");
const illustrationImg = document.getElementById("illustration-img");
const laptopIllustration = document.getElementById("laptop-illustration");
const listItem = Array.from(navList);
const listItems = Array.from(navLists);
const hamburgerIcon = document.querySelector(".bars-container");
const navMobileView = document.querySelector(".nav-body");

listItem.forEach(item => {
  item.addEventListener("click", () => {
    const subList = item.parentElement.children[1];
    const chevron = item.children[1];
    if (subList.classList.contains("appear")) {
        subList.classList.remove("appear");
        chevron.classList.remove("fa-chevron-up");
        chevron.classList.add("fa-chevron-down");
    } else {
        removingAttributes();
        subList.classList.add("appear");
        chevron.classList.remove("fa-chevron-down");
        chevron.classList.add("fa-chevron-up");
    }
  });
});

hamburgerIcon.addEventListener("click", () => {
    const icon = hamburgerIcon.children[0];
    if(navMobileView.classList.contains("active")){
        navMobileView.classList.remove("active")
        icon.classList.remove("fa-x")
        icon.classList.add("fa-bars")
        
    }
    else{
        navMobileView.classList.add("active")
        icon.classList.add("fa-x")
        icon.classList.remove("fa-bars")
    }
});

const removingAttributes = () => {
  listItems.forEach(item => {
    const subList = item.children[1];
    const chevron = item.children[0].children[1];
    if(chevron.classList.contains("fa-chevron-up")){
        chevron.classList.remove("fa-chevron-up");
        chevron.classList.add("fa-chevron-down");
    }
    subList.classList.remove("appear");
  });
};

window.addEventListener("resize", () => {
  if (window.innerWidth <= 1000) {
    illustrationImg.src = "./images/illustration-editor-mobile.svg";
    laptopIllustration.src = "./images/illustration-laptop-mobile.svg";
  } else {
    illustrationImg.src = "./images/illustration-editor-desktop.svg";
    laptopIllustration.src = "./images/illustration-laptop-desktop.svg";
  }
});

if (window.innerWidth <= 1000) {
  illustrationImg.src = "./images/illustration-editor-mobile.svg";
  laptopIllustration.src = "./images/illustration-laptop-mobile.svg";
}

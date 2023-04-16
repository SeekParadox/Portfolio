var lastScroll = document.documentElement.scrollHeight;
var header = document.querySelector(".header");
const concealHeader = () => {
  let currentPosition = document.documentElement.scrollTop;

  if (lastScroll < currentPosition) {
    header.classList.add("hide-container");
  } else {
    header.classList.remove("hide-container");
  }
  lastScroll = currentPosition;
};

document.addEventListener("scroll", concealHeader);
document.getElementById("projectButton").addEventListener(
  "click",
  () => {
    lastScroll = 0;

    const projectSection = document.querySelector(".projects");
    projectSection.scrollIntoView();
  },
  false
);

import projects from "./projects.js";
const projects_JSON = JSON.parse(projects);

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

const addCards = () => {
  const swiperWrapper = document.querySelector(".swiper-wrapper");
  for (var i = 0; i < projects_JSON.length; i++) {
    const { name, description, image, link, github } = projects_JSON[i];
    const newSlide = document.createElement("div");
    newSlide.classList.add("swiper-slide");
    const card = document.createElement("div");
    const linksTo = link == null ? "Repository" : "Demo";
    card.classList.add("card");
    card.innerHTML = `
    <img 
      src="resources/images/${image}"
      alt=""
      />
    <h3 class="card-name">${name}</h3>
    <p class="card-description">${description}</p>
    <a target="_blank" class="card-link" href="${link == null? github : link}">${linksTo}
    </a>
`;
    newSlide.appendChild(card);
    swiperWrapper.appendChild(newSlide);
  }
};

addCards();

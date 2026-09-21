// listen buttons

const buttonHeader = document.querySelector(".menu-button-container");
const buttonHero = document.querySelector(".hero-button-container");
const buttonRoute = document.querySelector(".route-button-container");
const buttonPrice = document.querySelector(".price-button-container");
const targetRequest = document.querySelector("#request");
const targetExpedition = document.querySelector("#expedition");

// detect current page
const locationPath = location.pathname;
const pathArray = locationPath.split("/");
const currentPage = pathArray.at(-1);

// home page
if (currentPage === "index.html") {
  scrollButtons(buttonHeader, targetRequest);
  scrollButtons(buttonHero, targetRequest);
  scrollButtons(buttonPrice, targetRequest);
  scrollButtons(buttonRoute, targetExpedition);
}

// catalog page
else {
  redirectButtons(buttonHeader, "index", "request");
  redirectButtons(buttonHero, "catalog", "catalog");
}

function scrollButtons(button, target) {
  button.addEventListener("click", () => {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

function redirectButtons(button, page, target) {
  button.addEventListener("click", () => {
    location = `${page}.html#${target}`;
  });
}

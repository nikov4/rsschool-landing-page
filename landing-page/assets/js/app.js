// listen buttons

const buttonHeader = document.querySelector(".menu-button-container");
const buttonHero = document.querySelector(".hero-button-container");
const buttonRoute = document.querySelector(".route-button-container");
const buttonPrice = document.querySelector(".price-button-container");
const targetRequest = document.getElementById("request");
const targetExpedition = document.getElementById("expedition");

// detect current page
const locationPath = window.location.pathname;
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
  redirectButtons(buttonHeader);
  redirectButtons(buttonHero);
}

function scrollButtons(button, target) {
  button.addEventListener("click", () => {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

function redirectButtons(button, target) {
  button.addEventListener("click", () => {
    window.location.href = "index.html#request";
  });
}

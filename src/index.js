import createHomePage from "./home";
import createMenuPage from "./menu";

const contentDiv = document.querySelector("#content");
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

// add event listener to tab between pages
homeBtn.addEventListener("click", () => {
    // clear text content of page to be replaced
    contentDiv.innerHTML = "";
    contentDiv.appendChild(createHomePage());
});

menuBtn.addEventListener("click", () => {
    // clear text content of page to be replaced
    contentDiv.textContent = "";
    contentDiv.appendChild(createMenuPage());
});

// on initialization of page load home page content
contentDiv.appendChild(createHomePage());


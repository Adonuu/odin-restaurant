export default function createHomePage() {
    // create content wrapper div
    let homeDiv = document.createElement("div");
    homeDiv.id = "homeContent";
    // apply flexbox for styling content
    homeDiv.style.display = "flex";
    homeDiv.style.flexFlow = "column nowrap";
    homeDiv.style.alignItems = "center";
    // create home page header
    let header = document.createElement("h1");
    header.innerHTML = "World Famous Frog Legs";
    homeDiv.appendChild(header);
    // create image of frog legs for display
    let homeImage = document.createElement("img");
    homeImage.src = "./images/frog_legs.jpg";
    homeImage.alt = "Frog Legs";
    homeImage.width = 400;
    homeImage.height = 304;
    homeDiv.appendChild(homeImage);
    // create description of restaurant
    let description = document.createElement("p");
    description.innerHTML = "Come on down to Poggers el Pepe and have our world famous frog legs. The recipe has been passed down through our family for 5 generations. The frog legs are nice and cripsy without the heaviness of frying in oil.";
    description.style.padding = "1em";
    homeDiv.appendChild(description);

    return homeDiv;
}
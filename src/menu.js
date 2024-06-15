export default function createMenuPage() {
    // create element to append everything to and return
    let homeDiv = document.createElement("div");
    homeDiv.id = "homeContent";
    // create title for the page
    let title = document.createElement("h1");
    title.innerHTML = "Menu";
    title.style.textAlign = "center";
    homeDiv.appendChild(title);
    // create div for wrapping all menu content
    let menuDiv = document.createElement("div");
    menuDiv.id = "menu";
    // display menu in grid format
    menuDiv.style.display = "grid";
    // add menu items
    let frogLegDiv = createMenuItem("Frog Legs", "Cripsy sauteed frog legs", "./images/frog_legs.jpg");
    menuDiv.appendChild(frogLegDiv);
    let jambDiv = createMenuItem("Jambalaya", "Hearty jambalaya with cajun sausage", "./images/jambalaya.webp");
    menuDiv.appendChild(jambDiv);
    let shrimpDiv = createMenuItem("Shrimp Po Boy", "Cripsy fried shrimp on a hero with Remoulade sauce", "./images/shrimp_po_boy.jpeg");
    menuDiv.appendChild(shrimpDiv);
    homeDiv.appendChild(menuDiv);
    return homeDiv;
}

// function to create the elements required for a menu item to be displayed
function createMenuItem(name, description, imageSrc) {
    let itemDiv = document.createElement("div");
    itemDiv.style.display = "flex";
    itemDiv.style.flexFlow = "column nowrap";
    itemDiv.style.justifyContent = "center";
    itemDiv.style.alignItems = "center";
    let nameDiv = document.createElement("h3");
    nameDiv.innerHTML = name;
    itemDiv.appendChild(nameDiv);
    let imageDiv = document.createElement("img");
    imageDiv.src = imageSrc;
    imageDiv.width = 100;
    imageDiv.height = 100;
    itemDiv.appendChild(imageDiv);
    let descDiv = document.createElement("p");
    descDiv.innerHTML = description;
    itemDiv.appendChild(descDiv);
    return itemDiv;
}
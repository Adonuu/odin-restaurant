export default function createAboutPage() {
    let homeDiv = document.createElement("div");
    let title = document.createElement("h1");
    title.innerHTML = "About";
    title.style.textAlign = "center";
    homeDiv.appendChild(title);
    let descr = document.createElement("p");
    descr.innerHTML = "Family owned restaurant started in 1910. Located in the heart of New Orleans in the french quarter. Contact us at 123-456-7890 for more information/reservations."
    descr.style.padding = "1em";
    homeDiv.appendChild(descr);
    return homeDiv;
}
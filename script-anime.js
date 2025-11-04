// ambil elemen
const animecontainer = document.getElementById("animecontainer");
const sortanime = document.getElementById("sortanime");
const searchanime = document.getElementById("searchanime");
const totalanime = document.getElementById("totalanime");

// update total anime
function updatetotalanime() {
    const animeitems = animecontainer.querySelectorAll(".gallery-item");
    totalanime.textContent = animeitems.length;
}
updatetotalanime();

// sort anime
sortanime.addEventListener("change", () => {
    const items = Array.from(animecontainer.querySelectorAll(".gallery-item"));
    const value = sortanime.value;

    items.sort((a, b) => {
        const ratinga = parseFloat(a.dataset.rating);
        const ratingb = parseFloat(b.dataset.rating);
        const namea = a.querySelector("h3").textContent.toLowerCase();
        const nameb = b.querySelector("h3").textContent.toLowerCase();

        switch (value) {
            case "rating-desc": return ratingb - ratinga;
            case "rating-asc": return ratinga - ratingb;
            case "name-asc": return namea.localeCompare(nameb);
            case "name-desc": return nameb.localeCompare(namea);
            default: return 0;
        }
    });

    items.forEach(item => animecontainer.appendChild(item));
});

// search anime
searchanime.addEventListener("input", () => {
    const keyword = searchanime.value.toLowerCase();
    const items = animecontainer.querySelectorAll(".gallery-item");

    items.forEach(item => {
        const title = item.querySelector("h3").textContent.toLowerCase();
        item.style.display = title.includes(keyword) ? "" : "none";
    });
});

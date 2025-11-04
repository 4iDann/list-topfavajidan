// ambil elemen
const filmContainer = document.getElementById("filmcontainer");
const sortFilm = document.getElementById("sortfilm");
const searchFilm = document.getElementById("searchfilm");
const totalFilm = document.getElementById("totalfilm");

// update total film
function updateTotalFilm() {
    const filmItems = filmContainer.querySelectorAll(".gallery-item");
    totalFilm.textContent = filmItems.length;
}
updateTotalFilm();

// sort film
sortFilm.addEventListener("change", () => {
    const items = Array.from(filmContainer.querySelectorAll(".gallery-item"));
    const value = sortFilm.value;

    items.sort((a, b) => {
        const ratingA = parseFloat(a.dataset.rating);
        const ratingB = parseFloat(b.dataset.rating);
        const nameA = a.querySelector("h3").textContent.toLowerCase();
        const nameB = b.querySelector("h3").textContent.toLowerCase();

        switch (value) {
            case "rating-desc": return ratingB - ratingA;
            case "rating-asc": return ratingA - ratingB;
            case "name-asc": return nameA.localeCompare(nameB);
            case "name-desc": return nameB.localeCompare(nameA);
            default: return 0;
        }
    });

    items.forEach(item => filmContainer.appendChild(item));
});

// search film
searchFilm.addEventListener("input", () => {
    const keyword = searchFilm.value.toLowerCase();
    const items = filmContainer.querySelectorAll(".gallery-item");

    items.forEach(item => {
        const title = item.querySelector("h3").textContent.toLowerCase();
        item.style.display = title.includes(keyword) ? "" : "none";
    });
});

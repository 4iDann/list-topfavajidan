// ambil elemen
const musikContainer = document.getElementById("musikcontainer");
const sortMusik = document.getElementById("sortmusik");
const searchMusik = document.getElementById("searchmusik");
const totalMusik = document.getElementById("totalmusik");

// update total musik
function updateTotalMusik() {
    const musikItems = musikContainer.querySelectorAll(".gallery-item");
    totalMusik.textContent = musikItems.length;
}
updateTotalMusik();

// sort musik
sortMusik.addEventListener("change", () => {
    const items = Array.from(musikContainer.querySelectorAll(".gallery-item"));
    const value = sortMusik.value;

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

    items.forEach(item => musikContainer.appendChild(item));
});

// search musik
searchMusik.addEventListener("input", () => {
    const keyword = searchMusik.value.toLowerCase();
    const items = musikContainer.querySelectorAll(".gallery-item");

    items.forEach(item => {
        const title = item.querySelector("h3").textContent.toLowerCase();
        item.style.display = title.includes(keyword) ? "" : "none";
    });
});

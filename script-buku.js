// ambil elemen
const bukuContainer = document.getElementById("bukucontainer");
const sortBuku = document.getElementById("sortbuku");
const searchBuku = document.getElementById("searchbuku");
const totalBuku = document.getElementById("totalbuku");

// update total buku
function updateTotalBuku() {
    const bukuItems = bukuContainer.querySelectorAll(".gallery-item");
    totalBuku.textContent = bukuItems.length;
}
updateTotalBuku();

// sort buku
sortBuku.addEventListener("change", () => {
    const items = Array.from(bukuContainer.querySelectorAll(".gallery-item"));
    const value = sortBuku.value;

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

    items.forEach(item => bukuContainer.appendChild(item));
});

// search buku
searchBuku.addEventListener("input", () => {
    const keyword = searchBuku.value.toLowerCase();
    const items = bukuContainer.querySelectorAll(".gallery-item");

    items.forEach(item => {
        const title = item.querySelector("h3").textContent.toLowerCase();
        item.style.display = title.includes(keyword) ? "" : "none";
    });
});
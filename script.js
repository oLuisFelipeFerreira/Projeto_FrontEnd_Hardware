onst busca = document.querySelector("#busca");
const cards = document.querySelectorAll(".card");

busca.addEventListener("input", function () {
    const texto = busca.value.toLowerCase();

    for (let i = 0; i < cards.length; i++) {
        const nome = cards[i].querySelector("p").textContent.toLowerCase();

        if (nome.includes(texto)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
});

const itensMenu = document.querySelectorAll(".menu-item");

for (let i = 0; i < itensMenu.length; i++) {
    const item = itensMenu[i];
    const submenu = item.querySelector(".submenu");

    item.addEventListener("mouseenter", function () {
        submenu.style.display = "block";
    });

    item.addEventListener("mouseleave", function () {
        submenu.style.display = "none";
    });
}
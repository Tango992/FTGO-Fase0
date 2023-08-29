const bahasa = document.getElementById("bahasa");
const info = document.getElementById("info");

bahasa.addEventListener("change", (e) => {
    info.innerText = `Anda memilih: ${e.target.value}`;
});
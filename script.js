const input = document.getElementById("url");
const button = document.getElementById("openButton");
const viewer = document.getElementById("viewer");

function abrirPagina() {
  let url = input.value.trim();

  if (!url) {
    alert("Escribe una dirección web.");
    return;
  }

  if (!/^https?:\/\//i.test(url)) {
    url = "https://" + url;
  }

  try {
    new URL(url);
    viewer.src = url;
  } catch {
    alert("La dirección no es válida.");
  }
}

button.addEventListener("click", abrirPagina);

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    abrirPagina();
  }
});

//AddEventListener()
/* Elemento.addEventListener (event, function) */

let botao = document.getElementById("mybtn")

botao.addEventListener("click", mudaralerta)
function mudaralerta()
{
    alert("Olá mundo!")
}

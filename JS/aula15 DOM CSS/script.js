//document.getElementById(id).style.property = new style

//exemplos:

//let titulo = document.getElementById("titulo").style.backgroundColor = '#CCC'
let titulo = document.getElementById("titulo")
titulo.style.backgroundColor = "#CCC"
titulo.style.textAlign = "center"
titulo.style.borderBottom = "solid 3px black"
titulo.style.margin = "20px"

let itens = document.getElementsByClassName("item")
console.log(itens)
itens[0].innerHTML = "hello"
itens[0].style.fontWeight = "bold"
itens[0].style.backgroundColor = "yellow"
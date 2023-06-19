//Eventos 
//No Javascript, eventos são ações ou ocorrências que acontecem na página qeb que estamos implementando. Esses eventos geralmente invocam funções que irão executar as operações desejadas. Exemplo de eventos são: o usuário clica em um botão na página.

/*Exemplos de eventos: 
- Clicar no mouse;
- Quando a página é carregada;
- Quando uma imagem foi carregada;
- Quando o mouse passa sobre o elemento;
- Quando um formulário HTML é enviado;*/

let nome = document.getElementById("nome")

function mudar()
{
   nome.innerHTML = "São os alunos de Santo Amaro s2";
}

let datadehoje = document.getElementById("demo")

function data()
{
  datadehoje.innerHTML = Date()
}

function carregaraviso()
{
  alert('Você acessou a página')
}

let obj = document.getElementById("obj")
function mudardefrase()
{
   obj.innerHTML = "Obrigado!"
}

function voltarafrase()
{
  obj.innerHTML = "Passe o mouse aqui!"
}
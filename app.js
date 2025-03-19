//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = []; 

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;
    if(nome === "") {
    } else {
        listaDeAmigos.push(nome); //Adciona o nome a lista 
        console.log(listaDeAmigos);
    }
}
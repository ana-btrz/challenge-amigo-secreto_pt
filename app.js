//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = []; 

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;
    if(nome === "") {
    } else {
        listaDeAmigos.push(nome); //Adciona o nome a lista 
        console.log(listaDeAmigos);

        document.getElementById("amigo").value = "";

    }
}


function atualizarLista() {
    let listaHTML =document.getElementById("listaAmigos");

 // Limpa a lista antes de adicionar os novos itens
    listaHTML.innerHTML = ""; 

}
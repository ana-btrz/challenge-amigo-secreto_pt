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


    for (let i = 0; i < listaDeAmigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = listaDeAmigos[i]; // Define o texto do item <li>
        listaHTML.appendChild(item);
    }

}
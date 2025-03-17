// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');

function agregarAmigo(){
    let input = document.getElementById('amigo');
    let amigo = input.value.trim();

    if(amigo === ''){
        alert("Escribe un nombre")
    } else {
        amigos.push(amigo);
        input.value= "";
        console.log(amigos)
        crearLista();
    }
}
//Lista de amigos
function crearLista(){
    listaAmigos.innerHTML = "";
    for(let amigo of amigos){
        let li= document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li); 
    }
}
//Sorteo para el amigo secreto
function sortearAmigo(){
    let resultado = document.getElementById('resultado');

    if (amigos.length === 0) {
        resultado.innerHTML = "No hay amigos en la lista.";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}

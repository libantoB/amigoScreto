// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let input = document.getElementById('amigo');
    let amigo = input.value.trim();

    if(amigo === ''){
        alert("Escribe un nombre")
    } else {
        amigos.push(amigo);

        input.value= "";

        console.log(amigos)
    }
    
    
}


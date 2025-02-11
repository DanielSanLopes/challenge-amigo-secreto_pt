//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

var amigos = []

var input = document.getElementById("amigo")
var listaNaTela = document.getElementById("listaAmigos")
var result = document.getElementById("resultado")

function adicionarAmigo(){

    if(!input.value){
        alert("Insira um nome!")
        return
    }

    listaNaTela.innerHTML += "<li>"+input.value+"</li>"     

    amigos.push(input.value.toString())

}

function sortearAmigo(){
    let number = Math.random()
    number = Math.round(amigos.length * number)

    listaNaTela.remove()
    result.innerHTML += "<p>O amigo secreto sorteado é:"+amigos[number]+"</li>" 
}
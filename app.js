//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let amigosSorteados = [];

function exibeTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirListaAmigos() {
    let listaAmigos = document.getElementById(`listaAmigos`);

    listaAmigos.innerHTML = ``;

    amigos.forEach(amigo => {
        let item = document.createElement(`li`);
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    })
}

function adicionarAmigo() {
    let inputDoAmigo = document.getElementById(`amigo`);
    let nome = inputDoAmigo.value.trim();

    if (nome === "") {
        alert(`Por favor, insira um nome válido.`);
        return;
    }

    if (amigos.includes(nome)) {
        alert(`Este nome já foi adicionado.`);
        return;
    }

    amigos.push(nome);
    exibirListaAmigos();
    limparCampo();
    falarNome(nome); 
}

function falarNome(nome) {
    const msg = new SpeechSynthesisUtterance();
    msg.text = `O amigo ${nome} foi adicionado à lista.`; 
    msg.lang = "pt-BR"; 
    window.speechSynthesis.speak(msg); 
}

function exibirResultado(amigoSecretoSorteado) {
    let listaSorteado = document.getElementById(`resultado`);
    listaSorteado.innerHTML = ``;

    let li = document.createElement(`li`);
    li.textContent = `${amigoSecretoSorteado} foi o amigo secreto sorteado!.`;
    listaSorteado.appendChild(li);

   
    falarAmigoSorteado(amigoSecretoSorteado);
}

function falarAmigoSorteado(amigo) {
    const msg = new SpeechSynthesisUtterance(); 
    msg.text = `O amigo secreto sorteado foi ${amigo}.`; 
    msg.lang = "pt-BR"; 
    window.speechSynthesis.speak(msg); 
}

function limparCampo() {
    inputDoAmigo = document.querySelector(`input`);
    inputDoAmigo.value = ``;
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert(`São necessários pelo menos dois nomes de amigos para realizar o sorteio.`);
        return;
    }

    limparListaAmigos();

    
    let resultado = sorteioSemRepeticao();

    exibirResultado(resultado);
}

function sorteioSemRepeticao() {
    if (amigosSorteados.length === amigos.length) {
        amigosSorteados = [];
        alert('Todos os amigos já foram sorteados, o sorteio será reiniciado!');
    }

    let sorteado;
    do {
        sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    } while (amigosSorteados.includes(sorteado)); 
    
    amigosSorteados.push(sorteado);

    return sorteado;
}

function limparListaAmigos() {
    let listaAmigos = document.getElementById(`listaAmigos`);
    let listaSorteado = document.getElementById(`resultado`);
    
    listaAmigos.innerHTML = ``;
    listaSorteado.innerHTML = ``;
}

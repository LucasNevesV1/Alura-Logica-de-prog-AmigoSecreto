// Array para armazenar lista de amigos que serão sorteados
let listaAmigos = [];

//Função para adicionar um novo amigo na lista
function adicionar() {
    //Pega os elementos do Html para enviar para o Array
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value == '') {
        alert('Informe o nome do seu amigo!');
        return;
    }
    let lista = document.getElementById('lista-amigos');
    listaAmigos.push(amigo.value);
    //Verifica se já tem algum elemento adicionado
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
}

function sortear() {
    if (listaAmigos.length <= 3) {
        alert("Insira pelo menos 4 amigos!");
        return;
    }
    if (amigos.includes(amigo.value)) {
        alert('Nome já adicionado!');
        return;
    }
    embaralhar(listaAmigos);

    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < listaAmigos.length; i++) {
        if (i == listaAmigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + ' --> ' + listaAmigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + ' --> ' + listaAmigos[i + 1] + '<br/>';
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    listaAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}


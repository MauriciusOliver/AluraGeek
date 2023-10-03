import { conectaApi } from "../conectaApi.js";

const primeiraLista = document.querySelector("[data-lista__start]");
const segundaLista = document.querySelector("[data-lista__console]");
const terceiraLista = document.querySelector("[data-lista__diversos]");

export function constroiCard(nome, img, preco, descricao, alt, id, tipo) {
    const video = document.createElement("li");
    video.className = "lista__produtos";
    video.innerHTML =
        `
            <div class="produtos__li" data_produts>
            <img class="img__produtos" src="${img}" alt=${alt}>
            <p class="descricao__produtos">${nome}</p>
            <p class="descricao__produtos">R$ ${preco}</p>
            <a id="produto__ver" href="../../pages/produto.html?tipo=${tipo}&id=${id}" class="ver__produto">Ver Produto</a>
            </div>
    `
    return video;
}

async function listarPrimeiro() {
    try {

        const listaApi = await conectaApi.listarTodos("startWars");
        listaApi.forEach(e => primeiraLista.appendChild(constroiCard(e.nome, e.img, e.preco, e.descricao, e.alt, e.id, e.tipo)))

    } catch (error) {
        primeiraLista.innerHTML = `<h2 class="mensagem">Não foi possível carregar a lista de vídeos.</h2>`
    }
}

async function listarSegundo() {
    try {
        const listaApi = await conectaApi.listarTodos("setups");
        listaApi.forEach(e => segundaLista.appendChild(constroiCard(e.nome, e.img, e.preco, e.descricao, e.alt, e.id, e.tipo)))

    } catch (error) {
        segundaLista.innerHTML = `<h2 class="mensagem">Não foi possível carregar a lista de vídeos.</h2>`
    }
}

async function listarTerceiro() {
    try {
        const listaApi = await conectaApi.listarTodos("diversos");
        listaApi.forEach(e => terceiraLista.appendChild(constroiCard(e.nome, e.img, e.preco, e.descricao, e.alt, e.id, e.tipo)))

    } catch (error) {
        terceiraLista.innerHTML = `<h2 class="mensagem">Não foi possível carregar a lista de vídeos.</h2>`
    }
}


listarPrimeiro();
listarSegundo();
listarTerceiro();
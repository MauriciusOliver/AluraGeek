import { conectaApi } from "../conectaApi.js";

const lista = document.querySelector("[data-lista__start]");

export default function constroiCard(nome, img, preco, descricao, alt, id, tipo) {
    const video = document.createElement("li");
    video.className = "lista__produtos-all";
    video.innerHTML =
        `
            <div class="produtos__li">
            <img class="img__produtos" src="${img}" alt=${alt}>
            <p class="descricao__produtos">${nome}</p>
            <p class="descricao__produtos">R$ ${preco}</p>
            <a id="produto__ver" href="./produto.html?tipo=${tipo}id=${id}" class="ver__produto">Ver Produto</a>
            </div>
    `
    return video;
}

async function listagemDeVideos() {
    try {

        const tipoAchado = window.location.search.slice(1).split('/')[0]

        const listaAPI = await conectaApi.listarTodos(tipoAchado);
        listaAPI.forEach(e => lista.appendChild(constroiCard(e.nome, e.img, e.preco, e.descricao, e.alt, e.id, e.tipo)))
    } catch (error) {
        lista.innerHTML = `<h2 class="mensagem">Não foi possível carregar a lista de vídeos.</h2>`
    }
}

listagemDeVideos();
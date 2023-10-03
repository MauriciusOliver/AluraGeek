import { conectaApi } from "../conectaApi.js";


const produto = document.querySelector("[data-umProduto]");
const produtoRelacionados = document.querySelector("[data-Relacionados]");

export function constroiCard(nome, img, preco, descricao, alt, id, tipo) {
    const video = document.createElement("li");
    video.className = "lista__produtos";
    video.innerHTML =
        `
            <div class="produtos__li">
            <img class="img__produtos" src="${img}" alt=${alt}>
            <p class="descricao__produtos">${nome}</p>
            <p class="descricao__produtos">R$ ${preco}</p>
            <a id="produto__ver" href="./produto.html?tipo=${tipo}&id=${id}" class="ver__produto">Ver Produto</a>
            </div>
            `
    return video;

}

export function constroiPrincipal(nome, img, preco, descricao, alt, id) {
    const algo = document.createElement("div");
    algo.className = "produtoPrincipal";
    algo.innerHTML =
        `
            <div class="produto_Principal">
            <img class="img__umProduto" src="${img}" alt=${alt}>
            <div class="informacoes">
            <p class="nome__produto">${nome}</p>
            <p class="preco__produto">R$ ${preco}</p>
            <p class="desc__produto">${descricao}</p>
            </div>
            </div>
    `
    return algo;
}

async function listarUm() {
    try {

        const idAchado = window.location.search.slice(1).split('=')[2];
        const tipoAchado = window.location.search.slice(1).split('=')[1].split("&")[0]

        const pegarUm = await conectaApi.listarUmProduto(tipoAchado, idAchado)
        console.log(pegarUm)

        const listaApi = await conectaApi.listarTodos(tipoAchado);

        const restoItens = listaApi.filter(id => id.id != idAchado);

        produto.appendChild(constroiPrincipal(pegarUm.nome, pegarUm.img, pegarUm.preco, pegarUm.descricao, pegarUm.alt, pegarUm.id, pegarUm.tipo))

        restoItens.forEach(e => produtoRelacionados.appendChild(constroiCard(e.nome, e.img, e.preco, e.descricao, e.alt, e.id, e.tipo)))


    } catch (error) {
        error.innerHTML = `<h2 class="mensagem">Não foi possível carregar o produto.</h2>`
    }
}

listarUm();
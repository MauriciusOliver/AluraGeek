import { conectaApi } from "../conectaApi.js";

const primeiraLista = document.querySelector("[data-lista__start]");
const segundaLista = document.querySelector("[data-lista__console]");
const terceiraLista = document.querySelector("[data-lista__diversos]");

export function constroiCard(nome, img, preco, descricao, alt, id, tipo) {
    const video = document.createElement("li");
    video.className = "lista__produtos";
    video.innerHTML =
        `
            <section class="produtos__li" data_produts id=${id}>
            <img class="img__produtos" src="${img}" alt=${alt}>
            <div class="icons__produtos">
            <button class="button__produts" id="button__editar"><i class="fa-solid fa-pencil"></i></button>
            <button class="button__produts" id="button__excluir"><i class="fa-solid fa-trash"></i></button>
            </div>
            <p class="descricao__produtos">${nome}</p>
            <p class="descricao__produtos">R$ ${preco}</p>
            <a id="produto__ver" href="../produto.html?tipo=${tipo}&id=${id}" class="ver__produto">Ver Produto</a>
            </section>
    `
    return video;
}

async function listarPrimeiro() {
    try {
        const listaApi = await conectaApi.listarTodos("startWars");
        listaApi.forEach(e => primeiraLista.appendChild(constroiCard(e.nome, e.img, e.preco, e.descricao, e.alt, e.id, e.tipo)))

        primeiraLista.addEventListener("click", (event) => {
            const guardar = event.target.closest("section");
            console.log(guardar)
            if (event.target.classList.value == "fa-solid fa-pencil") {
                const resp = confirm("Você quer editar o produto?")
                if (resp) {
                    window.location.href = `./editarProduto.html?${"startWars"}/${guardar.id}`
                }
            }
            if (event.target.classList.value == "fa-solid fa-trash") {
                conectaApi.excluirProduto("startWars", guardar.id)
                alert("Produto excluido com sucesso");
                location.reload()
            }
        })

    } catch (error) {
        primeiraLista.innerHTML = `<h2 class="mensagem">Não foi possível carregar os produtos</h2>`
    }
}

async function listarSegundo() {
    try {
        const listaApi = await conectaApi.listarTodos("setups");
        listaApi.forEach(e => segundaLista.appendChild(constroiCard(e.nome, e.img, e.preco, e.descricao, e.alt, e.id, e.tipo)))
        segundaLista.addEventListener("click", (event) => {
            const guardar = event.target.closest("section");
            if (event.target.classList.value == "fa-solid fa-pencil") {
            } else if (event.target.classList.value == "fa-solid fa-trash") {
                conectaApi.excluirProduto("setups", guardar.id)
                alert("Produto excluido com sucesso");
            }
        })

    } catch (error) {
        segundaLista.innerHTML = `<h2 class="mensagem">Não foi possível carregar Não foi possível carregar os produtos</h2>`
    }
}

async function listarTerceiro() {
    try {
        const listaApi = await conectaApi.listarTodos("diversos");
        listaApi.forEach(e => terceiraLista.appendChild(constroiCard(e.nome, e.img, e.preco, e.descricao, e.alt, e.id, e.tipo)))
        terceiraLista.addEventListener("click", (event) => {
            const guardar = event.target.closest("section");
            if (event.target.classList.value == "fa-solid fa-pencil") {
            } else if (event.target.classList.value == "fa-solid fa-trash") {
                conectaApi.excluirProduto("diversos", guardar.id)
                alert("Produto excluido com sucesso");
            }
        })

    } catch (error) {
        terceiraLista.innerHTML = `<h2 class="mensagem">Não foi possível carregar Não foi possível carregar os produtos.</h2>`
    }
}

listarPrimeiro();
listarSegundo()
listarTerceiro()
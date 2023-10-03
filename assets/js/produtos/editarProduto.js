import { conectaApi } from "../conectaApi.js";
const form = document.querySelector("[data-formulario]");

async function pegarProduto() {

    const catAchado = window.location.search.slice(1).split('/')[0];
    const idAchado = window.location.search.slice(1).split('/')[1];
    const pegarItem = await conectaApi.listarUmProduto(catAchado, idAchado)

    document.querySelector('[data-url]').value = pegarItem.img
    document.querySelector('[data-nome]').value = pegarItem.nome
    document.querySelector('[data-preco]').value = pegarItem.preco
    document.querySelector('[data-desc]').value = pegarItem.descricao

}
pegarProduto()

async function editar() {
    const url = document.querySelector('[data-url]').value
    const nome = document.querySelector('[data-nome]').value
    const preco = document.querySelector('[data-preco]').value
    const desc = document.querySelector('[data-desc]').value
    console.log(url, nome, preco, desc)

    try {
        const itemAtualizado = await conectaApi.editarProduto(url, nome, preco, desc);
        window.location.href = `./adm.html`

    } catch (error) {
        error.innerHTML = `<h2 class="mensagem">Não foi possível atualizar o produto</h2>`
    }
}


form.addEventListener("submit", async (event) => {
    event.preventDefault();
    editar()
});

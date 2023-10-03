import { conectaApi } from "../conectaApi.js";

async function adicionarProduto(e) {
    e.preventDefault();

    const url = document.querySelector('[data-url]').value
    const categoria = document.querySelector('[data-categoria]').value
    const nome = document.querySelector('[data-nome]').value
    const preco = document.querySelector('[data-preco]').value
    const desc = document.querySelector('[data-desc]').value

    try {
        const produto = await conectaApi.addProduto(url, categoria, nome, preco, desc);
        window.location.href = "../../pages/adm.html"
    } catch (error) {
        error.innerHTML = `<h2 class="mensagem">Não foi possível salvar o produto</h2>`
    }
}

document.getElementById("myButton").addEventListener("click", adicionarProduto);
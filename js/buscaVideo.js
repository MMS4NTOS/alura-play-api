import { conectaApi } from "./conectaApi.js";
import { lista } from "./mostrarVideos.js";
import { constroiCard } from "./mostrarVideos.js";

async function buscarVideo(e) {
    e.preventDefault();
   while (lista.firstChild) {
     lista.removeChild(lista.firstChild);
   }

   const dadosPesquisa = document.querySelector("[data-pesquisa]").value;
   const busca = await conectaApi.buscaVideo(dadosPesquisa);
    if (busca.length > 0)
      busca.forEach((e) =>
        lista.appendChild(constroiCard(e.titulo, e.descricao, e.url, e.imagem))
      );
    else {
    lista.innerHTML =  ` <h2 class="mensagem__titulo">Não foi encontrado nenhum vídeo com o termo "${dadosPesquisa}"</h2>`;
   }
   

}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]")
botaoPesquisa.addEventListener("click", e => buscarVideo(e))
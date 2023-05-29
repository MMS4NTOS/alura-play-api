import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

 const url = document.querySelector("[data-url]");
 url.addEventListener(
   "focusout",
   () => (url.value =  `https://www.youtube.com/embed/${url.value.slice(- 11)}`)
 );

async function capturaInfoVideo(evento) {
  evento.preventDefault();
  const titulo = document.querySelector("[data-titulo").value;
  const imagem = document.querySelector("[data-imagem]").value;
  const descricao = Math.floor(Math.random() * 101).toString();
  try {
    await conectaApi.criaVideo(titulo, descricao, url.value, imagem)
    window.location.href = "../pages/envio-concluido.html"
  } catch(e) {
    alert(e)
  }
}

formulario.addEventListener("submit", (e) => capturaInfoVideo(e));

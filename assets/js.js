// BOTAO
const butao = document.querySelector(".entrar")
// PARTES QUE IRÃO SUMIR
const login = document.querySelector(".login__Textos")
const arte = document.querySelector(".arte")

function sumirComTudo() {

    login.classList.add("sumir")
    arte.classList.add("sumir")

    const section = document.querySelector(".login")

    const conteudo = `<article class="todaTela">
    <h1>Login feito com sucesso!</h1>
    <h2>Verifique seu e-mail.</h2>`

    section.innerHTML = conteudo
    section.classList.add("justify")
}


butao.addEventListener("click", sumirComTudo)
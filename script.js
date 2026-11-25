// Sistema de curtidas
document.querySelectorAll(".curtir").forEach(botao => {
    botao.addEventListener("click", () => {
        const contador = botao.querySelector("span");
        contador.textContent = Number(contador.textContent) + 1;
    });
});

// Alternar tema claro e escuro
const botaoTema = document.querySelector(".btn-tema");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("tema-escuro");

    if (document.body.classList.contains("tema-escuro")) {
        botaoTema.textContent = "☀️";
    } else {
        botaoTema.textContent = "🌙";
    }
});
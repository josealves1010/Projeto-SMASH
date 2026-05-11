const btnPedir = document.querySelector(".botao-direita")
const btnChegar = document.querySelector(".como-chegar")
const btnCardapio = document.querySelector(".cardapio")
const secaoCardapio = document.querySelector(".texto"); 
const secaoLocalizacao = document.querySelector(".secao-info");
// Selecionando os links do menu
const linkCardapio = document.querySelector(".navegacao a:nth-child(1)"); // Pega o 1º link (Cardápio)
const linkSobre = document.querySelector(".navegacao a:nth-child(2)");    // Pega o 2º link (Sobre)
const linkHorarios = document.querySelector(".navegacao a:nth-child(3)"); // Pega o 3º link (Horários)
const secaoSobre = document.querySelector(".historia");



// Função para ir ao cardápio
function irParaCardapio(event) {
    // Se a função foi chamada por um link, o 'event' existirá
    if (event) event.preventDefault(); 
    secaoCardapio.scrollIntoView({ behavior: "smooth" }); /* É um comando que diz: "Ei, navegador, deslize a tela até que este elemento específico esteja visível para o usuário." */
}


function irParaSobre(event) {
    event.preventDefault(); // 👈 ISSO É IMPORTANTE!
    secaoSobre.scrollIntoView({ behavior: "smooth" });
}

// Função para ir à localização
function irParaLocalizacao(event) {
    if (event) event.preventDefault();
    secaoLocalizacao.scrollIntoView({ behavior: "smooth" });
}




// Ligando os botões de Cardápio
btnPedir.addEventListener("click", irParaCardapio);
btnCardapio.addEventListener("click", irParaCardapio);

// Ligando o botão de Localização
btnChegar.addEventListener("click", irParaLocalizacao);
linkCardapio.addEventListener("click", irParaCardapio); // Usa a função que você já criou!
linkSobre.addEventListener("click", irParaSobre);
linkHorarios.addEventListener("click", irParaLocalizacao); // Horários fica na seção de info
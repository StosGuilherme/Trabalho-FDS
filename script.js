let buyButton = document.querySelector(".buy-button");
let aromatize = document.querySelector(".aromatize");

buyButton.addEventListener("click", trocaMensagem);
buyButton.addEventListener("mouseover", trocaMensagem2)
buyButton.addEventListener("mouseout", trocaMensagem3)


function trocaMensagem() {
    aromatize.innerHTML = "Perfume que encanta, ambiente que inspira!";
}

function trocaMensagem2(){
    aromatize.innerHTML = "Mais do que cheiros, memórias";
}

function trocaMensagem3(){
    aromatize.innerHTML = "Aromatize, Relaxe e Transforme Seu Lar!";
}

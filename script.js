const voltarTopo = document.querySelector (".voltarTopo");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        voltarTopo.classList.add("ativo");
    }
    else {
        voltarTopo.classList.remove("ativo");
    }
})
const mudaTitulo2 = function (target, novoTitulo) {
    document.querySelector(target).innerHTML = novoTitulo;
}

mudaTitulo2("h2", "Trocando subtítulo");

const relogio = ()=>  {
    const date = new Date();
    mudaTitulo2("h2", date.toLocaleTimeString());
}

setInterval(relogio, 1000);
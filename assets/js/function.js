const frases = [
    "Um banco para 20 milhões de pessoas",
    "C6 Bank o seu banco",
    "Cartão de Crédito sem anuidade"
  ];

const mudaFrase = (target, frase, tempo) => {
    let total = 0;

    setInterval (() => {
        document.querySelector(target).innerHTML = 
        frase[total >= frase.length - 1 ? (total = 0) : (total += 1)];

        console.log(total);

    }, tempo * 1000);
}

mudaFrase("h1", frases, 4);
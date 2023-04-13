const btn = document.getElementById("sorteio");

btn.addEventListener("click", () =>{
    let min = document.getElementById("min").value;
    let max = document.getElementById("max").value;

    let numeroSorteado;
    min = Math.ceil(min);
    max = Math.floor(max);

    numeroSorteado = Math.floor(Math.random() * (max - min + 1) + min);
    let div = document.getElementById("resultado");
    div.textContent = numeroSorteado;

    console.log(numeroSorteado);

});
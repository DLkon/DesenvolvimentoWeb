const btn = document.getElementById("btn-gender");
const btnSelect = document.getElementById("btn-select");
const btnHabilidade = document.getElementById("btn-habilidade");
const log = document.getElementById("log");
const logHabilidade = document.getElementById("log-habilidade");
const logPokemon = document.getElementById("log-pokemon");

btn.addEventListener('click',() => {
    let inputs = document.getElementsByName("gender");
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].checked){
            let output = "";
            output = `O genero é ${inputs[i].value}`;
            log.innerText = output;
        }
    }
});

btnSelect.addEventListener('click', () => {
    let selectElement = document.querySelector('#select-pokemon');
    let output = "Pokemon escolhido: ";
    output += selectElement.value;
    logPokemon.innerText = output;

});

btnHabilidade.addEventListener('click', () =>{
    let habilidades = document.querySelectorAll('input[type=checkbox]:checked');
    let output = "Habilidades escolihadas são";

    for(let i = 0; i < habilidades.length; i++){
        output = output + ", " + habilidades[i].value;
    }

    logHabilidade.innerText = output;



})



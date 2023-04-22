const dados = document.querySelectorAll('.btn');
const criar = document.getElementById('criar');
const main = document.getElementById('main');

//ficha de personagem
let raca;
let classe;
let pericias = [];
let nome;
const valoresAtributos = [];
const atributo = ["Força", "Carisma", "Destreza","Sabedoria","Inteligência", "Constituição"]



//função encontra o menor numero e remove

function removerMenor(numeros){
    let menor = numeros[0];
    let indexMenor;
    for (let i = 0; i < numeros.length; i++) {       
        if(numeros[i] < menor){
            menor = numeros[i];
            indexMenor = i;
        }              
    }
    numeros.splice(indexMenor, 1);
}

// função que soma todas os elementos do array
function somarTodos(numeros){
    let valorAtributo = 0;
    for (let i = 0; i < numeros.length; i++) {
        valorAtributo += numeros[i];
    }
    return valorAtributo;
}

//função que remove todos os elementos
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

dados.forEach( (dado, number) =>{
    dado.addEventListener('click', () => {
        let numeros = [];
        for(let i = 0; i < 4; i++){
            numeros.push(Math.floor(Math.random() * 6) + 1);
        }

        //console.log(numeros)
        removerMenor(numeros);
        //console.log(numeros);
        let valorAtributo =  somarTodos(numeros);
        let id = '' + number;

        let div = document.getElementById(id);
        let p = document.createElement('p');

        if(valorAtributo >= 9){
            p.style.color = 'green';
        } else {
            p.style.color = 'red';
        }

        p.innerText = valorAtributo;

        div.appendChild(p);

        dado.style.display = 'none';

        valoresAtributos.push(valorAtributo);

    })
})

criar.addEventListener('click', () =>{
    if (valoresAtributos.length == 6){
        raca = document.getElementById('raca').value;
        //pegando classe
        classe = document.getElementById('classe').value;
 
    
        //pegando pericias
        let habilidades = document.querySelectorAll('input[type=checkbox]:checked');
    
        for(let i = 0; i < habilidades.length; i++){
            pericias.push(habilidades[i].value);
        }

        //pegando nome
        nome = document.getElementById('nome').value;
        let historia = document.createElement('p'); 
        historia.classList.add('historia');
        historia.innerHTML = `<p> Bem-vindo à emocionante aventura de Dungeons & Dragons! Você é um corajoso aventureiro que está prestes a embarcar em uma jornada repleta de desafios e mistérios. Seu personagem é um <span class="verde"> ${raca} ${classe} </span> chamado <span class="verde">${nome} </span>, com pericias em <span class="verde"> ${pericias[0]} </span>. Você está prestes a se unir a um grupo de aventureiros para enfrentar perigosas criaturas, desvendar enigmas antigos e descobrir tesouros ocultos em um mundo cheio de magia e perigos. Prepare-se para uma jornada épica, onde suas escolhas e habilidades serão fundamentais para o sucesso de sua missão! </p>`;
        removeAllChildNodes(main);

        main.appendChild(historia);
        let divHabilidades = document.createElement('div')
        divHabilidades.classList.add("habilidades")
       
        for(let i = 0; i < valoresAtributos.length; i++){ 
            let p = document.createElement('p');     
            divHabilidades.appendChild(p);
            p.innerText = valoresAtributos[i] + " " + atributo[i];
          
        }
        main.appendChild(divHabilidades);

        

    } else {
        alert("faça a rolagem dos seus atributos")
    }

    //pegando a raça
    
})

const btn = document.querySelector('#btn');
const resul = document.getElementById("resultados");

btn.addEventListener('click', () => {
    let nota1 = parseInt(document.getElementById('nota1').value); 
    let nota2 = parseInt(document.getElementById('nota2').value); 
    let nota3 = parseInt(document.getElementById('nota3').value); 
    let nota4 = parseInt(document.getElementById('nota4').value); 

    let notaMedia = (nota1 + nota2 + nota3 + nota4) / 4;

    console.log(notaMedia);
    if(notaMedia > 6){
        let p = document.createElement('p');
        p.innerHTML =  `<span style="background-color: green; color: white;">aluno aprovado com média ${notaMedia}`;
        resul.appendChild(p);
      

    } else if(notaMedia > 2 && notaMedia < 5.9 ){
        let p = document.createElement('p');
        p.innerHTML =  `<span style="background-color: blue; color: white;">aluno de recuperação com média ${notaMedia}`;
        resul.appendChild(p);

    } else if(notaMedia <= 2) {
        let p = document.createElement('p');
        p.innerHTML =  `<span style="background-color: red; color: black;">aluno reprovado com média ${notaMedia}`;
        resul.appendChild(p);
    }

    console.log(nota1,nota2, nota3, nota4)
})
/* 
● Escreva uma função que detecta o tipo de dado passado;
● Verifque se é um: number, boolean ou string
● E retorne uma mensagem para cada tipo;
● Execute uma função para cada caso;
*/


let idade = prompt('Qual sua idade?');
let nome = prompt('Qual o seu nome?');
let soma1 = parseInt(prompt('Digite um numero'));
let soma2 = parseInt(prompt('Digite um numero'));


// funciona 
function detectaTipo(idade, nome) {
    
   
    console.log(typeof(nome));
    console.log(typeof(idade));
}

// não funciona 
function somaTipo(soma1, soma2) {

    return soma1 + soma2;
}
    console.log(somaTipo(soma1, soma2));
    const soma = somaTipo(soma1, soma2);
    console.log(typeof(soma1, soma2));



somaTipo(soma1, soma2);
detectaTipo(idade, nome);



//hello world
//Executando no terminal git bash: node index.js
console.log('Hello world!');
console.log('Olá mundo!');
console.log(2);

let mensagem = 'Olá mundo, tudo bem?'; // let = pode ser reatribuida
mensagem = 2;
const mensagem2 = 'Olá Raiane, tudo bem?'; //const não pode ser reatribuida
console.log(mensagem);
console.log(mensagem2);

const mensagem3 = 'Olá';//escopo global

{
    const mensagem3 = 'Escopo '; // escopo local
    console.log(mensagem3)
}

console.log(mensagem3);


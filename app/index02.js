//array, objetos
let metas = ['raiane', 'alo']; // array = colchetes

console.log(metas[1] + ', ' + metas[0]); //concatenação =  forma de manipular as cadeias de caracteres

let metas2 = [2, 'alo'];

console.log(metas2[1] + ' ' + metas2[0]);

let meta = {
  //Obejto que tem propriedade e valor
  value: 'Ler um livro por mês',
    checked: false, //true
  adress:2,
  //isCheked: (info) => {
  log: (info) => {
    console.log(info);
  },
};

//console.log(meta.value)
//meta.isCheked(meta.value);
meta.value = 'Codar todos os dias'
meta.log(meta.value);

//Método está dentro de um objetos, já função, está fora de um objetos
//function // arrow function
//O acesso ao método é feito através do ponto .value
const criarMeta = () => { };

function criarMeta2() {}

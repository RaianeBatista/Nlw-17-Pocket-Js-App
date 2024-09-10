let meta = {//Organização de apenas uma meta
  value: 'Ler um livro por mês',
  checked: false,
};

let metas = [//Organização de muitas metas
  meta,
  {
    value: 'caminhar 20 minutos todos os dias',
    checked: true,
  },
];

console.log(metas[1].value);
console.log(meta.value);

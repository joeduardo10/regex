const fs = require('fs');
const bancoCsv = 'database.csv';
const banco = fs.readFileSync(bancoCsv,'utf-8');

const regexNome =  /^([A-Za-zÀ-ÿ]+)(?:\s([A-Za-zÀ-ÿ]+))+/gm//  /^([A-Za-zÀ-ÿ]+)(\s[A-Za-zÀ-ÿ]+)+/gm
const matchNome = banco.match(regexNome);
console.log('todos os nomes:', matchNome);
// ///////// remover caracteres não alfa numericos
// const input = banco
// const cleaned = input.replace(/[^A-Za-z0-9]/g, " ");
// console.log(cleaned);
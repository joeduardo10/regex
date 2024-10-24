const fs = require('fs');
const bancoCsv = 'database.csv';
const banco = fs.readFileSync(bancoCsv,'utf-8');

const textoComNumeros = "Numeros:, (24) 92728-6602, (66) 92328-2711";
const paterNumeros = /\d+/g;
const resultados = textoComNumeros.match(paterNumeros);
console.log(resultados);
/////////////////////datas
const dataString = "25/09/2024, 09/25/2024, 2024-09-25";
// const paternDatas = /(\d{2}\/\d{2}\/\d{4}|\d{2}\/\d{2}\/\d{4})/g; //pega so dd/mm/aaaa
const paternDatas = /(\d{2}\/\d{2}\/\d{4}|\d{2}\/\d{2}\/\d{4}|(\d{4}-\d{2}-\d{2}))/gm //pega dd/mm/aaaa  e aaaa/mm/dd
const capturaDatas = dataString.match(paternDatas);
console.log(capturaDatas); //[ '25/09/2024', '09/25/2024' ]
//////////////capturar os tres formatos


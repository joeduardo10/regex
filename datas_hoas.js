// const novaData = new Date(Date.UTC(2024,10,24,9,43,10));
// const dataComIntl = new Intl.DateTimeFormat('pt-BR',{
//     dataStyle: 'short',
//     timeStyle: 'long',
//     timeZone: 'America/belem',
// });
// console.log(dataComIntl.format(novaData));
const novaData = new Date();
console.log(novaData);
console.log(novaData.toLocaleDateString('pt-BR'));
console.log(novaData.toLocaleDateString('ko-KR'));
const opcoes = {
    weekday : 'long',
    year : 'numeric',
    month: 'long',
    day : 'numeric',
    timezone : 'UTC'
};
console.log(novaData.toLocaleDateString('pt-BR',opcoes));
console.log(novaData.toLocaleDateString('ko-KR',opcoes));

//formatação de data
const meuAniversario = '2025-06-12';
const dataCriada = new Date(meuAniversario);
const dataFormatada = dataCriada.toLocaleDateString('pt-BR',{timeZone:'UTC',});
console.log(`Meu Aniversário é ${dataFormatada}`);

//////////////////////////
const dataAtual = new Date();
console.log(dataAtual);
const dataFormatada1 = new Intl.DateTimeFormat('pt-BR',{
    dateStyle : 'full',
    timeStyle: 'long',
    timeZone: 'America/Sao_Paulo',
});
console.log(dataFormatada1.format(dataAtual));
///////////////////////////////////////
const portugues = new Intl.Locale('pt-BR',{hourCycle:'h12'});
console.log(
    portugues.language,
    portugues.hourCycle,
    portugues.region,
    portugues.timeZones
);
//////////////////////////// moedas
const numero = 50.0;
console.log(
    new Intl.NumberFormat('pt-BR',{ style:'currency',currency: 'BRL'}).format(numero));

    console.log(
        new Intl.NumberFormat('de-DE',{ style:'currency',currency: 'EUR'}).format(numero));



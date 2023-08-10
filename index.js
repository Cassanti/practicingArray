const numbers = [50, 60, 80, 90, 120, 15, 150, 200];

const higherNumber = numbers.map(    (number) => {
    return number > 150;
})

console.log(higherNumber);

const numeros = [20, 30, 40, 50, 60, 70, 80];

function retornaMaior() {
    return numeros.map((num) => num > 70);
};

const maiorNum = retornaMaior();

console.log(maiorNum);

function mutiplicaNum() {
    return numeros.map((num) => num * num);
};

const resultadoNum = mutiplicaNum();

const somaNum = () => {
    return numeros.map((num) => num + num);
};

const somaResultado = somaNum();

console.log(resultadoNum);
console.log(somaResultado);

const numeral = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const retornaPar = () => {
    return numeral.map((num) => num % 2 === 0);
};

const par = retornaPar();

function trazPar() {
    return numeral.map((num) => num % 2 === 0);
};

const mostraPar = trazPar();

console.log(par);
console.log(mostraPar);
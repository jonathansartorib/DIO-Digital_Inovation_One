function pulaLinha() {
	document.write("<br/>");
	document.write("<br/>");
}

document.write("<h2>Map</h2>");

pulaLinha();

document.write("<h3>mapComThis</h3>");

const maca = {
	value: 2,
}

const laranja = {
	value: 3,
}


function mapComThis(arr, thisArg) {
	return arr.map(function(item){
		return item * this.value
	}, thisArg);
}


const numeros = [1, 2];

console.log("this -> maçã: ", mapComThis(numeros, numeros));
document.write("this -> maçã: ", mapComThis(numeros, maca));

pulaLinha();

console.log("this -> laranja: ", mapComThis(numeros, laranja));
document.write("this -> laranja: ", mapComThis(numeros, laranja));

pulaLinha();


document.write("<h3>mapSemThis</h3>");

function mapSemThis(arr) {
	return arr.map(function(item){
		return item * 2
	});
}

const nums = [2, 4, 6, 8, 10];

console.log("Array original =: ", nums);
document.write("Array original =: ", nums);

pulaLinha();

console.log("Sem this item * 2 =: ", mapSemThis(nums));
document.write("Sem this item * 2 =: ", mapSemThis(nums));


pulaLinha();




document.write("<h2>Filter</h2>");


function filtraPares(arr) {
	return arr.filter(callback);
}

function callback(item) {
	return item % 2 === 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log("array original =: ", meuArray);
document.write("array original =: ", meuArray);

pulaLinha();

console.log("filtraPares =: ", filtraPares(meuArray));
document.write("filtraPares =: ", filtraPares(meuArray));


pulaLinha();




document.write("<h2>Reduce</h2>");


function somaNumeros(arr){
	return arr.reduce(function(prev, current){
		return prev + current;
	});
}


const arr = [1, 2];

console.log("array original =: ", arr);
document.write("array original =: ", arr);

pulaLinha();

console.log("somaNumeros =: ", somaNumeros(arr));
document.write("somaNumeros =: ", somaNumeros(arr));

pulaLinha();


//array de objetos
const lista = [
	{
		name: 'sabao em po',
		preco: 30,
	},
	{
		name: 'cereal',
		preco: 12,
	},
	{
		name: 'toalha',
		preco: 30,
	},
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
	return lista.reduce(function(prev1, current1) {
		return prev1 - current1.preco;
	}, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));
document.write("Saldo Disponivel =: ",calculaSaldo(saldoDisponivel, lista));




























































































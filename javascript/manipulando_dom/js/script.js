function changeMode() {
	changeClasses();
	changeText();
}

function changeClasses() {
	button.classList.toggle(darkModeClass);
	h1.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
}

function changeText() {
	const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';

	if (body.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode;
		h1.innerHTML = darkMode + ' ON';
		return;
	}

	button.innerHTML = darkMode;
	h1.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);




//DOM = Document Object Model
//padrao para modificar elementos html

/*
BOM = Browser Object Model
 tudo que esta dentro do objeto window

O dom esta dentro do bom na arvore dentro do window

metodos para selecionar no html
*/

/*

document.getElementById('titulo'); retorna um unico arquivo

document.getElementsByTagName('li'); retorna Array

document.getElementsByClassName('textos'); retorna Array

document.querySelectorAll('.primeira-classe .segunda-classe'); retorna Array

document.querySelectorAll('.primeira-classe li #itens'); retorna Array

*/

/*
Eventos

mouseover, mouseout = hover do css

click, dbclicl = clique duplo

change
load

const botao = documento.getElementById("meuBotao");
botao.addEventListener("click", outraFuncao);

*/




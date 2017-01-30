//deklaracja i inicjalizacja zmiennych
var add = document.getElementById('js-addElem'),
	list = document.getElementById('Lista');
//dodanie zdarzenia do przycisku
add.addEventListener('click', function() {
	var number = document.getElementsByTagName('li');
	list.innerHTML += '<li>item ' + number.length + '</li>';
});
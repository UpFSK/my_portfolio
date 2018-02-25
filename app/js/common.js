/*
let myModule = (function() {
	let init = () => {
		_setUpListnrts()
	}

	let _setUpListnrts = () => {
		//Прослушка событий
	}

	return {
		init: init
	}

})()

myModule.init();
*/

let btnSlid = document.querySelector('.menu-btn'),
	slidMenu = document.querySelector('.slid-menu'),
	header_right = document.querySelector('.header__right');

btnSlid.addEventListener('click', () => {
	slidMenu.classList.toggle('opneSlid');
	header_right.classList.toggle('header_righ_openMenu');
});

(function(){
	'use strict';

	init();

	function init () {

		var lamp = document.querySelector('.lamp');
		lamp.addEventListener('click', onClick);
		window.addEventListener('devicelight', onLightsChange);
	}

	function onClick (e) {

		var lamp = document.querySelector('.lamp')
		var hireMe = document.querySelector('hire-me');

		if (lamp.classList.contains('on')){
			console.log('Lights off!')

			lamp.classList.remove('on');
			hireMe.$.container.classList.add('on')

		}else{
			console.log('Lights on!')
			lamp.classList.add('on');
			hireMe.$.container.classList.remove('on');
		}

	}

	function onLightsChange (event) {

		var lamp = document.querySelector('.lamp')

		if (event.value <= 10) {
			lamp.classList.remove('on');
		}
		else {
			lamp.classList.add('on');
		}
	}
})();
// Autor: Juexe

const hideLeftBarTopBar = function() {
	console.info('hideLeftBarTopBar: exec')

	try {
		// hide left bar
		layout = document.querySelector('.grid-template-app-layout');
		layout.style['grid-template'] = '"Header Header" auto "Navbar Content" 1fr "Statusbar Statusbar" 20px [row-end] / 0 1fr'
		
		// hide left border
		layout.style.left = '-1px';

		// hide top bar
		topbar = document.querySelector('header');
		topbar.style.display = 'none';

		clearInterval(intv);
		console.info('hideLeftBarTopBar', 'done');
	}
	catch(e) {
		console.warn('hideLeftBarTopBar', e);
	}
}

const intv = setInterval(hideLeftBarTopBar, 3000);
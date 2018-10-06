

function mediaFunc(width){
	if(width.matches){
		navMenu.style.display = 'none';
	 	navMenu.className = "closed";
	 	navButton.className = "nav_button_wrapper hamburger";
	}
}


let width = window.matchMedia('(min-width:600px)');
mediaFunc(width);

width.addListener(mediaFunc);
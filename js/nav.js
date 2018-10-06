

const navButton = document.getElementById('nav_button');
const navMenu = document.getElementById('nav_menu');
navButton.addEventListener('click',showNav);





function showNav(){
	if (navMenu.className === "closed"){
		navMenu.style.display = 'flex';		
		navMenu.className = "open";
		navButton.className = "nav_button_wrapper closedx";	
	 }else{
	 	navMenu.style.display = 'none';
	 	navMenu.className = "closed";
	 	navButton.className = "nav_button_wrapper hamburger";
	 }

	 
		
}




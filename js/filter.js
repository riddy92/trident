
const precious = document.querySelector('.precious_metal_text_flex');
const base = document.querySelector('.base_metal_text_flex');

var iso = new Isotope( '.grid', {
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});



var filtersElem = document.querySelector('.filter-button-group');

filtersElem.addEventListener( 'click', function(event) {
  // only work with buttons
  if ( !matchesSelector( event.target, 'button' ) ) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');
  console.log(filterValue);
  // use matching filter function
  //filterValue = filterFns[ filterValue ] || filterValue;
  if (filterValue === '.precious-metal'){
  	precious.style.display = 'flex';
  	base.style.display = 'none';
  }else if(filterValue === '.base-metal'){
  	base.style.display = 'flex';
  	precious.style.display = 'none';
  }else{
  	precious.style.display = 'none';
  	base.style.display = 'none';
  }
  iso.arrange({ filter: filterValue });

});





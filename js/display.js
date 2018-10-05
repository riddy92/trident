const gridBox = document.querySelector('.grid');
const goldProd = document.querySelector('#gold_product');
const goldClose = document.querySelector('gold_close');
const silverProd = document.querySelector('#silver_product');
const silverClose = document.querySelector('silver_close');
const platProd = document.querySelector('#plat_product');
const platClose = document.querySelector('plat_close');
const copperProd = document.querySelector('#copper_product');
const copperClose = document.querySelector('copper_close');
const nickelProd = document.querySelector('#nickel_product');
const nickelClose = document.querySelector('nickel_close');
const tinProd = document.querySelector('#tin_product');
const tinClose = document.querySelector('tin_close');
const zincProd = document.querySelector('#zinc_product');
const zincClose = document.querySelector('zinc_close');
const leadProd = document.querySelector('#lead_product');
const leadClose = document.querySelector('lead_close');
const alumProd = document.querySelector('#alum_product');
const alumClose = document.querySelector('alum_close');
const recycProd = document.querySelector('#recyc_product');
const recycClose = document.querySelector('recyc_close');
const sugarProd = document.querySelector('#sugar_product');
const sugarClose = document.querySelector('sugar_close');
const vegProd = document.querySelector('#veg_product');
const vegClose = document.querySelector('veg_close');
const grainsOilProd = document.querySelector('#grains_oil_product');
const grainsOilClose = document.querySelector('grains_oil_close');
const spicesProd = document.querySelector('#spices_product');
const spicesClose = document.querySelector('spices_close');

document.addEventListener('click',displayContent);
document.addEventListener("touchstart",displayContent);

function displayContent(e){
	if(e.target.className.includes('gold_click')){
		goldProd.style.display = 'flex';
		silverProd.style.display ='none';
		platProd.style.display = 'none';
		copperProd.style.display = 'none';
		nickelProd.style.display = 'none';
		tinProd.style.display = 'none';
		zincProd.style.display = 'none';
		leadProd.style.display = 'none';
		alumProd.style.display = 'none';
		recycProd.style.display = 'none';
		sugarProd.style.display = 'none';
		vegProd.style.display = 'none';
		grainsOilProd.style.display = 'none';
		spicesProd.style.display = 'none';
	}else if(e.target.className.includes('gold_close')){
		goldProd.style.display = 'none';
	}else if(e.target.className.includes('silver_click')){
		silverProd.style.display = 'flex';
		goldProd.style.display = 'none';
		platProd.style.display = 'none';
		copperProd.style.display = 'none';
		nickelProd.style.display = 'none';
		tinProd.style.display = 'none';
		zincProd.style.display = 'none';
		leadProd.style.display = 'none';
		alumProd.style.display = 'none';
		recycProd.style.display = 'none';
		sugarProd.style.display = 'none';
		vegProd.style.display = 'none';
		grainsOilProd.style.display = 'none';
		spicesProd.style.display = 'none';
	}else if(e.target.className.includes('silver_close')){
		silverProd.style.display = 'none';
	}else if(e.target.className.includes('plat_click')){
		platProd.style.display = 'flex';
		silverProd.style.display = 'none';
		goldProd.style.display = 'none';
		copperProd.style.display = 'none';
		nickelProd.style.display = 'none';
		tinProd.style.display = 'none';
		zincProd.style.display = 'none';
		leadProd.style.display = 'none';
		alumProd.style.display = 'none';
		recycProd.style.display = 'none';
		sugarProd.style.display = 'none';
		vegProd.style.display = 'none';
		grainsOilProd.style.display = 'none';
		spicesProd.style.display = 'none';
	}else if(e.target.className.includes('plat_close')){
		platProd.style.display = 'none';
	}else if(e.target.className.includes('copper_click')){
		copperProd.style.display = 'flex';
		platProd.style.display = 'none';
		silverProd.style.display = 'none';
		goldProd.style.display = 'none';
		nickelProd.style.display = 'none';
		tinProd.style.display = 'none';
		zincProd.style.display = 'none';
		leadProd.style.display = 'none';
		alumProd.style.display = 'none';
		recycProd.style.display = 'none';
		sugarProd.style.display = 'none';
		vegProd.style.display = 'none';
		grainsOilProd.style.display = 'none';
		spicesProd.style.display = 'none';
	}else if(e.target.className.includes('copper_close')){
		copperProd.style.display = 'none';
	}else if(e.target.className.includes('nickel_click')){
		nickelProd.style.display = 'flex';
		copperProd.style.display = 'none';
		platProd.style.display = 'none';
		silverProd.style.display = 'none';
		goldProd.style.display = 'none';
		tinProd.style.display = 'none';
		zincProd.style.display = 'none';
		leadProd.style.display = 'none';
		alumProd.style.display = 'none';
		recycProd.style.display = 'none';
		sugarProd.style.display = 'none';
		vegProd.style.display = 'none';
		grainsOilProd.style.display = 'none';
		spicesProd.style.display = 'none';
	}else if(e.target.className.includes('nickel_close')){
		nickelProd.style.display = 'none';
	}else if(e.target.className.includes('tin_click')){
		tinProd.style.display = 'flex';
		nickelProd.style.display = 'none';
		copperProd.style.display = 'none';
		platProd.style.display = 'none';
		silverProd.style.display = 'none';
		goldProd.style.display = 'none';
		zincProd.style.display = 'none';
		leadProd.style.display = 'none';
		alumProd.style.display = 'none';
		recycProd.style.display = 'none';
		sugarProd.style.display = 'none';
		vegProd.style.display = 'none';
		grainsOilProd.style.display = 'none';
		spicesProd.style.display = 'none';
	}else if(e.target.className.includes('tin_close')){
		tinProd.style.display = 'none';
	}else if(e.target.className.includes('zinc_click')){
		zincProd.style.display = 'flex';
		tinProd.style.display = 'none';
		nickelProd.style.display = 'none';
		copperProd.style.display = 'none';
		platProd.style.display = 'none';
		silverProd.style.display = 'none';
		goldProd.style.display = 'none';
		leadProd.style.display = 'none';
		alumProd.style.display = 'none';
		recycProd.style.display = 'none';
		sugarProd.style.display = 'none';
		vegProd.style.display = 'none';
		grainsOilProd.style.display = 'none';
		spicesProd.style.display = 'none';
	}else if(e.target.className.includes('zinc_close')){
		zincProd.style.display = 'none';
	}else if(e.target.className.includes('lead_click')){
		leadProd.style.display = 'flex';
		zincProd.style.display = 'none';
		tinProd.style.display = 'none';
		nickelProd.style.display = 'none';
		copperProd.style.display = 'none';
		platProd.style.display = 'none';
		silverProd.style.display = 'none';
		goldProd.style.display = 'none';
		alumProd.style.display = 'none';
		recycProd.style.display = 'none';
		sugarProd.style.display = 'none';
		vegProd.style.display = 'none';
		grainsOilProd.style.display = 'none';
		spicesProd.style.display = 'none';
	}else if(e.target.className.includes('lead_close')){
		leadProd.style.display = 'none';
	}else if(e.target.className.includes('alum_click')){
		alumProd.style.display = 'flex';
		leadProd.style.display = 'none';
		zincProd.style.display = 'none';
		tinProd.style.display = 'none';
		nickelProd.style.display = 'none';
		copperProd.style.display = 'none';
		platProd.style.display = 'none';
		silverProd.style.display = 'none';
		goldProd.style.display = 'none';
		recycProd.style.display = 'none';
		sugarProd.style.display = 'none';
		vegProd.style.display = 'none';
		grainsOilProd.style.display = 'none';
		spicesProd.style.display = 'none';
	}else if(e.target.className.includes('alum_close')){
		alumProd.style.display = 'none';
	}else if(e.target.className.includes('recyc_click')){
		recycProd.style.display = 'flex';
		alumProd.style.display = 'none';
		leadProd.style.display = 'none';
		zincProd.style.display = 'none';
		tinProd.style.display = 'none';
		nickelProd.style.display = 'none';
		copperProd.style.display = 'none';
		platProd.style.display = 'none';
		silverProd.style.display = 'none';
		goldProd.style.display = 'none';
		sugarProd.style.display = 'none';
		vegProd.style.display = 'none';
		grainsOilProd.style.display = 'none';
		spicesProd.style.display = 'none';
	}else if(e.target.className.includes('recyc_close')){
		recycProd.style.display = 'none';
	}else if(e.target.className.includes('sugar_click')){
		sugarProd.style.display = 'flex';
		recycProd.style.display = 'none';
		alumProd.style.display = 'none';
		leadProd.style.display = 'none';
		zincProd.style.display = 'none';
		tinProd.style.display = 'none';
		nickelProd.style.display = 'none';
		copperProd.style.display = 'none';
		platProd.style.display = 'none';
		silverProd.style.display = 'none';
		goldProd.style.display = 'none';
		vegProd.style.display = 'none';
		grainsOilProd.style.display = 'none';
		spicesProd.style.display = 'none';
	}else if(e.target.className.includes('sugar_close')){
		sugarProd.style.display = 'none';
	}else if(e.target.className.includes('veg_click')){
		vegProd.style.display = 'flex';
		sugarProd.style.display = 'none';
		recycProd.style.display = 'none';
		alumProd.style.display = 'none';
		leadProd.style.display = 'none';
		zincProd.style.display = 'none';
		tinProd.style.display = 'none';
		nickelProd.style.display = 'none';
		copperProd.style.display = 'none';
		platProd.style.display = 'none';
		silverProd.style.display = 'none';
		goldProd.style.display = 'none';
		grainsOilProd.style.display = 'none';
		spicesProd.style.display = 'none';
	}else if(e.target.className.includes('veg_close')){
		vegProd.style.display = 'none';
	}else if(e.target.className.includes('grains_oil_click')){
		grainsOilProd.style.display = 'flex';
		vegProd.style.display = 'none';
		sugarProd.style.display = 'none';
		recycProd.style.display = 'none';
		alumProd.style.display = 'none';
		leadProd.style.display = 'none';
		zincProd.style.display = 'none';
		tinProd.style.display = 'none';
		nickelProd.style.display = 'none';
		copperProd.style.display = 'none';
		platProd.style.display = 'none';
		silverProd.style.display = 'none';
		goldProd.style.display = 'none';
		spicesProd.style.display = 'none';
	}else if(e.target.className.includes('grains_oil_close')){
		grainsOilProd.style.display = 'none';
	}
	else if(e.target.className.includes('spices_click')){
		spicesProd.style.display = 'flex';
		grainsOilProd.style.display = 'none';
		vegProd.style.display = 'none';
		sugarProd.style.display = 'none';
		recycProd.style.display = 'none';
		alumProd.style.display = 'none';
		leadProd.style.display = 'none';
		zincProd.style.display = 'none';
		tinProd.style.display = 'none';
		nickelProd.style.display = 'none';
		copperProd.style.display = 'none';
		platProd.style.display = 'none';
		silverProd.style.display = 'none';
		goldProd.style.display = 'none';
	}else if(e.target.className.includes('spices_close')){
		spicesProd.style.display = 'none';
	}
}


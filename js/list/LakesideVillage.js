let pc = false;

if(window.innerWidth/window.innerHeight >= 2991/3740) {
	
	document.getElementById('container').innerHTML = '<div>' +	'<img src="../../png/LakesideVillage/6.png" alt="">' +
																'<img src="../../png/LakesideVillage/5.png" alt="">' +
																'<img src="../../png/LakesideVillage/1.png" alt="">' + '</div>' +
													'<div>'	+	'<img src="../../png/LakesideVillage/7.png" alt="">' + 
																'<img src="../../png/LakesideVillage/2.png" alt="">' + '</div>' +
													'<div>'	+	'<img src="../../png/LakesideVillage/4.png" alt="">' +
																'<img src="../../png/LakesideVillage/3.png" alt="">' + '</div>'; 
	pc = true;
	
}

window.onresize = function() {
	
	if((window.innerWidth/window.innerHeight >= 2991/3740) && !pc) {
		
		document.getElementById('container').innerHTML ='<div>' +	'<img src="../../png/LakesideVillage/6.png" alt="">' +
																	'<img src="../../png/LakesideVillage/5.png" alt="">' +
																	'<img src="../../png/LakesideVillage/1.png" alt="">' + '</div>' +
														'<div>'	+	'<img src="../../png/LakesideVillage/7.png" alt="">' + 
																	'<img src="../../png/LakesideVillage/2.png" alt="">' + '</div>' +
														'<div>'	+	'<img src="../../png/LakesideVillage/4.png" alt="">' +
																	'<img src="../../png/LakesideVillage/3.png" alt="">' + '</div>';
		pc = true;
		
	} else if ((window.innerWidth/window.innerHeight < 2991/3740) && pc) {
		
		document.getElementById('container').innerHTML ='<div>' +	'<img src="../../png/LakesideVillage/5.png" alt="">' + '</div>' +
														'<div>'	+	'<img src="../../png/LakesideVillage/6.png" alt="">' +
																	'<img src="../../png/LakesideVillage/1.png" alt="">' + '</div>' +
														'<div>'	+	'<img src="../../png/LakesideVillage/7.png" alt="">' +  
																	'<img src="../../png/LakesideVillage/2.png" alt="">' + '</div>' +
														'<div>'	+	'<img src="../../png/LakesideVillage/4.png" alt="">' +
																	'<img src="../../png/LakesideVillage/3.png" alt="">' + '</div>';
		pc = false;
		
	}

};
let pc = false;

if(window.innerWidth/window.innerHeight >= 935/1011) {
	
	document.getElementById('container').innerHTML ='<div>' +	'<img src="../../png/SacredHeartHospital/1.png" alt="">' +
																'<img src="../../png/SacredHeartHospital/2.png" alt="">' +
																'<img src="../../png/SacredHeartHospital/3.png" alt="">' + '</div>' +
													'<div>'	+	'<img src="../../png/SacredHeartHospital/5.png" alt="">' + 
																'<img src="../../png/SacredHeartHospital/6.png" alt="">' + 
																'<img src="../../png/SacredHeartHospital/4.png" alt="">' + '</div>';
	pc = true;
	
}

window.onresize = function() {
	
	if((window.innerWidth/window.innerHeight >= 935/1011) && !pc) {
		
		document.getElementById('container').innerHTML ='<div>' +	'<img src="../../png/SacredHeartHospital/1.png" alt="">' +
																	'<img src="../../png/SacredHeartHospital/2.png" alt="">' +
																	'<img src="../../png/SacredHeartHospital/3.png" alt="">' + '</div>' +
														'<div>'	+	'<img src="../../png/SacredHeartHospital/5.png" alt="">' + 
																	'<img src="../../png/SacredHeartHospital/6.png" alt="">' + 
																	'<img src="../../png/SacredHeartHospital/4.png" alt="">' + '</div>';
		pc = true;
	
	} else if ((window.innerWidth/window.innerHeight < 935/1011) && pc) {
		
		document.getElementById('container').innerHTML ='<div>' +	'<img src="../../png/SacredHeartHospital/1.png" alt="">' +
																	'<img src="../../png/SacredHeartHospital/2.png" alt="">' + '</div>' +
														'<div>'	+	'<img src="../../png/SacredHeartHospital/6.png" alt="">' + 
																	'<img src="../../png/SacredHeartHospital/3.png" alt="">' + '</div>' + 
														'<div>'	+	'<img src="../../png/SacredHeartHospital/5.png" alt="">' + 
																	'<img src="../../png/SacredHeartHospital/4.png" alt="">' + '</div>';
		pc = false;
	
	}

};
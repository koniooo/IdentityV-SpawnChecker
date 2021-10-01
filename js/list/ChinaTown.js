let pc = false;
	
if(window.innerWidth/window.innerHeight >= 935/1106) {
	
	document.getElementById('container').innerHTML=	'<div>' +	'<img src="../../png/ArmsFactory/3.png" alt="">' +
																'<img src="../../png/ArmsFactory/4.png" alt="">' +
																'<img src="../../png/ArmsFactory/5.png" alt="">' + '</div>' +
													'<div>'	+	'<img src="../../png/ArmsFactory/2.png" alt="">' + 
																'<img src="../../png/ArmsFactory/1.png" alt="">' + 
																'<img src="../../png/ArmsFactory/6.png" alt="">' + '</div>';
	pc = true;
	
}

window.onresize = function() {
	
	if((window.innerWidth/window.innerHeight >= 935/1106) && !pc) {
		
		document.getElementById('container').innerHTML=	'<div>' +	'<img src="../../png/ArmsFactory/3.png" alt="">' +
																	'<img src="../../png/ArmsFactory/4.png" alt="">' +
																	'<img src="../../png/ArmsFactory/5.png" alt="">' + '</div>' +
														'<div>'	+	'<img src="../../png/ArmsFactory/2.png" alt="">' + 
																	'<img src="../../png/ArmsFactory/1.png" alt="">' + 
																	'<img src="../../png/ArmsFactory/6.png" alt="">' + '</div>';
		pc = true;
		
	} else if ((window.innerWidth/window.innerHeight < 935/1106) && pc) {
		
		document.getElementById('container').innerHTML=	'<div>' +	'<img src="../../png/ArmsFactory/3.png" alt="">' +
																	'<img src="../../png/ArmsFactory/4.png" alt="">' + '</div>' +
														'<div>'	+	'<img src="../../png/ArmsFactory/5.png" alt="">' + 
																	'<img src="../../png/ArmsFactory/6.png" alt="">' + '</div>' + 
														'<div>'	+	'<img src="../../png/ArmsFactory/2.png" alt="">' + 
																	'<img src="../../png/ArmsFactory/1.png" alt="">' + '</div>';
		pc = false;
		
	}

};
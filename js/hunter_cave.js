const elms = document.querySelectorAll("svg");

elms.forEach((elm) => {

	elm.addEventListener("click", () => {
	
		let spawn = [].slice.call(elms).indexOf(elm);
		
		document.querySelectorAll("svg").forEach(function(value) {value.style.display = "none";});
		
		document.getElementById("map0").style.display = "none";
		
		document.getElementById("map02").style.display = "none";
		
		document.getElementsByTagName("img")[spawn].style.display = "inline";
		
		document.getElementsByTagName("img")[spawn+9].style.display = "inline";
		
		document.getElementsByTagName("svg")[spawn].style.display = "inline";
	
	});

});
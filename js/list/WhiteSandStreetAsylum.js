let pc = false;

if (window.innerWidth / window.innerHeight >= 586 / 729) {
  document.getElementById("container").innerHTML =
    "<div>" +
    '<img src="../../jpg/WhiteSandStreetAsylum/1.jpg" alt="">' +
    '<img src="../../jpg/WhiteSandStreetAsylum/2.jpg" alt="">' +
    "</div>" +
    "<div>" +
    '<img src="../../jpg/WhiteSandStreetAsylum/3.jpg" alt="">' +
    "</div>" +
    "<div>" +
    '<img src="../../jpg/WhiteSandStreetAsylum/4.jpg" alt="">' +
    '<img src="../../jpg/WhiteSandStreetAsylum/5.jpg" alt="">' +
    "</div>";
  pc = true;
}

window.onresize = function () {
  if (window.innerWidth / window.innerHeight >= 586 / 729 && !pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../../jpg/WhiteSandStreetAsylum/1.jpg" alt="">' +
      '<img src="../../jpg/WhiteSandStreetAsylum/2.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../jpg/WhiteSandStreetAsylum/3.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../jpg/WhiteSandStreetAsylum/4.jpg" alt="">' +
      '<img src="../../jpg/WhiteSandStreetAsylum/5.jpg" alt="">' +
      "</div>";
    pc = true;
  } else if (window.innerWidth / window.innerHeight < 586 / 729 && pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../../jpg/WhiteSandStreetAsylum/1.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../jpg/WhiteSandStreetAsylum/2.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../jpg/WhiteSandStreetAsylum/3.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../jpg/WhiteSandStreetAsylum/4.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../jpg/WhiteSandStreetAsylum/5.jpg" alt="">' +
      "</div>";
    pc = false;
  }
};

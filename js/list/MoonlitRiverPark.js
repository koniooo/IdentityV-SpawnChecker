let pc = false;

if (window.innerWidth / window.innerHeight >= 369 / 340) {
  document.getElementById("container").innerHTML =
    "<div>" +
    '<img src="../../png/MoonlitRiverPark/7.png" alt="">' +
    '<img src="../../png/MoonlitRiverPark/2.png" alt="">' +
    '<img src="../../png/MoonlitRiverPark/4.png" alt="">' +
    "</div>" +
    "<div>" +
    '<img src="../../png/MoonlitRiverPark/5.png" alt="">' +
    '<img src="../../png/MoonlitRiverPark/3.png" alt="">' +
    "</div>" +
    "<div>" +
    '<img src="../../png/MoonlitRiverPark/6.png" alt="">' +
    '<img src="../../png/MoonlitRiverPark/1.png" alt="">' +
    "</div>";
  pc = true;
}

window.onresize = function () {
  if (window.innerWidth / window.innerHeight >= 369 / 340 && !pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../../png/MoonlitRiverPark/7.png" alt="">' +
      '<img src="../../png/MoonlitRiverPark/2.png" alt="">' +
      '<img src="../../png/MoonlitRiverPark/4.png" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../png/MoonlitRiverPark/5.png" alt="">' +
      '<img src="../../png/MoonlitRiverPark/3.png" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../png/MoonlitRiverPark/6.png" alt="">' +
      '<img src="../../png/MoonlitRiverPark/1.png" alt="">' +
      "</div>";
    pc = true;
  } else if (window.innerWidth / window.innerHeight < 369 / 340 && pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../../png/MoonlitRiverPark/2.png" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../png/MoonlitRiverPark/7.png" alt="">' +
      '<img src="../../png/MoonlitRiverPark/4.png" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../png/MoonlitRiverPark/5.png" alt="">' +
      '<img src="../../png/MoonlitRiverPark/3.png" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../png/MoonlitRiverPark/6.png" alt="">' +
      '<img src="../../png/MoonlitRiverPark/1.png" alt="">' +
      "</div>";
    pc = false;
  }
};

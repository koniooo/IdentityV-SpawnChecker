let pc = false;

if (window.innerWidth / window.innerHeight >= 369 / 340) {
  document.getElementById("container").innerHTML =
    "<div>" +
    '<img src="../jpg/MoonlitRiverPark/7.jpg" alt="">' +
    '<img src="../jpg/MoonlitRiverPark/2.jpg" alt="">' +
    '<img src="../jpg/MoonlitRiverPark/4.jpg" alt="">' +
    "</div>" +
    "<div>" +
    '<img src="../jpg/MoonlitRiverPark/5.jpg" alt="">' +
    '<img src="../jpg/MoonlitRiverPark/3.jpg" alt="">' +
    "</div>" +
    "<div>" +
    '<img src="../jpg/MoonlitRiverPark/6.jpg" alt="">' +
    '<img src="../jpg/MoonlitRiverPark/1.jpg" alt="">' +
    "</div>";
  pc = true;
}

window.onresize = function () {
  if (window.innerWidth / window.innerHeight >= 369 / 340 && !pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../jpg/MoonlitRiverPark/7.jpg" alt="">' +
      '<img src="../jpg/MoonlitRiverPark/2.jpg" alt="">' +
      '<img src="../jpg/MoonlitRiverPark/4.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../jpg/MoonlitRiverPark/5.jpg" alt="">' +
      '<img src="../jpg/MoonlitRiverPark/3.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../jpg/MoonlitRiverPark/6.jpg" alt="">' +
      '<img src="../jpg/MoonlitRiverPark/1.jpg" alt="">' +
      "</div>";
    pc = true;
  } else if (window.innerWidth / window.innerHeight < 369 / 340 && pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../jpg/MoonlitRiverPark/2.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../jpg/MoonlitRiverPark/7.jpg" alt="">' +
      '<img src="../jpg/MoonlitRiverPark/4.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../jpg/MoonlitRiverPark/5.jpg" alt="">' +
      '<img src="../jpg/MoonlitRiverPark/3.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../jpg/MoonlitRiverPark/6.jpg" alt="">' +
      '<img src="../jpg/MoonlitRiverPark/1.jpg" alt="">' +
      "</div>";
    pc = false;
  }
};

let pc = false;

if (window.innerWidth / window.innerHeight >= 1090 / 937) {
  document.getElementById("container").innerHTML =
    "<div>" +
    '<img src="../jpg/ChinaTown/1.jpg" alt="">' +
    '<img src="../jpg/ChinaTown/3.jpg" alt="">' +
    '<img src="../jpg/ChinaTown/5.jpg" alt="">' +
    "</div>" +
    "<div>" +
    '<img src="../jpg/ChinaTown/2.jpg" alt="">' +
    '<img src="../jpg/ChinaTown/6.jpg" alt="">' +
    '<img src="../jpg/ChinaTown/4.jpg" alt="">' +
    "</div>";
  pc = true;
}

window.onresize = function () {
  if (window.innerWidth / window.innerHeight >= 1090 / 937 && !pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../jpg/ChinaTown/1.jpg" alt="">' +
      '<img src="../jpg/ChinaTown/3.jpg" alt="">' +
      '<img src="../jpg/ChinaTown/5.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../jpg/ChinaTown/2.jpg" alt="">' +
      '<img src="../jpg/ChinaTown/6.jpg" alt="">' +
      '<img src="../jpg/ChinaTown/4.jpg" alt="">' +
      "</div>";
    pc = true;
  } else if (window.innerWidth / window.innerHeight < 1090 / 937 && pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../jpg/ChinaTown/1.jpg" alt="">' +
      '<img src="../jpg/ChinaTown/5.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../jpg/ChinaTown/6.jpg" alt="">' +
      '<img src="../jpg/ChinaTown/3.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../jpg/ChinaTown/2.jpg" alt="">' +
      '<img src="../jpg/ChinaTown/4.jpg" alt="">' +
      "</div>";
    pc = false;
  }
};

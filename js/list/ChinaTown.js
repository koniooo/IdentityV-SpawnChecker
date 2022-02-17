let pc = false;

if (window.innerWidth / window.innerHeight >= 1090 / 937) {
  document.getElementById("container").innerHTML =
    "<div>" +
    '<img src="../../png/ChinaTown/1.png" alt="">' +
    '<img src="../../png/ChinaTown/3.png" alt="">' +
    '<img src="../../png/ChinaTown/5.png" alt="">' +
    "</div>" +
    "<div>" +
    '<img src="../../png/ChinaTown/2.png" alt="">' +
    '<img src="../../png/ChinaTown/6.png" alt="">' +
    '<img src="../../png/ChinaTown/4.png" alt="">' +
    "</div>";
  pc = true;
}

window.onresize = function () {
  if (window.innerWidth / window.innerHeight >= 1090 / 937 && !pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../../png/ChinaTown/1.png" alt="">' +
      '<img src="../../png/ChinaTown/3.png" alt="">' +
      '<img src="../../png/ChinaTown/5.png" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../png/ChinaTown/2.png" alt="">' +
      '<img src="../../png/ChinaTown/6.png" alt="">' +
      '<img src="../../png/ChinaTown/4.png" alt="">' +
      "</div>";
    pc = true;
  } else if (window.innerWidth / window.innerHeight < 1090 / 937 && pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../../png/ChinaTown/1.png" alt="">' +
      '<img src="../../png/ChinaTown/5.png" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../png/ChinaTown/6.png" alt="">' +
      '<img src="../../png/ChinaTown/3.png" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../png/ChinaTown/2.png" alt="">' +
      '<img src="../../png/ChinaTown/4.png" alt="">' +
      "</div>";
    pc = false;
  }
};

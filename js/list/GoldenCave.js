let pc = false;

if (window.innerWidth / window.innerHeight >= 691 / 935) {
  document.getElementById("container").innerHTML =
    "<div>" +
    '<img src="../../png/GoldenCave/5.png" alt="">' +
    '<img src="../../png/GoldenCave/13.png" alt="">' +
    '<img src="../../png/GoldenCave/6.png" alt="">' +
    '<img src="../../png/GoldenCave/14.png" alt="">' +
    "</div>" +
    "<div>" +
    '<img src="../../png/GoldenCave/2.png" alt="">' +
    '<img src="../../png/GoldenCave/10.png" alt="">' +
    '<img src="../../png/GoldenCave/1.png" alt="">' +
    '<img src="../../png/GoldenCave/9.png" alt="">' +
    "</div>" +
    "<div>" +
    '<img src="../../png/GoldenCave/4.png" alt="">' +
    '<img src="../../png/GoldenCave/12.png" alt="">' +
    '<img src="../../png/GoldenCave/3.png" alt="">' +
    '<img src="../../png/GoldenCave/11.png" alt="">' +
    "</div>" +
    "<div>" +
    '<img src="../../png/GoldenCave/8.png" alt="">' +
    '<img src="../../png/GoldenCave/16.png" alt="">' +
    '<img src="../../png/GoldenCave/7.png" alt="">' +
    '<img src="../../png/GoldenCave/15.png" alt="">' +
    "</div>";
  pc = true;
}

window.onresize = function () {
  if (window.innerWidth / window.innerHeight >= 691 / 935 && !pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../../png/GoldenCave/5.png" alt="">' +
      '<img src="../../png/GoldenCave/13.png" alt="">' +
      '<img src="../../png/GoldenCave/6.png" alt="">' +
      '<img src="../../png/GoldenCave/14.png" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../png/GoldenCave/2.png" alt="">' +
      '<img src="../../png/GoldenCave/10.png" alt="">' +
      '<img src="../../png/GoldenCave/1.png" alt="">' +
      '<img src="../../png/GoldenCave/9.png" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../png/GoldenCave/4.png" alt="">' +
      '<img src="../../png/GoldenCave/12.png" alt="">' +
      '<img src="../../png/GoldenCave/3.png" alt="">' +
      '<img src="../../png/GoldenCave/11.png" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../png/GoldenCave/8.png" alt="">' +
      '<img src="../../png/GoldenCave/16.png" alt="">' +
      '<img src="../../png/GoldenCave/7.png" alt="">' +
      '<img src="../../png/GoldenCave/15.png" alt="">' +
      "</div>";
    pc = true;
  } else if (window.innerWidth / window.innerHeight < 691 / 935 && pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../../png/GoldenCave/2.png" alt="">' +
      '<img src="../../png/GoldenCave/10.png" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../png/GoldenCave/5.png" alt="">' +
      '<img src="../../png/GoldenCave/13.png" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../png/GoldenCave/4.png" alt="">' +
      '<img src="../../png/GoldenCave/12.png" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../png/GoldenCave/6.png" alt="">' +
      '<img src="../../png/GoldenCave/14.png" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../png/GoldenCave/1.png" alt="">' +
      '<img src="../../png/GoldenCave/9.png" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../png/GoldenCave/3.png" alt="">' +
      '<img src="../../png/GoldenCave/11.png" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../png/GoldenCave/8.png" alt="">' +
      '<img src="../../png/GoldenCave/16.png" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../png/GoldenCave/7.png" alt="">' +
      '<img src="../../png/GoldenCave/15.png" alt="">' +
      "</div>";
    pc = false;
  }
};

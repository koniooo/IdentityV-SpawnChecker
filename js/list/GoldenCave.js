let pc = false;

if (window.innerWidth / window.innerHeight >= 691 / 935) {
  document.getElementById("container").innerHTML =
    "<div>" +
    '<img src="../jpg/GoldenCave/5.jpg" alt="">' +
    '<img src="../jpg/GoldenCave/13.jpg" alt="">' +
    '<img src="../jpg/GoldenCave/6.jpg" alt="">' +
    '<img src="../jpg/GoldenCave/14.jpg" alt="">' +
    "</div>" +
    "<div>" +
    '<img src="../jpg/GoldenCave/2.jpg" alt="">' +
    '<img src="../jpg/GoldenCave/10.jpg" alt="">' +
    '<img src="../jpg/GoldenCave/1.jpg" alt="">' +
    '<img src="../jpg/GoldenCave/9.jpg" alt="">' +
    "</div>" +
    "<div>" +
    '<img src="../jpg/GoldenCave/4.jpg" alt="">' +
    '<img src="../jpg/GoldenCave/12.jpg" alt="">' +
    '<img src="../jpg/GoldenCave/3.jpg" alt="">' +
    '<img src="../jpg/GoldenCave/11.jpg" alt="">' +
    "</div>" +
    "<div>" +
    '<img src="../jpg/GoldenCave/8.jpg" alt="">' +
    '<img src="../jpg/GoldenCave/16.jpg" alt="">' +
    '<img src="../jpg/GoldenCave/7.jpg" alt="">' +
    '<img src="../jpg/GoldenCave/15.jpg" alt="">' +
    "</div>";
  pc = true;
}

window.onresize = function () {
  if (window.innerWidth / window.innerHeight >= 691 / 935 && !pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../jpg/GoldenCave/5.jpg" alt="">' +
      '<img src="../jpg/GoldenCave/13.jpg" alt="">' +
      '<img src="../jpg/GoldenCave/6.jpg" alt="">' +
      '<img src="../jpg/GoldenCave/14.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../jpg/GoldenCave/2.jpg" alt="">' +
      '<img src="../jpg/GoldenCave/10.jpg" alt="">' +
      '<img src="../jpg/GoldenCave/1.jpg" alt="">' +
      '<img src="../jpg/GoldenCave/9.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../jpg/GoldenCave/4.jpg" alt="">' +
      '<img src="../jpg/GoldenCave/12.jpg" alt="">' +
      '<img src="../jpg/GoldenCave/3.jpg" alt="">' +
      '<img src="../jpg/GoldenCave/11.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../jpg/GoldenCave/8.jpg" alt="">' +
      '<img src="../jpg/GoldenCave/16.jpg" alt="">' +
      '<img src="../jpg/GoldenCave/7.jpg" alt="">' +
      '<img src="../jpg/GoldenCave/15.jpg" alt="">' +
      "</div>";
    pc = true;
  } else if (window.innerWidth / window.innerHeight < 691 / 935 && pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../jpg/GoldenCave/2.jpg" alt="">' +
      '<img src="../jpg/GoldenCave/10.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../jpg/GoldenCave/5.jpg" alt="">' +
      '<img src="../jpg/GoldenCave/13.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../jpg/GoldenCave/4.jpg" alt="">' +
      '<img src="../jpg/GoldenCave/12.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../jpg/GoldenCave/6.jpg" alt="">' +
      '<img src="../jpg/GoldenCave/14.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../jpg/GoldenCave/1.jpg" alt="">' +
      '<img src="../jpg/GoldenCave/9.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../jpg/GoldenCave/3.jpg" alt="">' +
      '<img src="../jpg/GoldenCave/11.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../jpg/GoldenCave/8.jpg" alt="">' +
      '<img src="../jpg/GoldenCave/16.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../jpg/GoldenCave/7.jpg" alt="">' +
      '<img src="../jpg/GoldenCave/15.jpg" alt="">' +
      "</div>";
    pc = false;
  }
};

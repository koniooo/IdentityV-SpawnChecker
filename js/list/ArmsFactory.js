let pc = false;

if (window.innerWidth / window.innerHeight >= 935 / 1106) {
  document.getElementById("container").innerHTML =
    "<div>" +
    '<img src="../../jpg/ArmsFactory/3.jpg" alt="">' +
    '<img src="../../jpg/ArmsFactory/4.jpg" alt="">' +
    '<img src="../../jpg/ArmsFactory/5.jpg" alt="">' +
    "</div>" +
    "<div>" +
    '<img src="../../jpg/ArmsFactory/2.jpg" alt="">' +
    '<img src="../../jpg/ArmsFactory/1.jpg" alt="">' +
    '<img src="../../jpg/ArmsFactory/6.jpg" alt="">' +
    "</div>";
  pc = true;
}

window.onresize = function () {
  if (window.innerWidth / window.innerHeight >= 935 / 1106 && !pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../../jpg/ArmsFactory/3.jpg" alt="">' +
      '<img src="../../jpg/ArmsFactory/4.jpg" alt="">' +
      '<img src="../../jpg/ArmsFactory/5.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../jpg/ArmsFactory/2.jpg" alt="">' +
      '<img src="../../jpg/ArmsFactory/1.jpg" alt="">' +
      '<img src="../../jpg/ArmsFactory/6.jpg" alt="">' +
      "</div>";
    pc = true;
  } else if (window.innerWidth / window.innerHeight < 935 / 1106 && pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../../jpg/ArmsFactory/3.jpg" alt="">' +
      '<img src="../../jpg/ArmsFactory/4.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../jpg/ArmsFactory/5.jpg" alt="">' +
      '<img src="../../jpg/ArmsFactory/6.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../jpg/ArmsFactory/2.jpg" alt="">' +
      '<img src="../../jpg/ArmsFactory/1.jpg" alt="">' +
      "</div>";
    pc = false;
  }
};

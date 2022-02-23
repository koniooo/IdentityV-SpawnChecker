let pc = false;

if (window.innerWidth / window.innerHeight >= 935 / 1011) {
  document.getElementById("container").innerHTML =
    "<div>" +
    '<img src="../jpg/SacredHeartHospital/1.jpg" alt="">' +
    '<img src="../jpg/SacredHeartHospital/2.jpg" alt="">' +
    '<img src="../jpg/SacredHeartHospital/3.jpg" alt="">' +
    "</div>" +
    "<div>" +
    '<img src="../jpg/SacredHeartHospital/5.jpg" alt="">' +
    '<img src="../jpg/SacredHeartHospital/6.jpg" alt="">' +
    '<img src="../jpg/SacredHeartHospital/4.jpg" alt="">' +
    "</div>";
  pc = true;
}

window.onresize = function () {
  if (window.innerWidth / window.innerHeight >= 935 / 1011 && !pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../jpg/SacredHeartHospital/1.jpg" alt="">' +
      '<img src="../jpg/SacredHeartHospital/2.jpg" alt="">' +
      '<img src="../jpg/SacredHeartHospital/3.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../jpg/SacredHeartHospital/5.jpg" alt="">' +
      '<img src="../jpg/SacredHeartHospital/6.jpg" alt="">' +
      '<img src="../jpg/SacredHeartHospital/4.jpg" alt="">' +
      "</div>";
    pc = true;
  } else if (window.innerWidth / window.innerHeight < 935 / 1011 && pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../jpg/SacredHeartHospital/1.jpg" alt="">' +
      '<img src="../jpg/SacredHeartHospital/2.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../jpg/SacredHeartHospital/6.jpg" alt="">' +
      '<img src="../jpg/SacredHeartHospital/3.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../jpg/SacredHeartHospital/5.jpg" alt="">' +
      '<img src="../jpg/SacredHeartHospital/4.jpg" alt="">' +
      "</div>";
    pc = false;
  }
};

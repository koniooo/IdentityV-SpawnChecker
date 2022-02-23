let pc = false;

if (window.innerWidth / window.innerHeight >= 2991 / 3740) {
  document.getElementById("container").innerHTML =
    "<div>" +
    '<img src="../jpg/LakesideVillage/6.jpg" alt="">' +
    '<img src="../jpg/LakesideVillage/5.jpg" alt="">' +
    '<img src="../jpg/LakesideVillage/1.jpg" alt="">' +
    "</div>" +
    "<div>" +
    '<img src="../jpg/LakesideVillage/7.jpg" alt="">' +
    '<img src="../jpg/LakesideVillage/2.jpg" alt="">' +
    "</div>" +
    "<div>" +
    '<img src="../jpg/LakesideVillage/4.jpg" alt="">' +
    '<img src="../jpg/LakesideVillage/3.jpg" alt="">' +
    "</div>";
  pc = true;
}

window.onresize = function () {
  if (window.innerWidth / window.innerHeight >= 2991 / 3740 && !pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../jpg/LakesideVillage/6.jpg" alt="">' +
      '<img src="../jpg/LakesideVillage/5.jpg" alt="">' +
      '<img src="../jpg/LakesideVillage/1.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../jpg/LakesideVillage/7.jpg" alt="">' +
      '<img src="../jpg/LakesideVillage/2.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../jpg/LakesideVillage/4.jpg" alt="">' +
      '<img src="../jpg/LakesideVillage/3.jpg" alt="">' +
      "</div>";
    pc = true;
  } else if (window.innerWidth / window.innerHeight < 2991 / 3740 && pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../jpg/LakesideVillage/5.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../jpg/LakesideVillage/6.jpg" alt="">' +
      '<img src="../jpg/LakesideVillage/1.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../jpg/LakesideVillage/7.jpg" alt="">' +
      '<img src="../jpg/LakesideVillage/2.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../jpg/LakesideVillage/4.jpg" alt="">' +
      '<img src="../jpg/LakesideVillage/3.jpg" alt="">' +
      "</div>";
    pc = false;
  }
};

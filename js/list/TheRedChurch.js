let pc = false;

if (window.innerWidth / window.innerHeight >= 1) {
  document.getElementById("container").innerHTML =
    "<div>" +
    '<img src="../../png/TheRedChurch/5.png" alt="">' +
    '<img src="../../png/TheRedChurch/7.png" alt="">' +
    '<img src="../../png/TheRedChurch/3.png" alt="">' +
    "</div>" +
    "<div>" +
    '<img src="../../png/TheRedChurch/6.png" alt="">' +
    '<img src="../../png/TheRedChurch/2.png" alt="">' +
    '<img src="../../png/TheRedChurch/1.png" alt="">' +
    "</div>";
  pc = true;
}

window.onresize = function () {
  if (window.innerWidth / window.innerHeight >= 1 && !pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../../png/TheRedChurch/5.png" alt="">' +
      '<img src="../../png/TheRedChurch/7.png" alt="">' +
      '<img src="../../png/TheRedChurch/3.png" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../png/TheRedChurch/6.png" alt="">' +
      '<img src="../../png/TheRedChurch/2.png" alt="">' +
      '<img src="../../png/TheRedChurch/1.png" alt="">' +
      "</div>";
    pc = true;
  } else if (window.innerWidth / window.innerHeight < 1 && pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../../png/TheRedChurch/7.png" alt="">' +
      '<img src="../../png/TheRedChurch/3.png" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../png/TheRedChurch/5.png" alt="">' +
      '<img src="../../png/TheRedChurch/2.png" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../png/TheRedChurch/6.png" alt="">' +
      '<img src="../../png/TheRedChurch/1.png" alt="">' +
      "</div>";
    pc = false;
  }
};

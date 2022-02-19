let pc = false;

if (window.innerWidth / window.innerHeight >= 1) {
  document.getElementById("container").innerHTML =
    "<div>" +
    '<img src="../../jpg/TheRedChurch/5.jpg" alt="">' +
    '<img src="../../jpg/TheRedChurch/7.jpg" alt="">' +
    '<img src="../../jpg/TheRedChurch/3.jpg" alt="">' +
    "</div>" +
    "<div>" +
    '<img src="../../jpg/TheRedChurch/6.jpg" alt="">' +
    '<img src="../../jpg/TheRedChurch/2.jpg" alt="">' +
    '<img src="../../jpg/TheRedChurch/1.jpg" alt="">' +
    "</div>";
  pc = true;
}

window.onresize = function () {
  if (window.innerWidth / window.innerHeight >= 1 && !pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../../jpg/TheRedChurch/5.jpg" alt="">' +
      '<img src="../../jpg/TheRedChurch/7.jpg" alt="">' +
      '<img src="../../jpg/TheRedChurch/3.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../jpg/TheRedChurch/6.jpg" alt="">' +
      '<img src="../../jpg/TheRedChurch/2.jpg" alt="">' +
      '<img src="../../jpg/TheRedChurch/1.jpg" alt="">' +
      "</div>";
    pc = true;
  } else if (window.innerWidth / window.innerHeight < 1 && pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../../jpg/TheRedChurch/7.jpg" alt="">' +
      '<img src="../../jpg/TheRedChurch/3.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../jpg/TheRedChurch/5.jpg" alt="">' +
      '<img src="../../jpg/TheRedChurch/2.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../jpg/TheRedChurch/6.jpg" alt="">' +
      '<img src="../../jpg/TheRedChurch/1.jpg" alt="">' +
      "</div>";
    pc = false;
  }
};

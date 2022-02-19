let pc = false;

if (window.innerWidth / window.innerHeight >= 13 / 20) {
  document.getElementById("container").innerHTML =
    "<div>" +
    '<img src="../../jpg/EversleepingTown/2.jpg" alt="">' +
    '<img src="../../jpg/EversleepingTown/3.jpg" alt="">' +
    '<img src="../../jpg/EversleepingTown/4.jpg" alt="">' +
    "</div>" +
    "<div>" +
    '<img src="../../jpg/EversleepingTown/1.jpg" alt="">' +
    '<img src="../../jpg/EversleepingTown/5.jpg" alt="">' +
    "</div>" +
    "<div>" +
    '<img src="../../jpg/EversleepingTown/7.jpg" alt="">' +
    '<img src="../../jpg/EversleepingTown/6.jpg" alt="">' +
    "</div>";
  pc = true;
}

window.onresize = function () {
  if (window.innerWidth / window.innerHeight >= 13 / 20 && !pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../../jpg/EversleepingTown/2.jpg" alt="">' +
      '<img src="../../jpg/EversleepingTown/3.jpg" alt="">' +
      '<img src="../../jpg/EversleepingTown/4.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../jpg/EversleepingTown/1.jpg" alt="">' +
      '<img src="../../jpg/EversleepingTown/5.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../jpg/EversleepingTown/7.jpg" alt="">' +
      '<img src="../../jpg/EversleepingTown/6.jpg" alt="">' +
      "</div>";
    pc = true;
  } else if (window.innerWidth / window.innerHeight < 13 / 20 && pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../../jpg/EversleepingTown/3.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../jpg/EversleepingTown/2.jpg" alt="">' +
      '<img src="../../jpg/EversleepingTown/4.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../jpg/EversleepingTown/1.jpg" alt="">' +
      '<img src="../../jpg/EversleepingTown/5.jpg" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../jpg/EversleepingTown/7.jpg" alt="">' +
      '<img src="../../jpg/EversleepingTown/6.jpg" alt="">' +
      "</div>";
    pc = false;
  }
};

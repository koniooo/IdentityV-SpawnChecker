let pc = false;

if (window.innerWidth / window.innerHeight >= 13 / 20) {
  document.getElementById("container").innerHTML =
    "<div>" +
    '<img src="../../png/EversleepingTown/2.png" alt="">' +
    '<img src="../../png/EversleepingTown/3.png" alt="">' +
    '<img src="../../png/EversleepingTown/4.png" alt="">' +
    "</div>" +
    "<div>" +
    '<img src="../../png/EversleepingTown/1.png" alt="">' +
    '<img src="../../png/EversleepingTown/5.png" alt="">' +
    "</div>" +
    "<div>" +
    '<img src="../../png/EversleepingTown/7.png" alt="">' +
    '<img src="../../png/EversleepingTown/6.png" alt="">' +
    "</div>";
  pc = true;
}

window.onresize = function () {
  if (window.innerWidth / window.innerHeight >= 13 / 20 && !pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../../png/EversleepingTown/2.png" alt="">' +
      '<img src="../../png/EversleepingTown/3.png" alt="">' +
      '<img src="../../png/EversleepingTown/4.png" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../png/EversleepingTown/1.png" alt="">' +
      '<img src="../../png/EversleepingTown/5.png" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../png/EversleepingTown/7.png" alt="">' +
      '<img src="../../png/EversleepingTown/6.png" alt="">' +
      "</div>";
    pc = true;
  } else if (window.innerWidth / window.innerHeight < 13 / 20 && pc) {
    document.getElementById("container").innerHTML =
      "<div>" +
      '<img src="../../png/EversleepingTown/3.png" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../png/EversleepingTown/2.png" alt="">' +
      '<img src="../../png/EversleepingTown/4.png" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../png/EversleepingTown/1.png" alt="">' +
      '<img src="../../png/EversleepingTown/5.png" alt="">' +
      "</div>" +
      "<div>" +
      '<img src="../../png/EversleepingTown/7.png" alt="">' +
      '<img src="../../png/EversleepingTown/6.png" alt="">' +
      "</div>";
    pc = false;
  }
};

const elms = document.querySelectorAll(".srv");

elms.forEach((elm) => {
  elm.addEventListener("click", () => {
    let spawn = [].slice.call(elms).indexOf(elm);

    document.querySelectorAll("svg").forEach(function (value) {
      value.style.display = "none";

      value.style.filter = "drop-shadow(0 0)";

      value.style.cursor = "default";
    });

    document.getElementById("mapS").style.display = "none";

    document.getElementsByClassName("srv")[spawn].style.display = "inline";

    switch (spawn + 1) {
      case 1:
        document.getElementById("map0").style.display = "inline";
        document.getElementById("hnt4").style.display = "inline";
        document.getElementById("hnt5").style.display = "inline";
        document.getElementById("hnt6").style.display = "inline";
        document.getElementById("hnt7").style.display = "inline";
        break;

      case 2:
        document.getElementById("map5").style.display = "inline";
        document.getElementById("hnt5").style.display = "inline";
        break;

      case 3:
        document.getElementById("map2").style.display = "inline";
        document.getElementById("hnt2").style.display = "inline";
        break;

      case 4:
        document.getElementById("map3").style.display = "inline";
        document.getElementById("hnt3").style.display = "inline";
        break;

      case 5:
        document.getElementById("map5").style.display = "inline";
        document.getElementById("hnt5").style.display = "inline";
        break;

      case 6:
        document.getElementById("map4").style.display = "inline";
        document.getElementById("hnt4").style.display = "inline";
        break;

      case 7:
        document.getElementById("map0").style.display = "inline";
        document.getElementById("hnt1").style.display = "inline";
        document.getElementById("hnt2").style.display = "inline";
        document.getElementById("hnt6").style.display = "inline";
        document.getElementById("hnt7").style.display = "inline";
        break;

      case 8:
        document.getElementById("map3").style.display = "inline";
        document.getElementById("hnt3").style.display = "inline";
        break;

      case 9:
        document.getElementById("map3").style.display = "inline";
        document.getElementById("hnt3").style.display = "inline";
        break;

      case 10:
        document.getElementById("map0").style.display = "inline";
        document.getElementById("hnt1").style.display = "inline";
        document.getElementById("hnt6").style.display = "inline";
        break;

      case 11:
        document.getElementById("map7").style.display = "inline";
        document.getElementById("hnt7").style.display = "inline";
        break;

      case 12:
        document.getElementById("map0").style.display = "inline";
        document.getElementById("hnt2").style.display = "inline";
        document.getElementById("hnt4").style.display = "inline";
        document.getElementById("hnt6").style.display = "inline";
        document.getElementById("min2").style.display = "inline";
        document.getElementById("min4").style.display = "inline";
        document.getElementById("min6").style.display = "inline";
        break;

      case 13:
        document.getElementById("map5").style.display = "inline";
        document.getElementById("hnt5").style.display = "inline";
        break;

      case 14:
        document.getElementById("map4").style.display = "inline";
        document.getElementById("hnt4").style.display = "inline";
        break;

      case 15:
        document.getElementById("map0").style.display = "inline";
        document.getElementById("hnt1").style.display = "inline";
        document.getElementById("hnt7").style.display = "inline";
        break;

      case 16:
        document.getElementById("map0").style.display = "inline";
        document.getElementById("hnt1").style.display = "inline";
        document.getElementById("hnt3").style.display = "inline";
        break;

      case 17:
        document.getElementById("map2").style.display = "inline";
        document.getElementById("hnt2").style.display = "inline";
        break;
    }
  });
});

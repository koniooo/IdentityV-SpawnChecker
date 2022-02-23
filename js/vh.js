const setFillHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

setFillHeight();

window.addEventListener("resize", setFillHeight);

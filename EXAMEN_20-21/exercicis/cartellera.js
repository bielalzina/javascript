window.onload = function () {
  const imatges = JSON.parse(getDestacades());
  //console.log(imatges);
  //console.log(imatges.length);
  let index = 0;
  let interval;

  function creaInterval() {
    interval = setInterval(function () {
      index = (index + 1) % imatges.length;

      document.getElementById("mostrador").src = imatges[index];
    }, 1500);
  }
  document.getElementById("mostrador").src = imatges[index];
  creaInterval();
};

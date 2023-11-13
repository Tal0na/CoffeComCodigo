function updateClocks() {
  var clocks = document.getElementsByClassName("clock");

  for (var i = 0; i < clocks.length; i++) {
    var timezone = clocks[i].getAttribute("data-timezone");
    var now = new Date().toLocaleString("en-US", {
      timeZone: timezone,
      hour12: false,
    });

    clocks[i].textContent = `
      ${timezone.split("/")[1]}
      ${now.split(",")[1]}
    `;
  }
}

setInterval(updateClocks, 1000);

updateClocks();

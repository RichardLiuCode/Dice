document.getElementById("roll").addEventListener("click", function () {
  var RandomBinaryDecimal = Math.random();
  var randomDecimal = RandomBinaryDecimal * (6 - 1) + 1;
  var result = randomDecimal.toFixed(0);
  if (result == 1) {
    console.log(result);
    document.getElementById("display").src =
      "https://cdn.glitch.global/8c7da6d2-aa1d-4b12-adf0-39b7ac34b223/dice1.png?v=1747622304002";
  } else if (result == 2) {
    document.getElementById("display").src =
      "https://cdn.glitch.global/8c7da6d2-aa1d-4b12-adf0-39b7ac34b223/dice2.png?v=1747632631885";
  } else if (result == 3) {
    document.getElementById("display").src =
      "https://cdn.glitch.global/8c7da6d2-aa1d-4b12-adf0-39b7ac34b223/dice3.png?v=1747622318478";
  } else if (result == 4) {
    document.getElementById("display").src =
      "https://cdn.glitch.global/8c7da6d2-aa1d-4b12-adf0-39b7ac34b223/dice4.png?v=1747632848836";
  } else if (result == 5) {
    document.getElementById("display").src =
      "https://cdn.glitch.global/8c7da6d2-aa1d-4b12-adf0-39b7ac34b223/dice5.png?v=1747622332361";
  } else if (result == 6) {
    document.getElementById("display").src =
      "https://cdn.glitch.global/8c7da6d2-aa1d-4b12-adf0-39b7ac34b223/dice6.png?v=1747622345550";
  }
});

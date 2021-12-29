console.log("test");

let button = document.getElementById("button");
button.innerText = "Are you old enough?";

button.addEventListener("click", () => {
  let input = document.getElementById("input").value;

  if (input < 18) {
    alert("To young to drink, comeback when you are 18!");
  } else if (input >= 65) {
    alert("Aren't you to old to drink here?");
  } else if (input == 18) {
    alert("congratiolation on beeing 18, drink on!!!");
  } else if (input > 18) {
    alert("Come in and drink all you want!");
  }
});
